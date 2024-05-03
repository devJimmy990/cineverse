import SimpleBackdrop from '@/components/loading';
import { setUserLogin } from '@/controller/slices/user_slice';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const { data: session } = useSession();
    const router = useRouter();

    console.log('Session:', session);
    useEffect(() => {
        const user = session?.user;
        if (user) {
            console.log('User:', user);
            dispatch(setUserLogin(user));
            router.push('/home');
        }
    }, [dispatch, router, session?.user]);
    return (
        <SimpleBackdrop />
    )


}

export default Auth;
