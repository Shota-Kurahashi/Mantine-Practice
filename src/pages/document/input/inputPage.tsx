import {
  Autocomplete,
  Checkbox,
  CheckboxIcon,
  Chip,
  FileInput,
  Group,
  Input,
  PasswordInput,
  Radio,
  Select,
  Stack,
  TransferList,
  TransferListData,
} from "@mantine/core";
import { IconBrandTwitter, IconUpload } from "@tabler/icons";
import InputMask from "react-input-mask";

import { NextPage } from "next";
import React, { useId, useState } from "react";

const initialValues: TransferListData = [
  [
    { value: "react", label: "React" },
    { value: "ng", label: "Angular" },
    { value: "next", label: "Next.js" },
    { value: "blitz", label: "Blitz.js" },
    { value: "gatsby", label: "Gatsby.js" },
    { value: "vue", label: "Vue" },
    { value: "jq", label: "jQuery" },
  ],
  [
    { value: "sv", label: "Svelte" },
    { value: "rw", label: "Redwood" },
    { value: "np", label: "NumPy" },
    { value: "dj", label: "Django" },
    { value: "fl", label: "Flask" },
  ],
];

const InputPage: NextPage = () => {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [checkGroup, setCheckGroup] = useState<string[]>([]);
  const [chips, setChips] = useState<string[]>([]);
  const id = useId();
  const [data, setData] = useState<TransferListData>(initialValues);

  const emailData =
    email.trim().length > 0 && !email.includes("@")
      ? ["gmail.com", "outlook.com", "yahoo.com"].map(
          (mail) => `${email}@${mail}`
        )
      : [];

  console.log(value);
  console.log(email);
  console.log(checkGroup);
  console.log(chips);

  return (
    <div>
      <Group position="center">
        <Autocomplete
          onChange={setValue}
          value={value}
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={["React", "Angular", "Svelte", "Vue", "Next", "Nuxt"]}
        />
        <Autocomplete
          type="email"
          onChange={setValue}
          value={value}
          label="Your favorite framework/library"
          placeholder="Pick one"
          data={[
            { value: "React", label: "React (with label)" },
            { value: "Angular", disabled: true },
            { value: "Svelte" },
            { value: "Vue" },
          ]}
        />
        {/* dataを操作するとサフィックスなどを付与できる */}
        <Autocomplete
          label="Email"
          onChange={setEmail}
          data={emailData}
          error="Field is required"
          withAsterisk
        />
        {/* Group options */}
        <Autocomplete
          label="Group options"
          placeholder="Pick one"
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          data={[
            { value: "Rick", group: "Used to be a pickle" },
            { value: "Morty", group: "Never was a pickle" },
            { value: "Beth", group: "Never was a pickle" },
            { value: "Summer", group: "Never was a pickle" },
          ]}
        />
      </Group>
      <Group position="center">
        <Checkbox label="I agree to sell my privacy" />
        <Checkbox indeterminate label="I agree to sell my privacy" />
        <Checkbox icon={CheckboxIcon} indeterminate label="Custom icon" />
        <Checkbox label="I agree to sell my privacy" indeterminate />
      </Group>
      <Stack justify="center" align="center">
        <Checkbox.Group value={checkGroup} onChange={setCheckGroup}>
          <Checkbox value="react" label="React" />
          <Checkbox value="Vue" label="Vue" />
        </Checkbox.Group>
        <Chip.Group value={chips} onChange={setChips} multiple>
          <Chip value="react">React</Chip>
          <Chip value="ng">Angular</Chip>
          <Chip value="svelte">Svelte</Chip>
          <Chip value="vue">Vue</Chip>
        </Chip.Group>
        <FileInput
          label="Your resume"
          placeholder="Your resume"
          icon={<IconUpload size={14} />}
        />
      </Stack>
      <Group>
        <Input
          icon={<IconBrandTwitter size={16} />}
          type="email"
          placeholder="Your email"
        />
        <Input.Wrapper id={id} label="Your phone" required>
          <Input
            component={InputMask}
            mask=" (9999) 999-99-99"
            id={id}
            placeholder="Your phone"
            required
          />
        </Input.Wrapper>
        <PasswordInput
          placeholder="Password"
          label="Password"
          description="Password must include at least one letter, number and special character"
          withAsterisk
        />
      </Group>
      <Stack justify="center" align="center">
        <Radio.Group
          name="favoriteFramework"
          label="Select your favorite framework/library"
          description="This is anonymous"
          withAsterisk
        >
          <Radio value="react" label="React" />
          <Radio value="svelte" label="Svelte" />
          <Radio value="ng" label="Angular" />
          <Radio value="vue" label="Vue" />
        </Radio.Group>
      </Stack>
      <Group>
        <Select
          label="Your favorite framework/library"
          searchable
          placeholder="Pick one"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />
        <TransferList
          value={data}
          onChange={setData}
          searchPlaceholder="Search..."
          nothingFound="Nothing here"
          titles={["Frameworks", "Libraries"]}
          breakpoint="sm"
        />
      </Group>
    </div>
  );
};

export default InputPage;
