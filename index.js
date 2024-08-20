import { userRouter, express } from './controller/UserController.js'

import path from 'path'

// Express app
const app = express()
const port = +process.env.PORT || 4000
const router = express.Router()

// Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next()
})
app.use('/user', userRouter)

app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
     extended: true
    }))

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})