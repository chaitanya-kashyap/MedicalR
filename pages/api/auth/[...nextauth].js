import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
      GoogleProvider({
        clientId: "1064236453223-6k0b720dld7g59ed4fsm65m1qk4nv730.apps.googleusercontent.com",
        clientSecret: "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",
        authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
      })
    ],
    jwt: {
      encryption: true
    },
    secret: "secret token",
    callbacks: {
        async jwt(token, account) {
          if (account ?.accessToken) {
            token.accessToken = account.accessToken
          }
          return token;
        },
        redirect: async (url, _baseUrl)=>{
          if (url === '/') {
            return Promise.resolve('/')
          }
          return  Promise.resolve('/')
        }
    }
  });