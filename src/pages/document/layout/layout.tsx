import { AppShell, Button, Footer, Header } from "@mantine/core";
import { NextPage } from "next";
import React, { useState } from "react";
import OtherLayout from "./OtherLayout";

const Layout: NextPage = () => {
  const [opened, setOpened] = useState(false);

  console.log(opened);

  return (
    /* Layoutを簡単に作成できる */
    <AppShell
      navbarOffsetBreakpoint="sm"
      navbar={<div />}
      header={
        <Header height={60} p="xs" className="bg-purple-500">
          header
        </Header>
      }
      footer={
        <Footer height={60} p="md">
          Application footer
        </Footer>
      }
      padding="md"
    >
      <main>
        <Button radius="md" onClick={() => setOpened((prev) => !prev)}>
          toggle
        </Button>
        <OtherLayout />
      </main>
    </AppShell>
  );
};

export default Layout;
