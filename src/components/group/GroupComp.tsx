import { Button, Group } from "@mantine/core";
import React from "react";

export const GroupComp = () => (
  <>
    <Group position="center">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
    <Group position="right" spacing="xl">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
    <Group position="apart" spacing="xl">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
    <Group spacing="xl">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Group>
  </>
);
