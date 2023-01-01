import {
  Accordion,
  Avatar,
  Group,
  Spoiler,
  Text,
  Timeline,
} from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons";
import { NextPage } from "next";
import React from "react";

const DataDisplay: NextPage = () => (
  <div>
    <Group>
      <Accordion defaultValue="customization">
        <Accordion.Item value="customization" className="w-96">
          <Accordion.Control>Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item value="flexibility" className="w-96">
          <Accordion.Control>Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring" className="w-96">
          <Accordion.Control className="border-b text-xl text-red-500">
            No annoying focus ring
          </Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Group>
    <Group>
      <Avatar src={null} size="xl" alt="it's me" />
      <Avatar.Group spacing="sm">
        <Avatar src={null} radius="xl" />
        <Avatar src={null} radius="xl" />
        <Avatar src={null} radius="xl" />
        <Avatar radius="xl">+5</Avatar>
      </Avatar.Group>
    </Group>
    <Group>
      <Spoiler
        maxHeight={30}
        className="max-w-xl"
        showLabel="Show more"
        hideLabel="Hide"
        classNames={{
          control: "text-red-500",
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        officiis, consequuntur odio voluptatum illo quo suscipit soluta nostrum
        illum iusto et maxime, libero quod cum quis ad quasi laborum sequi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo vitae
        consequuntur inventore rem optio omnis similique quaerat praesentium,
        facere dolorem error iure vero quis, ut obcaecati repudiandae sed hic.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum ipsa,
        porro saepe magnam tempore architecto sit asperiores delectus dolore non
        tempora natus voluptate soluta quisquam itaque? Mollitia quibusdam
        voluptas sunt. lore,
      </Spoiler>
    </Group>
    <Group>
      <Timeline active={1} bulletSize={24} lineWidth={2} className="p-10">
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
          <Text color="dimmed" size="sm">
            You&apos;ve created new branch{" "}
            <Text variant="link" component="span" inherit>
              fix-notifications
            </Text>{" "}
            from master
          </Text>
          <Text size="xs" mt={4}>
            2 hours ago
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text color="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text color="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Code review"
          bullet={<IconMessageDots size={12} />}
        >
          <Text color="dimmed" size="sm">
            <Text variant="link" component="span" inherit>
              Robert Gluesticker
            </Text>
            left a code review on your pull request
          </Text>
          <Text size="xs" mt={4}>
            12 minutes ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </Group>
  </div>
);

export default DataDisplay;
