import { Box, Typography, Paper, Grid, Button } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import TheatersIcon from '@mui/icons-material/Theaters';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Person } from '@mui/icons-material';
import MovieNotFound from '@/components/movie_not_found';

const MovieId = ({ movie }) => {

    
    // if (!movie) return <SimpleBackdrop />;
    if (movie.success) return <MovieNotFound />
    return (
        <Paper sx={{ width: '100%', mx: 'auto', p: 2, backgroundColor: '#424242', color: 'white' }}>

            <Grid container spacing={3}>
                {/* Movie Poster */}
                <Grid item xs={12} sm={4}>
                    <Box
                        sx={{
                            mt: 2,
                            p: 2,
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
                            backgroundSize: 'cover',
                            borderRadius: '8px',
                            color: '#fff',
                            minHeight: '700px',
                            display: 'flex',
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}
                    />
                </Grid>

                {/* Movie Details */}
                <Grid item xs={12} sm={8}>
                    <Typography variant="h4" component="h1">{movie.title}</Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Release Date: {new Date(movie.release_date).toDateString()}
                    </Typography>

                    {/* Adults */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <Person sx={{ mr: 0.5, color: 'grey' }} />
                        <Typography variant="body2" component="span">For Adults: {movie.adult ? "Yes" : "No"}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarRateIcon sx={{ mr: 0.5, color: 'gold' }} />
                        <Typography variant="body2" component="span">{movie.vote_average} ({movie.vote_count} reviews)</Typography>
                    </Box>
                    {/* Actions */}
                    <Button variant="contained" startIcon={<TheatersIcon />} sx={{ mr: 2, textTransform: "capitalize" }}>
                        Watch Now
                    </Button>
                    <Button variant="contained" startIcon={<FavoriteIcon />} sx={{ textTransform: "capitalize", backgroundColor: 'red' }}>
                        Add to Favourit
                    </Button>
                </Grid>
            </Grid>

            {/* Backdrop */}
            <Box
                sx={{
                    mt: 2,
                    p: 2,
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                    backgroundSize: 'cover',
                    borderRadius: '8px',
                    color: '#fff',
                    minHeight: '700px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="h5" component="div"
                    sx={{ width: '65%', align: "justify", backgroundColor: 'rgba(0, 0, 0, 0.5)', p: 2, borderRadius: '17px' }}>
                    More About &quot;{movie.overview}&quot;
                </Typography>
            </Box>
        </Paper>
    );
}

export default MovieId;
export async function getServerSideProps(context) {
    const id = context.query.movieId;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7&language=en-US`)
        .then(res => res.json());

    return {
        props: { movie: res }
    }
}