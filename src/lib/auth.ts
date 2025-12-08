// import NextAuth from "next-auth";
import NextAuth, { type NextAuthConfig } from "next-auth";

import Google from "next-auth/providers/google";

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

/*
===============================================================================
  callbacks: {
    
    auth => is the current session ( user data )
    request => request information
    
    // authorized({ auth, request }: AuthorizedCallbackParams) {
    //   const allowedEmails = [
    //     "ammarashraf230@gmail.com",
    //     "tafsela0@gmail.com",
    //     "Esesraa908@gmail.com",
    //   ];
    //   console.log("current session ============================");
    //   console.log(auth?.user);
    //   return allowedEmails.includes(auth?.user?.email || "");
    // },
  
*/
