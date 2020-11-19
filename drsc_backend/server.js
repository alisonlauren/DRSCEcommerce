import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'; 
import orderRouter from './routers/orderRouter.js';


dotenv.config(); 

const app = express();

//adding new middleware, that parses json
app.use(express.json());

//middleware, all req that contain data will be translated to req.body
app.use(express.urlencoded({ extended: true}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/DRSCEcommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}); 



app.use('/api/users', userRouter)

app.use('/api/products', productRouter)

app.use('/api/orders', orderRouter);

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb')
})

app.get('/', (req, res) => {
    res.send('Server is ready'); 
})

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message })

})

if (process.env.NODE_ENV === 'production') {
    app.user(express.static('client/build'));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
