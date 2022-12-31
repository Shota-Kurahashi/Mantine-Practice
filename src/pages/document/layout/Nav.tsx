import { Navbar } from "@mantine/core";
import React, { FC } from "react";

export const Nav: FC = () => (
  <Navbar height={600} p="xs" width={{ base: 300 }} className="bg-red-500">
    <Navbar.Section>{/* Header with logo */}</Navbar.Section>
    <Navbar.Section grow mt="md">
      {/* Links sections */}
    </Navbar.Section>
    <Navbar.Section>{/* Footer with user */}</Navbar.Section>
  </Navbar>
);
