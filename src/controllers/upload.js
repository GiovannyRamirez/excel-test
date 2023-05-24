const getDataFromExcel = require("../processor/excel");

const uploadFile = async (req, res) => {
  try {
    const response = await getDataFromExcel(req);
    return res.status(200).json({ data: response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: JSON.stringify(err) });
  }
};

module.exports = {
  uploadFile,
};
