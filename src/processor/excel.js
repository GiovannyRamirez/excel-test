const Busboy = require("busboy");
const xlsx = require("xlsx");

const getDataFromExcel = async (req) => {
  return new Promise((resolve, reject) => {
    const busBoy = Busboy({ headers: req.headers });
    let response = {};

    try {
      busBoy.on("file", (_, file, info) => {
        const { filename } = info;
        const validFiles = ["xls", "xlsx"];
        const fileExtensionIndex = filename.lastIndexOf(".") + 1;
        const fileExtension = filename.slice(fileExtensionIndex);
        if (!validFiles.includes(fileExtension)) {
          response = {
            message: "File not supported",
            validFiles,
            fileExtension,
            sheetData: [],
          };
          resolve(response);
        }
        file.on("data", (data) => {
          const workbook = xlsx.read(data, { type: "buffer" });
          const sheetName = workbook.SheetNames[0];
          const sheetData = xlsx.utils.sheet_to_json(
            workbook.Sheets[sheetName]
          );
          response = {
            message: "File processed correctly",
            sheetData,
          };
          resolve(response);
        });
      });
      req.pipe(busBoy);
    } catch (err) {
      const response = {
        message: JSON.stringify(err),
      };
      reject(response);
    }
  });
};

module.exports = getDataFromExcel;
