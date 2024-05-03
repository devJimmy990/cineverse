import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';
import GoolgeProvider from 'next-auth/providers/google';

export default NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            scope: 'user:email',
        }),
        GoolgeProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
});