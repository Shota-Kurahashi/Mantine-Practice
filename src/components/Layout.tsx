import { FC, ReactNode } from "react";
import Head from "next/head";

type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children, title = "Mantine" }) => (
  <div className="flex min-h-screen">
    <Head>
      <title>{title}</title>
    </Head>
    <header />
    <main className="flex flex-1 flex-col justify-center p-4">{children}</main>
    <footer />
  </div>
);
