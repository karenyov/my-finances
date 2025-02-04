import React from "react";
import { SSRProvider } from "@react-aria/ssr";
import { SessionProvider, useSession } from "next-auth/react";

import { theme } from "@/styles";
import { ChakraProvider } from "@chakra-ui/react";
import { ProfileContextProvider } from "@/contexts/ProfileContext";
import { RegisterContextProvider } from "@/contexts/RegisterContext";

import "../styles/styles.css";


interface Props {
  Component: any;
  pageProps: any
}

export default function App({ Component, pageProps: { session, ...pageProps } }: Props) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <ProfileContextProvider>
          <RegisterContextProvider>
            <ChakraProvider resetCSS theme={theme}>
              <Component {...pageProps} />
            </ChakraProvider>
          </RegisterContextProvider>
        </ProfileContextProvider>
      </SessionProvider>
    </SSRProvider>
  );
}
