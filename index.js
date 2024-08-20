import { userRouter, express } from './controller/UserController.js'
import { productRouter } from './controller/ProductsController.js'
import path from 'path'

//Express App
const app = express()
const port = +process.env.PORT || 4000



app.use('/users', userRouter)
app.use('/products', productRouter)
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
     extended: true
    }))



app.get('^/$|/petCo', (req, res) => {
        res.status(200).sendFile(path.resolve('./static/html/index.html'))
    })
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})