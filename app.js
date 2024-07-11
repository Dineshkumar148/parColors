// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const PORT =  3000;

// const app = express();
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'colors',
//   password: 'Parkavi@19',
//   port: 5432,
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files
// app.use(express.static('index.html'));

// // Endpoint to handle form submission
// app.post('/add-college', async (req, res) => {
//   const { name, email, phone, address } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO colleges (name, email, phone, address) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, email, phone, address]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port http://localhost:${PORT}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');
// const PORT = 3000;

// const app = express();
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Colors',
//   password: 'Parkavi@19',
//   port: 5432,
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', "login.html"));
// });

// // Endpoint to handle login
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   if (email === 'parkavi1619@gmail.com' && password === '12345678') {
//     res.status(200).send({ redirectUrl: '/college.html' });
//   } else {
//     res.status(401).send('Invalid email or password');
//   }
// });

// Endpoint to fetch all colleges
// app.get('/colleges', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM college');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// app.get('/colleges/:collegeId/departments', async (req, res) => {
//   const collegeId = req.params.collegeId;
//   try {
//       const result = await pool.query('SELECT * FROM dept WHERE college_id = $1', [collegeId]);
//       res.json(result.rows);
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Server error' });
//   }
// });


// // Endpoint to handle form submission
// app.post('/colleges', async (req, res) => {
//   const { collegeName, collegeEmail, collegePhone, collegeAddress } = req.body;
//   if (!collegeName || !collegeEmail || !collegePhone || !collegeAddress) {
//     return res.status(400).send('All fields are required');
//   }
//   try {
//     const result = await pool.query(
//       'INSERT INTO college (collegename, collegeemail, collegephone, collegeaddress) VALUES ($1, $2, $3, $4) RETURNING *',
//       [collegeName, collegeEmail, collegePhone, collegeAddress]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// app.get('/colleges', (req, res) => {
//   const query = 'SELECT * FROM college'; // Adjust based on your table structure
//   pool.query(query, (error, results) => {
//       if (error) {
//           throw error;
//       }
//       res.status(200).json(results.rows);
//   });
// });

// app.post('/colleges', (req, res) => {
//   const { collegeName, collegeEmail, collegePhone, collegeAddress } = req.body;
//   const query = 'INSERT INTO college (collegeName, collegeEmail, collegePhone, collegeAddress) VALUES ($1, $2, $3, $4)';
//   const values = [collegeName, collegeEmail, collegePhone, collegeAddress];

//   pool.query(query, values, (error, results) => {
//       if (error) {
//           throw error;
//       }
//       res.status(201).send('College added successfully');
//   });
// });

// Endpoint to fetch all colleges
// app.get('/colleges', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM college');
//     res.status(200).json(result.rows);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Endpoint to handle form submission
// app.post('/add-college', async (req, res) => {
//   const { collegeName, collegeEmail, collegePhone, collegeAddress } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO college (collegeName, collegeEmail, collegePhone, collegeAddress) VALUES ($1, $2, $3, $4) RETURNING *',
//       [collegeName, collegeEmail, collegePhone, collegeAddress]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// Route to get departments
// app.get('/depts', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM dept');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching departments:', err);
//     res.status(500).send(' Internal Server error');
//   }
// });

// // Route to add a department
// app.post('/dept', async (req, res) => {
//   const { deptname } = req.body;

//   // Validate the input
//   // if (!deptname) {
//   //   return res.status(400).send('Department name is required');
//   // }

//   try {
//     const result = await pool.query('INSERT INTO dept (deptname) VALUES ($1)', [deptname]);
//     res.status(201).json(result.rows[0]); // Return the newly added department
//   } catch (err) {
//     console.error('Error fetching departments:', err);
//     res.status(500).send('Internal Server error');
//   }
// });

// app.get('/colleges', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM college');
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post('/add-college', async (req, res) => {
//   const { name, email, phone, address } = req.body;
//   try {
//     const result = await pool.query('INSERT INTO college (name, email, phone, address) VALUES ($1, $2, $3, $4) RETURNING *', [name, email, phone, address]);
//     res.json(result.rows[0]);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// Route to get departments
// app.get('/depts', async (req, res) => {
//   const { collegeId } = req.query;
//   if (!collegeId) {
//     return res.status(400).json({ error: 'College ID is missing' });
//   }
//   try {
//     const result = await pool.query(
//       'SELECT * FROM dept WHERE collegeid = $1',
//       [collegeId]
//     );
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Error fetching departments:', error);
//     res.status(500).send('Server error');
//   }
// });

// // Route to post department
// app.post('/dept', async (req, res) => {
//   const { deptname } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO dept (deptname) VALUES ($1) RETURNING *',
//       [deptname]
//     );
//     res.json(result.rows[0]);
//   } catch (error) {
//     console.error('Error adding department:', error);
//     res.status(500).send('Server error');
//   }
// });

// Fetch departments for a specific college
// app.get('/departments', async (req, res) => {
//   const collegeId = req.query.collegeid;
//   try {
//       const result = await pool.query('SELECT * FROM dept WHERE collegeid = $1', [collegeId]);
//       res.json(result.rows);
//   } catch (err) {
//       console.error(err);
//       res.status(500).send('Server error');
//   }
// });

// // Add a new department
// app.post('/add-department', async (req, res) => {
//   const { deptName, underGraduate, postGraduate, collegeId } = req.body;
//   try {
//       const result = await pool.query(
//           'INSERT INTO dept (deptname, undergraduate, postgraduate, collegeid) VALUES ($1, $2, $3, $4) RETURNING *',
//           [deptName, underGraduate, postGraduate, collegeId]
//       );
//       res.json(result.rows[0]);
//   } catch (err) {
//       console.error(err);
//       res.status(500).send('Server error');
//   }
// });



// Route to get all sections
// app.get('/sections', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM section ORDER BY id');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // Route to add a new section
// app.post('/section', async (req, res) => {
//   const { sectionname } = req.body;
//   try {
//     const result = await pool.query('INSERT INTO section (sectionname) VALUES ($1) RETURNING *', [sectionname]);
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // Route to get all student
// app.get('/students', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM student');
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching students', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// //Route to add a new student
// app.post('/student', async (req, res) => {
//   const { name, email, phonenumber, address } = req.body;
//   try {
//     const result = await pool.query(
//       'INSERT INTO student (name, email, phonenumber, address) VALUES ($1, $2, $3, $4) RETURNING *',
//       [name, email, phonenumber, address]
//     );
//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error creating student', err);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { Pool } = require('pg');
// const path = require('path');
// const PORT = 3000;

// const app = express();
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Colors',
//   password: 'Parkavi@19',
//   port: 5432,
// });

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', "login.html"));
// });

const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

// Set up PostgreSQL connection
const db = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Colors',
    password: 'Parkavi@19',
    port: 5432,
});

// Middleware to parse JSON requests
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', "login.html"));
});

