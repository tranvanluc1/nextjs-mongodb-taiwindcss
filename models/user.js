import mongoose from "mongoose";
let Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      require: true,
    },
    wallet: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
mongoose.models = {};

let User = mongoose.model("User", userSchema);

export default User;
// export default mongoose.models.User || mongoose.model("User", userSchema);
