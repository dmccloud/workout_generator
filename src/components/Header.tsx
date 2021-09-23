import { Box, Flex, Heading } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box bgColor="orangered" width="100%" h="55px">
      <Flex>
        <Heading mr="auto">Workout Selector</Heading>
      </Flex>
    </Box>
  );
};
