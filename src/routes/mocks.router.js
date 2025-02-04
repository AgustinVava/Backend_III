const express = require("express");
const { generateMockUsers } = require("../utils/mocking");

const router = express.Router();

// Endpoint GET: Generar 50 usuarios mock
router.get("/mockingusers", async (req, res) => {
  try {
    const users = await generateMockUsers(50);
    res.status(200).json({ message: "50 mock users generated", users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint POST: Generar usuarios y carritos personalizados
router.post("/generateData", async (req, res) => {
  const { users, carritos } = req.body;

  if (!users || !carritos) {
    return res.status(400).json({ error: "Missing users or carritos parameters" });
  }

  try {
    const generatedUsers = await generateMockUsers(users);
    res.status(200).json({
      message: `${users} users and their carts have been created`,
      users: generatedUsers,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
