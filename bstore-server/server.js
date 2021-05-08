const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./app/routers/router.js");
const PORT = process.env.PORT || 3050;
const cors = require("cors");
const corsOptions = {
  origin: "https://bstore-web.web.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
