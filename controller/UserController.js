import express from 'express'
import bodyParser from 'body-parser'
import {users} from '../model/index.js'
// import { verifyAToken } from '../middleware/UserAuth.js'


const userRouter = express.Router()

userRouter.use(bodyParser.json())

userRouter.get('/', (req, res) => {
    users.fetchUsers(req, res)
})
//verifyAToken
userRouter.get('/:id', (req, res) => {
    users.fetchUser(req, res)
})

userRouter.post('/register',  (req, res) => {
    users.registerUser(req,res)
 })
// verifyAToken

userRouter.patch('/update/:id',(req, res) => {
    users.updateUser(req, res)
})

// verifyAToken,
userRouter.delete('/delete/:id',  (req, res) => {
    users.deleteUser(req, res)
})

userRouter.post('/login', (req, res) => {
    users.login(req, res)
})

export {
    express,
    userRouter
}