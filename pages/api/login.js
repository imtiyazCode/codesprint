import User from "../../models/User";
import connectDB from "../../middleware/mongoose";

const handler = async (req, res) => {
    if (req.method === 'POST') {
        let user = await User.findOne({ email: req.body.email })
        if( req.body.password == user.password){
            res.status(200).json({ flag: true })
        }
        res.status(400).json({ error: "Email Or Password is invalid"})
    } else {
        res.status(400).json({ error: "This method is not allowed" })
    }
}

export default connectDB(handler)