// Endpoint to handle login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'parkavi1619@gmail.com' && password === '12345678') {
    res.status(200).send({ redirectUrl: '/college.html' });
  } else {
    res.status(401).send('Invalid email or password');
  }
});

// Endpoint to fetch all colleges
app.get('/colleges', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM colleges');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Route to handle POST requests to add a new college
app.post('/add-college', async (req, res) => {
    try {
        const { collegeName, collegeEmail, collegePhone, collegeAddress } = req.body;

        const query = `
            INSERT INTO colleges (collegename, collegeemail, collegephone, collegeaddress)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [collegeName, collegeEmail, collegePhone, collegeAddress];

        const result = await db.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error adding college:', error);
        res.status(500).send('Error adding college');
    }
});

// // Route to handle GET requests for departments
// app.get('/depts', async (req, res) => {
//   try {
//       const collegeId = req.query.collegeid;
//       if (!collegeId) {
//           return res.status(400).send('College ID is required');
//       }

//       // Query the database to get departments for the given college ID
//       const query = 'SELECT * FROM departments WHERE college_id = $1';
//       const result = await db.query(query, [collegeId]);

//       // Send the result as JSON
//       res.json(result.rows);
//   } catch (error) {
//       console.error('Error loading departments:', error);
//       res.status(500).send('Error loading departments');
//   }
// });

// // Route to handle POST requests to add a new department
// app.post('/dept', async (req, res) => {
//     try {
//         const { deptname, collegeid } = req.body;

//         const query = `
//             INSERT INTO departments (deptname, college_id)
//             VALUES ($1, $2)
//             RETURNING *;
//         `;
//         const values = [deptname, collegeid];

//         const result = await db.query(query, values);
//         res.json(result.rows[0]);
//     } catch (error) {
//         console.error('Error adding department:', error);
//         res.status(500).send('Error adding department');
//     }
// });




// Route to handle GET requests for departments
app.get('/depts', async (req, res) => {
  try {
      const collegeId = req.query.collegeid;
      if (!collegeId) {
          return res.status(400).send('College ID is required');
      }

      // Query the database to get departments for the given college ID
      const query = 'SELECT * FROM departments WHERE collegeid = $1';
      const result = await db.query(query, [collegeId]);

      // Send the result as JSON
      res.json(result.rows);
  } catch (error) {
      console.error('Error loading departments:', error);
      res.status(500).send('Error loading departments');
  }
});

// Route to handle POST requests to add a new department
app.post('/dept', async (req, res) => {
    try {
        const { deptname, collegeid, departmenthead, email, phonenumber } = req.body;

        const query = `
            INSERT INTO departments (deptname, collegeid, departmenthead, email, phonenumber)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *;
        `;
        const values = [deptname, collegeid, departmenthead, email, phonenumber];

        const result = await db.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error adding department:', error);
        res.status(500).send('Error adding department');
    }
});

// Route to get all sections
app.get('/sections', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM section ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to add a new section
app.post('/section', async (req, res) => {
  const { sectionname } = req.body;
  try {
    const result = await db.query('INSERT INTO section (sectionname) VALUES ($1) RETURNING *', [sectionname]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get all student
app.get('/students', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM student');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching students', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Route to add a new student
app.post('/student', async (req, res) => {
  const { name, email, phonenumber, size } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO student (name, email, phonenumber, size) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phonenumber, size]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating student', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
