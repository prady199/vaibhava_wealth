import express from 'express';
import { pool } from '../server.js';

const router = express.Router();

// Save consultation request
router.post('/consultations', async (req, res) => {
  let connection;
  try {
    const { name, phone, email, city, goal, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !city) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    connection = await pool.getConnection();

    // Insert into database
    const [result] = await connection.execute(
      'INSERT INTO consultations (name, phone, email, city, goal, message) VALUES (?, ?, ?, ?, ?, ?)',
      [name, phone, email, city, goal || 'Retirement Planning', message || '']
    );

    res.status(201).json({
      success: true,
      message: 'Consultation request saved successfully',
      data: {
        id: result.insertId,
        name,
        phone,
        email,
        city,
        goal,
        message,
      },
    });
  } catch (error) {
    console.error('Error saving consultation:', error);
    res.status(500).json({ error: 'Failed to save consultation request' });
  } finally {
    if (connection) connection.release();
  }
});

// Get all consultations (optional - for admin dashboard)
router.get('/consultations', async (req, res) => {
  let connection;
  try {
    connection = await pool.getConnection();
    const [consultations] = await connection.execute(
      'SELECT * FROM consultations ORDER BY created_at DESC'
    );
    res.json({ success: true, data: consultations });
  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({ error: 'Failed to fetch consultations' });
  } finally {
    if (connection) connection.release();
  }
});

export default router;
