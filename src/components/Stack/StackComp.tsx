import { Button, Space, Stack } from "@mantine/core";
import React from "react";

export const StackComp = () => (
  <>
    <Stack align="flex-end" justify="space-around" className="bg-gray-300">
      <Button variant="outline">1</Button>
      <Button variant="outline">2</Button>
      <Button variant="outline">3</Button>
    </Stack>
    <Stack
      align="center"
      justify="space-between"
      p={40}
      className="bg-gray-600"
    >
      <Button variant="outline">1</Button>
      <Space h="md" />
      <Button variant="outline">2</Button>
      <Space h="md" />
      <Button variant="outline">3</Button>
    </Stack>
  </>
);
