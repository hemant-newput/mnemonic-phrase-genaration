
import * as express from 'express';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import Generator from "./routes/generate"
import Validator from "./routes/validate"


const app = express();
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.set("view engine", "ejs") 

app.use(express.static('assets'))      
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
    preflightContinue: true,
    allowedHeaders: [
        '*',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization',
        'Accept-Version',
        'device-id',
        'env',
        'User-IP',
    ],
}));

app.get('/v1', (req, res) => {
    res.json({
        version: 'v1',
        application: 'Mnemonics API',
        license: 'Hemant Shrivastava',
    });
});
app.use('/home',(req,res)=>{
    res.render('homepage')
})
app.use('/generate/', Generator);
app.use('/validate/', Validator);

app.all('*', (req, res) => {
    res.json({
        message: "Route not Found"
    });
});

const PORT = 3000;

(async () => {
    const server = app.listen(PORT, () => {
        console.log(`Server listening on port: ${PORT}`);
    });
    server.keepAliveTimeout = 65000;
    server.headersTimeout = 66000;
})();
