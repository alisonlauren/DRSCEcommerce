import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    }, 
    //if you get a source code of this project and run it
    //you will not ever get error
    process.env.JWT_SECRET || "somethingsecret",
    {
    expiresIn: '30d'
    }
    );
}