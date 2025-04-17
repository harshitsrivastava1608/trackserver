const mongoose = require("mongoose");
const MilkSessionSchema = new mongoose.Schema({
    start_time: {
        type: Date
    },
    end_time: {
        type: Date
    },
    duration: {
        type: Number
    },
    milk_quantity: {
        type: Number
    },
    

},{
    timestamps:true
});

const MilkSession = mongoose.model("milkSession", MilkSessionSchema);
module.exports = MilkSession