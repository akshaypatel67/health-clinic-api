const express = require("express");

const connectoToDB = require("./connect");

const app = express();
const PORT = 8001;

const patientRoutes = require("./routes/patient");
// const userRoutes = require("./routes/users");

connectoToDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("api server");
});

app.use("/patient", patientRoutes);

// app.use("/url", urlRoutes);
// app.use("/users", userRoutes);

// app.use("/:shortId", handleRedirect);

app.listen(PORT, () => console.log(`server listening at port: ${PORT}`));
