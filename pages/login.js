import React from 'react';
import { Container, Paper, TextField, Button, Typography, Box, IconButton, Fab } from '@mui/material';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function LoginPage() {
    const session = useSession();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const handleDefaultSignIn = () => {
        console.log(`Sign in`);
        // createUser("default", { callbackUrl: "/home" });
        setLoading(true);
    }
    const handleGoogleSignIn = async () => {
        console.log(`Sign in with Google`);
        await signIn("google", { callbackUrl: "/auth"});
        setLoading(true);
    };

    const handleGithubSignIn = () => {
        console.log(`Sign in with GitHub`);
        signIn("github", { callbackUrl: "/auth" });
        setLoading(true);
    };

    return (
        <Container component="main" maxWidth={false} sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(https://source.unsplash.com/random/?cinema)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}>
            <Paper elevation={6} sx={{
                p: 4,
                display: 'flex',
                flexDirection: 'column',
                opacity: loading ? 0.5 : .9,
                gap: 2,
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                backdropFilter: 'blur(8px)', // Optional: add a blur effect to the background of the paper
            }}>
                <Typography component="h1" variant="h5" sx={{ textAlign: 'center' }}>
                    Sign In
                </Typography>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    sx={{ borderRadius: '4px' }}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    sx={{ borderRadius: '4px' }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, borderRadius: '20px', width: '60%', margin: 'auto', textTransform: 'capitalize', fontSize: '18px' }}
                    onClick={handleDefaultSignIn}
                >
                    Sign In
                </Button>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, }}>
                    <Fab
                        onClick={handleGithubSignIn}
                        aria-label="sign-in with Google"
                        sx={{
                            backgroundColor: 'white',
                            alignSelf: 'center',
                            borderRadius: '50%',
                            '&:hover': {
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                transform: 'scale(1.1)'
                            },
                            transition: 'transform 0.3s, box-shadow 0.3s'
                        }}>
                        <GitHubIcon sx={{ color: 'black', width: '110%', height: '100%' }} />
                    </Fab>
                    <Fab
                        onClick={handleGoogleSignIn}
                        aria-label="sign-in with Google"
                        sx={{
                            backgroundColor: 'red', // Google Red
                            alignSelf: 'center',
                            borderRadius: '50%',
                            '&:hover': {
                                backgroundColor: 'red', // Google Red
                                boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
                                transform: 'scale(1.1)', // Scale up on hover
                            },
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            width: '56px', // Adjust size
                            height: '56px', // Adjust size
                        }}
                    >
                        <GoogleIcon sx={{ color: 'white', width: '70%', height: '70%', }} /> {/* Adjust size */}
                    </Fab>
                </Box>
                {loading && <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>Loading...</Typography>}
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    Don&apos;t have an account?{' '}
                    <Link href="/register" passHref>
                        <Button sx={{ p: 0, minWidth: 'auto', textTransform: 'none', color: 'secondary.main' }}>
                            Create new
                        </Button>
                    </Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default LoginPage;
