import USER from "../models/user.model.js";

const createAndUpdateUser = async (req, res) => {
  const { userName, email, password } = req.body;
  let value = req.body;
  console.log(value);
  for (const key in value) {
    if (!value[key]) {
      res.status(400).json({ status: false, msg: "All feilds are required" });
      return;
    }
  }
  // const id = req.params;
  // return;
  try {
    // create case
    const exitingEmail = await USER.findOne({ email });
    if (exitingEmail) {
      res.status(400).json({ status: false, msg: "Email is already used" });
    }
    const payload = {
      userName,
      email,
      password,
    };
    console.log(payload, "payload");
    const create = await USER.create(payload);
    res.status(201).json({
      status: true,
      msg: "User Created Successfully",
      data: {
        id: create.id,
        userName: create.userName,
        email: create.email,
      },
    });
  } catch (error) {
    console.log("Internal Server Error");
  }
};

export { createAndUpdateUser };
