import express, {Express,Request,Response,NextFunction} from 'express'

const app : Express = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req:Request,res:Response,next:NextFunction) => {
    res.send("<h1>Welcome to Ebid Website</h1>")
})

export default app