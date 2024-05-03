import { useSession } from 'next-auth/react';
import React from 'react';

const Home = () => {
    const session = useSession();
    return (
        <div>
            {console.log(session)}
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
