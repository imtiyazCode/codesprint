import User from "../../models/User";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        res.status(200).json({ flag: true })

    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler)