import { Grid } from "@mantine/core";
import React from "react";

export const GridComp = () => (
  <>
    <Grid grow gutter="xl">
      {/* 横は12spanで区切られている */}
      <Grid.Col md={4} lg={3}>
        1
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        2
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        3
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        4
      </Grid.Col>
    </Grid>
    <Grid grow gutter="xl" columns={24}>
      {/* 指定もできる */}
      <Grid.Col md={4} lg={3}>
        1
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        2
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        3
      </Grid.Col>
      <Grid.Col md={4} lg={3}>
        4
      </Grid.Col>
    </Grid>
  </>
);
