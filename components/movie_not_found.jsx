import React from 'react';
import { Container, Box, Typography, Paper, Grid, Button } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { useRouter } from 'next/router';

const MovieNotFound = () => {
    const router = useRouter();
    return (
        <Container maxWidth="md" style={{ textAlign: 'center', marginTop: '100px' }}>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12}>
                    <MovieIcon style={{ fontSize: 100, color: '#F50057' }} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom style={{ color: '#F50057', fontWeight: 'bold' }}>
                        Movie Not Found
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom style={{ color: '#616161' }}>
                        Sorry, the movie you are looking for does not exist.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        onClick={() => router.push('/movies')}
                        style={{ backgroundColor: '#F50057', color: 'white', fontWeight: 'bold', textTransform: 'none' }}
                    >
                        Browse More Movies
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MovieNotFound;
