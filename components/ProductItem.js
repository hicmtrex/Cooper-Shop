import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  List,
  Typography,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <Card>
      <NextLink href={`/product/${product._id}`} passHref>
        <CardActionArea>
          <CardMedia
            component='img'
            image={product.image}
            title={product.name}
            style={{ height: '200px', padding: 20, objectFit: 'contain' }}
          />
          <CardContent>
            <Typography component={'h6'} variant='h6'>
              {product.name}
            </Typography>
            <List>
              {product.specifications.map((specs, index) => (
                <Typography
                  style={{
                    backgroundColor: '#FF6347',
                    marginTop: 5,
                    padding: 2,
                    color: '#fff',
                    borderRadius: 5,
                  }}
                  key={index}
                >
                  {specs}
                </Typography>
              ))}
            </List>
            {/* <Rating value={product.rating} readOnly></Rating> */}
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        <Typography>${product.price}</Typography>
        <Button
          size='small'
          color='primary'
          onClick={() => addToCartHandler(product)}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
