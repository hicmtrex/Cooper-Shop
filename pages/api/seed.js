import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import products from '../../utils/products.json';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  // await User.deleteMany();
  //await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
