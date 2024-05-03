import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function CustomizedAppBar() {
    const session = useSession();
    const router = useRouter();
    const pages = [
        { text: 'Dashboard', path: '/' },
        { text: 'Home', path: '/home' },
        { text: 'Movies', path: '/movies' },
    ];
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleMenuClose();
        signOut({ callbackUrl: "/login" });
    };
    const handleLogin = () => {
        handleMenuClose();
        router.push("/login");
    };

    const handleRegister = () => {
        handleMenuClose();
        router.push("/register");
    };
    const handleProfile = () => {
        handleMenuClose();
        router.push("/profile");
    };
    return (
        <AppBar position="static" sx={{ background: 'linear-gradient(to right, #1C1C1C, #454545)' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Your logo and brand */}
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            fontWeight: 700,
                            fontStyle: 'italic',
                            color: '#FFD700', // gold color
                            textDecoration: 'none',
                            marginRight: 'auto', // Pushes navigation links to the right
                        }}
                    >
                        Cineverse
                    </Typography>
                    {/* Navigation links */}
                    <div style={{ marginLeft: 'auto' }}>
                        {pages.map((page) => (
                            <Link
                                key={page.text}
                                href={"/" + page.path}
                                style={{
                                    marginLeft: '20px', color: '#FFD700', // gold color
                                    textDecoration: 'none'
                                }}
                            >
                                {page.text}
                            </Link>
                        ))}
                    </div>
                    {/* Icons */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AccountCircleIcon
                            aria-controls="account-menu"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            style={{ marginLeft: '20px', cursor: 'pointer', fontSize: '30px', color: '#FFD700' }} // gold color
                        />
                        <Menu
                            id="account-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            {session.data ?

                                <>
                                    <Button sx={{ textTransform: 'capitalize', color: '#FFD700' }} onClick={handleProfile}>
                                        Profile
                                    </Button>
                                    <Button sx={{ textTransform: 'capitalize', color: '#FFD700' }} onClick={handleLogout}>
                                        Logout
                                    </Button></>
                                : <>
                                    <Button sx={{ textTransform: 'capitalize', color: '#FFD700' }} onClick={handleLogin}>
                                        Login
                                    </Button>
                                    <Button sx={{ textTransform: 'capitalize', color: '#FFD700' }} onClick={handleRegister}>
                                        Signup
                                    </Button>
                                </>
                            }
                        </Menu>

                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
