const fs = require("fs")
const moment = require("moment")
const xlsx = require("xlsx")
const config = require("./config")

function convertXlsx2Array() {
  let array_result = []
  fs.readdir(config.folder_data_words, (err, files) => {
    files.forEach(file_name => {
      console.log(file_name)
      const arr_data = []
        , path_file = config.folder_data_words + file_name
      try {
        const wb = xlsx.readFile(path_file)
          , sheetName = wb.SheetNames[0]
          , ws = wb.Sheets[sheetName]
          , opt = { blankrows: false }
          , arr_data_inv = xlsx.utils.sheet_to_json(ws, opt)
        arr_data.push(arr_data_inv)
      } catch (err) {
        console.log("**Err read file xlsx", err)
      }
      if (arr_data.length > 0){
        console.log("READ file:", file_name, "- Array length", arr_data.length)
        // for (let i = 0; i < arr_data.length; i++) {
          let data_inv = arr_data[0]
        // }
      }
    })
  })
}

function getVocabulary() {
  let arr_row_data = convertXlsx2Array()
    , arr_words = []
  return arr_words
}

function main() {
  let arr_list_words
  // Type n words
  // Random
  arr_list_words = getVocabulary()
  // Gen file
}

main()