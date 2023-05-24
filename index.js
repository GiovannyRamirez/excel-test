const express = require("express");

const upload = require("./src/routes/upload");

const PORT = 8000;

const app = express();

app.use(express.json());

app.use("/upload", upload);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
