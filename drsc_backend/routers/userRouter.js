import express from 'express';
import expressAsyncHandler from 'express-async-handler'
import bcrypt from 'bcrypt';
import User from '../models/userModel.js';
import data from '../data.js'
import { generateToken, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });

}) 
);

userRouter.post('/signin', expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(user) {
        if(bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            }); 
            return;
        }
    }
    res.status(401).send({message: 'Invalid Email or Password'})
}))

userRouter.post(
    '/register',
    expressAsyncHandler(async(req, res) => {
    const user = new User({
    name: req.body.name, 
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
        });
        const createdUser = await user.save();
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser)
        })
    })
);

userRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user); 
    } else {
        res.status(404).send({message: "User Not Found"})
    }
}))


userRouter.put('/profile', isAuth, expressAsyncHandler(async(req, res) => {
    const user = await User.findById(req.user._id);
    if(user) {
        //the or takes care of if the user puts in an empty string, it will default to
        //their previously set name, email, etc.
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        if(req.body.password) {
            //this of course is encrypted, using bycrpt
            user.password = bcrypt.hashSync(req.body.password, 8)
        }
        const updatedUser =  await user.save();
        res.send({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser)
            })
        }
    })
);

export default userRouter; 