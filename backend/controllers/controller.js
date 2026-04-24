import { UserModel } from "../models/register.js";


export const postsignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name, email, password)
        if (!password) {
            return res.json({ status: false, message: "Password is required" });
        }

        const existingUser = await UserModel.findOne({ email });

        if (existingUser) {
            return res.json({ status: false, message: "User already exists" });
        }

      

        const newUser = await UserModel.create({
            name,
            email,
            password
        });

        res.json({
            status: true,
            message: "Signup success",
            data: newUser,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ status: false, message: "Server error" });
    }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

   
    if (!email || !password) {
      return res.json({
        status: false,
        message: "Email & Password required",
      });
    }

  
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.json({
        status: false,
        message: "User not found",
      });
    }

    // check password
    if (user.password !== password) {
      return res.json({
        status: false,
        message: "Invalid password",
      });
    }

    res.json({
      status: true,
      message: "Login successful",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.json({
      status: false,
      message: "Server error",
    });
  }
}