import {connection as db} from "../config/config.js";
class Products {
    fetchProducts(req, res) {
        try {
            const strQry = `
       SELECT prodID, prodName, Category,prodDescription, prodURL, amount
       FROM Products;`
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve all products')
                res.json({
                    status: res.statusCode,
                    results
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    recentProducts(req, res) {
        try {
            const strQry = `
            SELECT prodID, prodName, Category,prodDescription, prodURL, amount
            FROM Products
            ORDER BY productID DESC
            LIMIT 3;`
            db.query(strQry, (err, results) => {
                if (err) throw new Error('Unable to retrieve recent products')
                res.json({
                    status: res.statusCode,
                    results
                })

            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }

    }
    fetchProduct(req, res) {
        try {
            const strQry = `
SELECT prodID, prodName, Category,prodDescription, prodURL, amount
       FROM Products
       WHERE prodID = ${req.params.id};`
            db.query(strQry, (err, result) => {
                if (err) throw new Error('Unable to retrieve product')
                res.json({
                    status: res.statusCode,
                    result: result[0]
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                msg: e.message
            })
        }
    }
    addProduct(req, res) {
        try {
            const strQry = `
    INSERT INTO Products
    SET ?`
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to add new product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was succesfully added'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    updateProduct(req, res) {
        try {
            const strQry = `
UPDATE Products
SET ? 
WHERE prodID = ${req.params.id};`
            db.query(strQry, [req.body], (err) => {
                if (err) throw new Error('Unable to update product')
                res.json({
                    status: res.statusCode,
                    msg: 'Product was successfully updated'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
    deleteProduct(req, res) {
        try {
            const strQry = `
DELETE FROM Products
WHERE prodID = ${req.params.id};`
            db.query(strQry, (err) => {
                if (err) throw new Error('Unable to delete specified product. Please try again later')
                res.json({
                    status: res.statusCode,
                    msg: 'The product was succesfully removed from the database.'
                })
            })
        } catch (e) {
            res.json({
                status: 404,
                err: e.message
            })
        }
    }
}

export {
    Products
}