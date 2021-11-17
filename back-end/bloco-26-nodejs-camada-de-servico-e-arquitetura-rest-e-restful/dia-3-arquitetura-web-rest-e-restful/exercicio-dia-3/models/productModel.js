const connection = require('./connection');
const mongodb = require('mongodb');
const { ObjectId } = require('mongodb');

const add = async (name, brand) => {
  const db = await connection();
  const addProduct = await db.collection('products').insertOne({ name, brand });
  return addProduct;
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

const update = async (id, name, brand) => { // escolheu atualizar só pelo id, e não pelo name nem pelo brand
    // await connection.query('UPDATE products SET name = ?, brand = ? WHERE id = ?', [name, brand, id])
    const db = await connection();
    if (!ObjectId(id)) return null;

    const product = await db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, brand }});
    
    if (!product) return add(name, brand);
    return product;
    // return getById(id); // assim retorna o produto atualizado.
};

const exclude = async (id) => {
  const db = await connection();
  if (!ObjectId(id)) return null;
  const product = await getById(id);
  await db.collection('products').deleteOne({ _id: ObjectId(id) });
  return product;
};

module.exports = { add, getAll, getById, update, exclude };