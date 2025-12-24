import mongoose from "mongoose";
import USER from "../models/user.model.js";

const createAndUpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { userName, email, password } = req.body;
    //  Update User
    if (id) {
      const updatedData = {};
      if (userName) updatedData.userName = userName;
      if (email) updatedData.email = email;
      if (password) updatedData.password = password;

      const update = await USER.findByIdAndUpdate(id, updatedData, {
        new: true,
        runValidators: true,
      });

      if (!update) {
        return res.status(404).json({
          status: false,
          msg: "User not found",
        });
      }

      return res.status(200).json({
        status: true,
        msg: "User Updated Successfully",
        data: {
          id: update.id,
          userName: update.userName,
          email: update.email,
        },
      });
    }
    // Create User
    if (!userName || !email || !password) {
      return res.status(400).json({
        status: false,
        msg: "All fields are required",
      });
    }

    const exitingEmail = await USER.findOne({ email });
    if (exitingEmail) {
      return res.status(400).json({
        status: false,
        msg: "Email is already used",
      });
    }

    const create = await USER.create({
      userName,
      email,
      password,
    });

    return res.status(201).json({
      status: true,
      msg: "User Created Successfully",
      data: {
        id: create.id,
        userName: create.userName,
        email: create.email,
      },
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

const getAllUser = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  const skip = (page - 1) * limit;

  try {
    const getAll = await USER.find({}).skip(skip).limit(limit);
    const totalDocs = await USER.countDocuments({});
    const totalPages = Math.ceil(totalDocs / limit);
    return res.status(200).json({
      status: true,
      msg: "User Fetch Successfully",
      data: { getAll, totalDocs, totalPages },
    });
  } catch (error) {
    console.log("Error", error);
    return res
      .status(500)
      .json({ status: false, msg: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.query;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ status: false, msg: "Invalid User Id" });
    }
    const user = await USER.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json({ status: false, msg: "User Not Found" });
    }
    return res
      .status(200)
      .json({ status: true, msg: "User Deleted Successfully" });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: false,
      msg: "Internal Server Error",
    });
  }
};

export { createAndUpdateUser, deleteUser, getAllUser };
