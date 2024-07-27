import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        num: {},
        str: {},
        bool: {},
      },
      authorize: async (credentials) => {
        console.log(credentials);

        let user = null;

        const {num, str, bool} = credentials;

        if (num === 1 && str === "1" && bool === true) user = { id: "Hello" };

        // return user object with their profile data
        return user;
      },
    }),
  ],
});