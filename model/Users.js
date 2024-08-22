import {connection as db} from '../config/config.js' 
import {createToken} from '../middleware/UserAuth.js'
import { compare, hash } from    'bcrypt' 

class Users {
fetchUsers(req, res) {

        try {
            const strQry = `
            SELECT userID, firstName, lastName, userAge, Gender,userRole, emailAdd, userProfile
            FROM Users;`
            db.query(strQry, (err, results) => {
                if(err) throw new Error(`Unable to fetch all users`) 
                    res.json({
                status: res.statusCode, results
                    })
            }) 
            } catch(e) {
                res.json({
                    status: 404,
                    msg: e.message
                })
            }
}
fetchUser(req, res) {
    try {
        const strQry = `
        SELECT userID, firstName, lastName, userAge,Gender, userRole,emailAdd, userProfile
        FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(strQry, (err, result) => {
            if (err) {
                res.json({
                    status: 404,
                    msg: 'Issue when retrieving user.'
                })
            }
            if (!result.length) {
                res.json({
                    status: 404,
                    msg: 'Incorrect ID provided. Please ensure that the correct ID is provided proceed.'
                })
            } else { 
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            } 
        })
    } catch (e) {
        res.json({
            status: 404,
            msg: 'Please try again later.'
        })
    }
}
async registerUser(req, res) {
    try {
        let data = req.body
        data.userPass = await hash(data.userPass, 12)     
        // Payload
        let user = {
            emailAdd: data.emailAdd, 
            userPass: data.userPass
        }
        let strQry = `
        INSERT INTO Users
        SET ?` 
        db.query(strQry, [data], (err) => {
        if(err) {
            res.json({
                status: res.statusCode,
                msg: 'The email provided is already in use'
            })
        } else {
            const token = createToken(user)
        res.json({
            token,
            msg: 'You have been successfully registered.'
        })
        }
        } )
        } catch(e) {
        res.json({
            status: 404,
            msg: 'Unable to add new user.Please try again later'
        })
        }
}
 async updateUser(req, res) {
    try{
        let data = req.body       
        if(data.userPass) {
            data.userPass = await hash(data.userPass, 12)
        }
      
        const strQry = `
        UPDATE Users
        SET ?
        WHERE userID = ${req.params.id};  
        `
        db.query(strQry, [data], (err) => {
            //'Unable to update user'
            if(err) throw new Error(err)
            res.json({
            status: res.statusCode,
                msg: 'The user record was updated'
            })
        })
    } catch(e) {
     res.json({
        status: 400,
        msg: e.message
     })
    }
}
deleteUser(req, res) {
    try {
        const strQry = `
         DELETE FROM Users
         WHERE userID =  ${req.params.id};
         ` 
       
         db.query(strQry, (err) => {
           if(err) throw new Error('Unable to delete user.')
               res.json({
           status: res.statusCode,
           msg: 'A user\'s information was removed.'
               })
         })
       }
       catch(e) {
       res.json({
           status: 404,
           msg: e.message
       })
       }
}
async login(req, res) {
    try{
        const { emailAdd, userPass } = req.body

        const strQry = `
        SELECT userID, firstName, lastName, userAge, emailAdd, userPass, userRole, userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        
        db.query(strQry,  async(err, result) =>{
          if(err) throw new Error ('To login, please review your query.')
              if(!result?.length) {
                  res.json(
                      {
                  
                      status: 401, 
                      msg: 'Invalid email address. Please ensure that you provide the correct email address.'
                  }
              )
               } else {
               
                  const isValidPass = await compare
                  (userPass, result[0].userPass)
                  if(isValidPass) {
                      
                      const token  = createToken ({
                          emailAdd,
                          userPass
                      })
                      res.json({
                          status: res.statusCode,
                          token,
                          result: result[0]
                      })
                  } else {
                      res.json({
                          status: 401,
                          msg: 'Incorrect password provided.'
                      })
                  }
              }
        })
        } catch(e) {
      res.json({
          status: 404,
          msg: e.message
      }) 
        }
}
}

export {
    Users
}