import { createAccessToken, createRefreshToken } from "../../../middleware/jwt";
import connectDB from "../../../middleware/mongodb";
import Users from "../../../models/user";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { setCookie } from "cookies-next";

const handler = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ status: 400, msg: "Missing parameters!" });
    const user = await Users.findOne({ username });
    if (!user)
      return res
        .status(400)
        .json({ status: 400, msg: "username is not exist!" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ status: 400, msg: "Password is incorrect." });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    setCookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/api/user/refresh_token",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      status: 200,
      msg: "Login success!",
      access_token,
      user: { ...user._doc },
    });
  } catch (error) {
    return res.status(500).json({ status: 500, msg: "Server error!" });
  }
};

export default connectDB(handler);
