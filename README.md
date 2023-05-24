# Reading excel files

- This is an example of how to read excel files using busboy to read multipart/form-data.
- To run this project:
    - Run `npm install`.
    - Run `npm run local`.
- In __Postman__, you can test through [localhost:8000/upload](http://localhost:8000/upload):
    - With a _POST_ http method.
    - In body, set form-data.
    - Add _Key_: _file_.
    - Select _File_.
    - In _Value_: Select a file to upload.
    - Be sure, you can read files on _Postman_.

- If file is not a valid file, it returns:
```
{
    "data": {
        "message": "File not supported",
        "validFiles": [
            "xls",
            "xlsx"
        ],
        "fileExtension": [fileExtension],
        "sheetData": []
    }
}
```
- If file is valid, it returns:
```
{
    "data": {
        "message": "File processed correctly",
        "sheetData": [
            {
                [columnName1]: [columnValue1],
                [columnName2]: [columnValue2],
                ...
            },
            ...
        ]
    }
}
```