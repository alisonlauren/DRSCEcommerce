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

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if(authorization) {
        //you get only token part with this, starting at 0, gets rid of barrier part
        //and returns only the token of the request
        const token =  authorization.slice(7, authorization.length)
        //this encrypts the password
        jwt.verify(token, process.env.JWT_SECRET ||
        "somethingsecret", 
        //decode contains the data of password
        (err, decode) => {
            if(err) {
                res.status(401).send({message: "Invalid Token"})
            } else {
                //at this point the token is correct
                req.user = decode;
                //we pass user as a property of req to the next middleware
                next();
            }
        })
    } else {
        res.status(401).send({message: "No Token"})

    }
}

//authenticate only admin user
export const isAdmin = (req, res, next) => {
    if(req.user && req.user.isAdmin) {
        next();
    } else {
        resizeTo.status(401).send({message: 'Invalid Admin Token' });
    }
}