import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider } from "@mantine/core";
import queryClient from "../libs/queryClient";

const App = ({ Component, pageProps }: AppProps) => {
  const [client] = useState(() => queryClient);

  return (
    <QueryClientProvider client={client}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Verdana, sans-serif",
          colorScheme: "light",
          /* 色を追加できる pink.1 みたいにアクセスする */
          colors: {
            pink: [
              "#fff1f2",
              "#ffe4e6",
              "#fecdd3",
              "#fda4af",
              "#fb7185",
              "#f43f5e",
              "#e11d48",
              "#be123c",
              "#9f1239",
              "#881337",
            ],
          },
          // primaryColor: "blue",
          // primaryShade: {
          //   light: 8,
          //   dark: 1,
          // },
        }}
      >
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </MantineProvider>
    </QueryClientProvider>
  );
};

export default App;
