const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
var models_path = path.join(__dirname, "./../models");
mongoose.connect("mongodb://localhost/restful_task_api");
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf(".js") >= 0) {
        require(models_path + "/" + file);
    }
});