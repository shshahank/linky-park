import express, { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import signupSchema from "../validators/signup.schema";
import signinSchema from "../validators/signin.schema";
import validateRequest from "../middlewares/validateRequest";
import User from "../models/user.model";
import { JWT_SECRET } from "../config";

const router = express.Router();

// Signup
router.post(
    "/signup",
    validateRequest(signupSchema),
    async (req: Request, res: Response) => {
        const payload = req.body;

        try {
            const existingUser = await User.findOne({
                $or: [
                    { username: payload.username },
                    { email: payload.email },
                ],
            });

            if (existingUser) {
                return res.status(409).json({
                    msg: "Username or email already taken :(",
                });
            }

            // hash password
            const hashedPassword = await bcrypt.hash(payload.password, 10);

            const newUser = await User.create({
                username: payload.username,
                first_name: payload.first_name,
                last_name: payload.last_name,
                email: payload.email,
                password: hashedPassword,
            });

            const token = jwt.sign(
                { userId: newUser._id },
                JWT_SECRET,
                { expiresIn: "7d" }
            );

            return res.status(201).json({
                msg: "User created successfully :)",
                token,
            });
        } catch (err) {
            console.error("Something went wrong while signup", err);
            return res.status(500).json({
                msg: "Something went wrong while signup :(",
            });
        }
    }
);

// Signin
router.post(
    "/signin",
    validateRequest(signinSchema),
    async (req: Request, res: Response) => {
        const payload = req.body;

        try {
            const existingUser = await User.findOne({
                username: payload.username,
            }).select("+password");


            if (!existingUser) {
                return res.status(401).json({
                    msg: "Invalid credentials",
                });
            }

            const isMatch = await bcrypt.compare(
                payload.password,
                existingUser.password
            );

            if (!isMatch) {
                return res.status(401).json({
                    msg: "Invalid credentials",
                });
            }

            const token = jwt.sign(
                { userId: existingUser._id },
                JWT_SECRET,
                { expiresIn: "7d" }
            );

            return res.status(200).json({ token });
        } catch (err) {
            console.error("Something went wrong while signin", err);
            return res.status(500).json({
                msg: "Something went wrong while signin :(",
            });
        }
    }
);

export default router;
