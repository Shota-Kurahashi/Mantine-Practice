import { Navbar } from "@mantine/core";
import { NextPage } from "next";
import React from "react";

const Nav: NextPage = () => (
  <Navbar height={600} p="xs" width={{ base: 300 }} className="bg-red-500">
    <Navbar.Section>{/* Header with logo */}</Navbar.Section>
    <Navbar.Section grow mt="md">
      {/* Links sections */}
    </Navbar.Section>
    <Navbar.Section>{/* Footer with user */}</Navbar.Section>
  </Navbar>
);

export default Nav;
