import { Container, Typography } from '@material-ui/core';
import useStyles from '../utils/styles';
//import Image from 'next/image';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography>All rights reserved &copy; Cooper Shop</Typography>
        <div style={{ display: 'flex' }}>
          <a href='#'>
            <Typography variant='h6'>
              <i className='fab fa-twitter'></i>
            </Typography>
          </a>

          <a href='#'>
            <Typography
              variant='h6'
              style={{ marginLeft: 10, marginRight: 10 }}
            >
              <i className='fab fa-instagram'></i>
            </Typography>
          </a>

          <a href='#'>
            <Typography variant='h6'>
              <i className='fab fa-facebook-square'></i>
            </Typography>
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
