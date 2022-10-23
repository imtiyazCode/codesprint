import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import CryptoJS from 'crypto-js';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        let bytes = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_SECRET_KEY);
        const sec_pass = bytes.toString(CryptoJS.enc.Utf8);

        if (user && req.body.password == sec_pass) {
            res.status(200).json({ success: true })
        }
        res.status(400).json({ success: false, error: "Email Or Password is invalid" })
    } else {
        res.status(400).json({ success: false, error: "This method is not allowed" })
    }
}

export default connectDB(handler)