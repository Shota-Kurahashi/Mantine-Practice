import { Group, Loader, Notification, Skeleton } from "@mantine/core";
import { NextPage } from "next";
import React from "react";

const Feedback: NextPage = () => (
  <div className="p-10">
    <Group position="center">
      <Loader />
      <Loader variant="bars" />
      <Loader variant="dots" />
    </Group>
    <Group>
      <Notification title="Default notification">
        This is default notification with title and body
      </Notification>
      <Notification loading title="Default notification">
        This is default notification with title and body
      </Notification>
      <Skeleton height={50} circle mb="xl" />
    </Group>
  </div>
);

export default Feedback;
