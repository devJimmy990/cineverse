import MovieCard from '@/components/movie_card';
import React, { useEffect } from 'react';

const MoviesPage = ({ movies }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            {/* <MovieCard movie={movies} /> */}
        </div>
    );
}

export default MoviesPage;
export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/movies")
        .then(res => res.json());
    return {
        props: { movies: res }
    }
}