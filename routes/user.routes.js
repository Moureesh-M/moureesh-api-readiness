const express = require('express');
const router = express.Router();

let users = [];

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
router.get('/', (req, res) => {
  res.status(200).json(users);
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create user
 *     requestBody:
 *       required: true
 */
router.post('/', (req, res) => {
  const user = req.body;

  if (!user.name) {
    return res.status(400).json({ message: "Name required" });
  }

  users.push(user);
  res.status(201).json(user);
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user
 */
router.put('/:id', (req, res) => {
  const id = req.params.id;
  users[id] = req.body;
  res.status(200).json(users[id]);
});

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user
 */
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.status(200).json({ message: "Deleted" });
});

module.exports = router;