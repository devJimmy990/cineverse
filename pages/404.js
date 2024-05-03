import React, { useCallback } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { useRouter } from 'next/router';

const PageNotFound = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push('/home');
  }, [router]);
  return (
    <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '100px' }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom style={{ color: '#F50057', fontWeight: 'bold' }}>
            Oops! Page Not Found
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#616161' }}>
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick}
            style={{ backgroundColor: '#F50057', color: 'white', fontWeight: 'bold', textTransform: 'none' }}
          >
            Go to Home Page
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageNotFound;
