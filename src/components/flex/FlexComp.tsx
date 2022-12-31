import { Button, Flex } from "@mantine/core";
import React from "react";

export const FlexComp = () => (
  <Flex
    className="bg-gray-300"
    wrap="wrap"
    gap="xl"
    justify="center"
    align="center"
  >
    <Button>Button 1</Button>
    <Button color="orange">Button 2</Button>
    <Button color="pink.4">Button 3</Button>
  </Flex>
);
