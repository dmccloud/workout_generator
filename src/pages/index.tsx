import React, { useState } from "react";
import { Box, Flex, Heading, Button, Badge } from "@chakra-ui/react";
import { RepeatIcon, StarIcon } from "@chakra-ui/icons";
import { Container } from "../components/Container";
import { useRandomizer } from "../utils/useRandomizer";

const Index = () => {
  const [workout, setWorkout] = useState({
    workout: "",
    intensity: "",
    duration: "",
  });

  console.log(workout);
  const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };

  return (
    <Container>
      <Flex
        mt="4vh"
        bgColor="inherit"
        direction={["column", "column", "row", "row"]}
      >
        {Object.keys(workout).map((item, index) => {
          return (
            <Box
              m={6}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={index}
            >
              <Box align="center">
                <Heading>{capitalizeFirstLetter(item)}</Heading>
              </Box>

              <Box p="6" align="center">
                <Box alignItems="center">
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xl"
                    textTransform="uppercase"
                    ml="2"
                    minW="200px"
                  >
                    {workout[item]}
                  </Box>
                </Box>

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
                ></Box>

                <Box>
                  <Box
                    as="span"
                    color="gray.600"
                    fontSize="sm"
                    minW="400px"
                  ></Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Flex>
      <Box mb={4}>
        <Button
          aria-label="Randomize Workouts"
          onClick={() => {
            setWorkout(useRandomizer());
          }}
        >
          {<RepeatIcon mr={4} />}
          Ranodomize Workout
        </Button>
      </Box>
    </Container>
  );
};

export default Index;
