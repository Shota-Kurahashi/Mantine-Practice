import {
  ActionIcon,
  Button,
  CloseButton,
  CopyButton,
  Tooltip,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import {
  IconCheck,
  IconCopy,
  IconExternalLink,
  IconSettings,
} from "@tabler/icons";
import Link from "next/link";
import { Layout } from "../../components/Layout";

const ButtonDemo: NextPage = () => (
  <Layout title="button">
    <div className="mx-auto space-y-4">
      <Button.Group>
        <ActionIcon variant="transparent">
          <IconSettings size={40} />
        </ActionIcon>
        <ActionIcon variant="outline" color="pink">
          <IconSettings size={40} />
        </ActionIcon>
        <Button>button 1</Button>
        <Button color="dark">button 2</Button>
      </Button.Group>
      {/* variantでボタンの種類を変えられる */}
      <Button.Group>
        <Button color="pink.5" variant="light">
          light
        </Button>
        <Button color="pink.5" variant="outline">
          外枠
        </Button>
      </Button.Group>
      <Button.Group className="space-x-4">
        {/* radiusで丸みを変えられる */}
        <Button color="red" radius="md">
          少し丸い
        </Button>
        <Button color="grape.8" radius="xl" size="lg">
          まんまる
        </Button>
        {/* 他にもボタンの種類を変更できる */}
        <Button color="grape.8" disabled uppercase compact>
          いっぱい変わってる Button Groupがあると丸くならない
        </Button>
      </Button.Group>
      <Button.Group orientation="vertical">
        {/* グラデーションもできる */}
        <Button
          variant="gradient"
          gradient={{ from: "orange", to: "red", deg: 90 }}
        >
          グラデーション
        </Button>
        {/* whiteにすると常に背景が白になる */}
        <Button variant="white" color="red">
          white
        </Button>
        <Button loading>Loading</Button>
        <Button loading loaderPosition="right">
          Loading right
        </Button>
      </Button.Group>
      <Button.Group>
        <Button
          // aタグにできる
          component="a"
          target="_blank"
          href="https://mantine.dev/core/button/"
          leftIcon={<IconExternalLink size={26} />}
          className=""
        >
          libraryを見る aタグだよ
        </Button>
      </Button.Group>
      <Button.Group>
        <CloseButton aria-label="Close modal" variant="outline" />
        <CopyButton value="https://mantine.dev">
          {/* valueの値がcopyされる */}
          {({ copied, copy }) => (
            <Button color={copied ? "teal" : "blue"} onClick={copy}>
              {copied ? "Copied url" : "Copy url"}
            </Button>
          )}
        </CopyButton>
        <CopyButton value="https://mantine.dev" timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied" : "Copy"}
              withArrow
              position="right"
            >
              <ActionIcon color={copied ? "teal" : "gray"} onClick={copy}>
                {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </Button.Group>
      <Link href="/">
        <Button color="pink.4">ホームに戻る</Button>
      </Link>
    </div>
  </Layout>
);

export default ButtonDemo;
