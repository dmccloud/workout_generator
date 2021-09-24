import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { useColorMode, IconButton } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      // position="fixed"
      // top="1rem"
      // right="1rem"
      // color="teal"
      variant="solid"
      colorScheme="teal"
      aria-label="Send email"
      onClick={toggleColorMode}
      icon={!isDark ? <MoonIcon /> : <SunIcon />}
    />
  );
};
