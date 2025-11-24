// import NextAuth from "next-auth";
import NextAuth, { type NextAuthConfig, type Session } from "next-auth";

import Google from "next-auth/providers/google";

interface AuthorizedCallbackParams {
  auth: Session | null;
  request: Request;
}

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
  ],

  callbacks: {
    /*
    auth => is the current session ( user data )
    request => request information
    */

    authorized({ auth, request }: AuthorizedCallbackParams) {
      return auth?.user?.email == "ammarashraf230@gmail.com";
    },
  },

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
