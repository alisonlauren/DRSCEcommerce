import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js'; 
import orderRouter from './routers/orderRouter.js';
import path from 'path';


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

    app.use(express.static('drsc_frontend/build'));

app.get('*', function (req, res) {
    res.sendFile(path.resolve( 'drsc_frontend/build/index.html'));});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
});
