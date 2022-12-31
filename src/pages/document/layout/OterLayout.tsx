import { Center, Container } from "@mantine/core";
import React, { FC } from "react";
import { FlexComp } from "../../../components/flex/FlexComp";
import { GridComp } from "../../../components/grid/GridComp";
import { GroupComp } from "../../../components/group/GroupComp";
import { StackComp } from "../../../components/Stack/StackComp";

export const OtherLayout: FC = () => (
  <div className="space-y-10">
    <Center p={40} className="bg-pink-500">
      <div className="bg-sky-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
        dignissimos, temporibus, esse illum quo voluptates voluptatem
        reprehenderit modi sunt dicta officiis qui vel, sed et suscipit
        doloremque quas dolor ad.
      </div>
    </Center>
    <Container size="xs" p={40} className="bg-red-500">
      xs container with xs horizontal padding
    </Container>
    <FlexComp />
    <GridComp />
    <GroupComp />
    <StackComp />
  </div>
);
