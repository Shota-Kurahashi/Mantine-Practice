import {
  Button,
  Center,
  Dialog,
  Drawer,
  Group,
  LoadingOverlay,
  Modal,
  Space,
  Text,
} from "@mantine/core";
import { NextPage } from "next";
import React, { useState } from "react";

const Overlay: NextPage = () => {
  const [opened, setOpened] = useState(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [visible, setVisible] = useState(false);

  return (
    <div className="p-10">
      <Center>
        <Button onClick={() => setOpened(true)}>Toggle Dialog</Button>
        <Dialog
          withCloseButton
          opened={opened}
          onClose={() => setOpened(false)}
        >
          <Text> Subscribe to email newsletter</Text>
        </Dialog>
      </Center>
      <Space h={20} />
      <Group position="center">
        <Button color="orange" onClick={() => setDrawerOpened(true)}>
          Toggle Drawer
        </Button>
        <Drawer
          // className="md:hidden"
          overlayOpacity={0.55}
          overlayBlur={3}
          onClose={() => setDrawerOpened(false)}
          opened={drawerOpened}
        >
          hello
        </Drawer>
      </Group>
      <Group>
        <div className="relative h-96 w-96 bg-pink-300">
          <LoadingOverlay
            loaderProps={{ size: "sm", color: "pink", variant: "bars" }}
            visible={visible}
            overlayBlur={2}
          />
          <div>
            <p>Loading</p>
          </div>
        </div>
        <Button color="red" onClick={() => setVisible((p) => !p)}>
          visible
        </Button>
      </Group>
      <Group>
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
          title="Introduce yourself!"
        >
          {/* Modal content */}
        </Modal>

        <Group position="center">
          <Button onClick={() => setOpened(true)}>Open Modal</Button>
        </Group>
      </Group>
    </div>
  );
};

export default Overlay;
