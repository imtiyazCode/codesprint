import User from "../../models/User";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.create(req.body)
        res.status(200).json({ success: true })

    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler)