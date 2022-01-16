/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Grid, Link, Typography } from '@material-ui/core';
import Layout from '../components/Layout';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import ProductItem from '../components/ProductItem';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';
import db from '../utils/db';
import Product from '../models/Product';

const Home = ({ products, topProducts }) => {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
    router.push('/cart');
  };
  return (
    <Layout>
      <Carousel className={classes.carousel} animation='slide'>
        {topProducts.map((product) => (
          <div key={product._id} style={{ display: 'flex' }}>
            <NextLink href={`/product/${product._id}`} passHref>
              <Link>
                <img
                  src={product.image}
                  alt={product.name}
                  className={classes.imageCarousel}
                />
              </Link>
            </NextLink>
            <div style={{ padding: 20 }}>
              <h1 style={{ color: 'white', textAlign: 'center' }}>
                {product.name}
              </h1>
              <h5 style={{ color: 'white' }}>
                {product.description.substring(0, 500)}
              </h5>
            </div>
          </div>
        ))}
      </Carousel>
      <Typography variant='h2'>Popular Products</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item md={4} xs={12} key={product.name}>
            <ProductItem
              product={product}
              addToCartHandler={addToCartHandler}
            />
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}, '-reviews').lean();

  const topProducts = await Product.find({}, '-reviews').lean().limit(6);
  await db.disconnect();
  return {
    props: {
      products: products.map(db.convertDocToObj),
      topProducts: topProducts.map(db.convertDocToObj),
    },
  };
}

export default Home;
