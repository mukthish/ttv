import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExists = await User.exists({ 
            email: email.toLowerCase(),
        });

        if (userExists) {
            return res.status(409).send("E-mail already in use.");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        // Create JWT token
        const token = jwt.sign(
            // user details which we would like to encrypt in JWT token
            {
                userID: user._id,
                email: user.email,
            },
            //secret
            process.env.TOKEN_KEY,
            // additional config
            {
                expiresIn: "8h",
            }
        );

        //  send success response back to the user with data of registered user and JWT
        return res.status(201).json({
            userDetails: {
                email: user.email,
                username,
                token,
            },
        })

    } catch (err) {
        console.log(err);
        return res.status(500).send('Error occored. Please try again');
    }

    return res.send("user has been added to the database");
};