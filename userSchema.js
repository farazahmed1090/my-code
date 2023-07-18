const mongoose = require('mongoose')
const { Schema } = mongoose;

const employeeSchema = new Schema({
    emp_Fname:String,
    emp_Lname:String,
    emp_Email:String,
    emp_Type:String,
    emp_Contact:Number,
    emp_Address:String,
    emp_Designation:String,
    emp_Salary:Number,
    emp_Pass:Number
});
exports.Employee= mongoose.model('Employee',employeeSchema)