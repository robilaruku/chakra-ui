import { PropsOf } from "@chakra-ui/system";
import { storiesOf } from "@storybook/react";
import React from "react";
import Box from "../Box";
import setup from "../story.setup";
import Flex from "../Flex";
import Spacer from "../Spacer";

///////////////////////////////////////////////////////////////////////////////////

const stories = storiesOf("Box", module).addDecorator(setup);

stories.add("default", () => (
  <Box color="tomato" _hover={{ bg: "red.500", color: "white" }}>
    Welcome to Box
  </Box>
));

stories.add("as prop + generic", () => (
  <Box<PropsOf<"img">>
    rounded="sm"
    as="img"
    _hover={{ rounded: "md" }}
    margin={[3, 4]}
    src="https://avatars3.githubusercontent.com/u/14854048?s=180&v=4"
  />
));

stories.add("flex + spacer", () => (
  <Flex>
    <Box color="tomato">Box 1</Box>
    <Spacer />
    <Box color="yellow.200">Box 2</Box>
  </Flex>
));