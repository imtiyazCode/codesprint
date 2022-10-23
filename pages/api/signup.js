import User from "../../models/User";
import connectDB from "../../middleware/mongoose";
import CryptoJS from 'crypto-js'

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { name, email, number } = req.body;
        const seccPass = CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_SECRET_KEY)

        let user = await User.create({ name: name, email: email, number: number, password: seccPass })
        res.status(200).json({ success: true, user: user })

    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler)