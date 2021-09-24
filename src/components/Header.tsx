import { Box, Flex, Heading } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Header = () => {
  //randomizer(data);
  return (
    <Flex bgColor="facebook.500" width="100%" h="55px" alignItems="center">
      <Box>
        <Heading ml={4}>Workout Selector</Heading>
      </Box>
      <Box ml="auto" mr={4}>
        <DarkModeSwitch />
      </Box>
    </Flex>
  );
};
