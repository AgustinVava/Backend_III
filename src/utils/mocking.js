const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const Cart = require("../models/cart.model");

const generateMockUsers = async (num) => {
  const users = [];

  for (let i = 0; i < num; i++) {
    const passwordHash = await bcrypt.hash("coder123", 10);

    // Crear carrito asociado
    const newCart = await Cart.create({ products: [] });

    const newUser = {
      firstName: `User${i + 1}`,
      lastName: `Mock${i + 1}`,
      email: `user${i + 1}@mock.com`,
      password: passwordHash,
      role: "user",
      cart: newCart._id, // Asocia el carrito creado
    };

    const createdUser = await User.create(newUser);
    users.push(createdUser);
  }

  return users;
};

module.exports = { generateMockUsers };
