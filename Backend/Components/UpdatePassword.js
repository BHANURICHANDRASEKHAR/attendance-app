import Users from "../Database/Modals/Users.js";
import express from "express";
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await Users.updateOne(
            { email },
            { $set: { password: password } }
        );
         console.log(result);

        // Check if user exists and password matches
        if (result.modifiedCount > 0) {
            res.status(200).json({ msg: 'Password updated successfully',status:true });
        } else {
            res.status(200).json({ msg: 'Old PassWord and new PassWord is Same',status:false });
        }

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

export default router;
