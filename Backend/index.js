import express from "express";
import router from "./src/routes/user.routes.js";
import connectdb from "./src/db/database.js";
const app = express();
const port = 9000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.use("/api/v1", router);

connectdb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runnig at port , ${port}`);
    });
  })
  .catch(() => {
    console.log("Error In Catch");
  });
