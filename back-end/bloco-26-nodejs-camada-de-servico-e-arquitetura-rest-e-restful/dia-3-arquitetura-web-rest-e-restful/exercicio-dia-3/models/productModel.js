const connection = require('./connection');
// const mongodb = require('mongodb');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  try {
    const [
      result,
    ] = await connection.query(
      `INSERT INTO products (name, brand) VALUES (?, ?);`,
      [name, brand]
    );

    return { id: result.insertId, name, brand };
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const getAll = async () => {
  try {
    const db = await connection();
    const products = await db.collection('products').find().toArray();

    return products;
  } catch (err) {
    console.error(err);
  }
};

const getById = async (id) => {
  try {
    if (!ObjectId.isValid(id)) return null;
    // solução com then()
    // return await connection().then((db) => db.collection('products').findOne(ObjectId(id)));

    // solução com await
    const db = await connection();
    const products = await db.collection('products').findOne(ObjectId(id));
    
    return products;
  } catch (err) {
    console.error(err);
  }
};

const update = async (id, name, brand) => {
  try {
    await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

const exclude = async (id) => {
  try {
    const product = await getById(id);
    if (!product) return {};
    await connection.query('DELETE FROM products WHERE id = ?', [id])
    return product;
  } catch (err) {
    console.error(err);
    return process.exit(1);
  }
};

module.exports = { add, getAll, getById, update, exclude };