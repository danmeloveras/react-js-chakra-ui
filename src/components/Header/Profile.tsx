import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Daniel Veras</Text>
          <Text color="gray.300" fontSize="small">
            daniel.unb@outlook.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Daniel Veras"
        src="https://avatars.githubusercontent.com/u/48137972?v=4"
      ></Avatar>
    </Flex>
  );
}
