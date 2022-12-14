import connectDB from "../../../middleware/mongodb";
import Users from "../../../models/user";
import bcrypt from "bcrypt";

const handler = async (req, res) => {
  try {
    const { username, password, email, cf_password } = req.body;
    if (!username || !password || !email || !cf_password)
      return res.status(400).json({ status: 400, msg: "Missing parameters!" });
    const oldUser = await Users.findOne({ username });
    if (oldUser)
      return res.status(400).json({ status: 400, msg: "User is already!" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ status: 400, msg: "Password must be at least 6 characters." });

    const passwordHash = await bcrypt.hash(password, 12);
    const newUser = new Users({ username, password: passwordHash, email });
    await newUser.save();
    return res.status(200).json({
      status: 200,
      msg: "Register success!",
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error!" });
  }
};

export default connectDB(handler);
