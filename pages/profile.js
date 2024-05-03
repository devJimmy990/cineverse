import React from 'react';
import {
    Container,
    Paper,
    Typography,
    Button,
    Grid,
} from '@mui/material';
import { useRouter } from 'next/router';

const ProfilePage = () => {
    const router = useRouter();
    const handleFavourite = () => {
        router.push("/favourite");
    }
    return (
        <div style={{ height: '95vh', backgroundImage: `url("https://source.unsplash.com/1600x900/?cinema")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="md">
                <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                    <Typography variant="h5" gutterBottom>
                        Profile
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>Name: {"Jimmy"}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Email: {"jimmy@me.com"}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Phone: {"01289223643"}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>Address: {"Alex"}</Typography>
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleFavourite}
                        style={{ marginTop: '16px', textTransform: 'capitalize' }}
                    >
                        View Favourite
                    </Button>
                </Paper>
            </Container>
        </div>
    );
};

export default ProfilePage;
