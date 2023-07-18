const emp_schema_modal = require('../models/userSchema');
const emp = emp_schema_modal.Employee;

 //create employee
exports.createProduct = async (req, res) => {
    try {
        const employee = new emp(req.body);

        // Save the employee to the database
        const savedEmployee = await employee.save();

        console.log('Employee saved successfully:', savedEmployee);
        res.status(201).json(savedEmployee);
    } catch (err) {
        console.error('Error saving employee to the database:', err);
        res.status(500).json({ error: 'An error occurred while saving the employee.' });
    }
}
//get All Emp employee
exports.getAllEmployees = async (req, res) => {
    try {
      const employees = await emp.find();
      res.json(employees);
    } catch (error) {
      console.error('Error fetching employees:', error);
      res.status(500).json({ error: 'An error occurred while fetching employees.' });
    }
  };

  // Read a single employee by ID
exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await emp.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'An error occurred while fetching the employee.' });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await emp.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated employee document
    });
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.json(updatedEmployee);
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).json({ error: 'An error occurred while updating the employee.' });
  }
};


// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await emp.findByIdAndRemove(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found.' });
    }
    res.json(deletedEmployee);
  } catch (error) {
    console.error('Error deleting employee:', error);
    res.status(500).json({ error: 'An error occurred while deleting the employee.' });
  }
};
//get user by email
exports.getUserByEmail = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await emp.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'An error occurred while fetching the user.' });
  }
};
