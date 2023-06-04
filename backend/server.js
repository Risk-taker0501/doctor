const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'doctor'
  }
});
app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await knex('users').insert({
      username,
      password: hashedPassword,
      role: 'doctor',
    });
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await knex('users').where({ username }).first();
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const role = user.role;
    const userId = user.id;
    const token = jwt.sign({ user_id: user.id }, 'secret_key');
    res.json({ token, role, userId });
  } catch (error) {
    console.log(error);
    res.status(500).send('Error logging in');
  }
});

app.post('/api/doctor/addappointment', async (req, res) => {
  const { name, age, status, userId } = req.body;
  try {
    const addResult = await knex('appointments').insert({
      patient : name,
      age,
      status,
      doctorId: userId,
    });
    const appointments = await knex('appointments').where('doctorId', '=', userId);
    res.json({appointments});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/api/addappointment/delete', async (req, res) => {
  const { appointmentId } = req.body;
  try {
    const deleteResult = await knex('appointments').where('id', '=', appointmentId).del();
    const appointments = await knex('appointments');
    res.json({appointments});
    // res.status(201).send('Appointment deleted successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.get('/api/appointments/getall', async (req, res) => {
  try {
    const appointments = await knex('appointments');
    res.json({appointments});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/api/appointments/getallbyid', async (req, res) => {
  const { userId } = req.body;
  try {
    const appointments = await knex('appointments').where('doctorId', '=', userId);
    res.json({appointments});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/api/patients/add', async (req, res) => {
  const { name, age, disease, userId } = req.body;
  try {
    const addResult = await knex('patients').insert({
      name,
      age,
      disease,
      visits : 10,
      progress : 30,
      doctorId: userId,
    });
    res.status(201).send('Patient is added successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.get('/api/patients/getall', async (req, res) => {
  try {
    const patients = await knex('patients');
    res.json({patients});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.post('/api/patients/getallbyid', async (req, res) => {
  try {
    const { userId } = req.body;
    const patients = await knex('patients').where('doctorId', '=', userId);
    res.json({patients});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

app.get('/api/doctors/getall', async (req, res) => {
  try {
    const doctors = await knex('users').where('role', '=', 'doctor');
    res.json({doctors});
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});


app.listen(5000, () => {
  console.log('App listening on port 5000');
});
