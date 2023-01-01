import { Group, Stack, Table, Text, Title } from "@mantine/core";
import { NextPage } from "next";
import React from "react";

const Typography: NextPage = () => {
  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <div>
      <Group>
        <Table>
          <thead>
            <tr>
              <th>Element position</th>
              <th>Element name</th>
              <th>Symbol</th>
              <th>Atomic mass</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Group>
      <Stack justify="center" align="center">
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          fz={64}
          fw={700}
        >
          Indigo cyan gradient
        </Text>
        <Stack>
          <Title order={1}>Tile 1</Title>
          <Title order={2}>Tile 2</Title>
          <Title order={3}>Tile 3</Title>
          <Title order={4}>Tile 4</Title>
          <Title order={5}>Tile 5</Title>
          <Title order={6}>Tile 6</Title>
        </Stack>
      </Stack>
    </div>
  );
};

export default Typography;
