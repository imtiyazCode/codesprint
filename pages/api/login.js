import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        let bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
        const sec_pass = bytes.toString(CryptoJS.enc.Utf8);

        if (user && req.body.password == sec_pass) {
            const token = jwt.sign({ name: user.name, email: user.email }, process.env.JWT_SECRET, { expiresIn: '30d' })
            res.status(200).json({ success: true, token: token })
        }
        else {
            res.status(400).json({ success: false, error: "Email Or Password is invalid" })
        }
    } else {
        res.status(400).json({ success: false, error: "This method is not allowed" })
    }
}

export default connectDB(handler)