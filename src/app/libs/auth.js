import React from "react";
import GoogleProvider from "next-auth/providers/google";

export default async function auth() {
     providers: [
      await GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ];

  return <div></div>;
}
