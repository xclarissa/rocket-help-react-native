import { HStack, IconButton, Heading, StyledProps, useTheme } from 'native-base';
import React from 'react';

interface Props extends StyledProps {
  title: string;
}

function Header({title, ...rest}: Props) {
  const { colors } = useTheme();

  return (
    <HStack
      w="full"
      justifyContent="space-between"
      alignItems="center"
      bg="gray.600"
      pb={6}
      pt={12}
      {...rest}
    >
      <IconButton
        // icon={<   color={colors.gray[200]} size={24}/>}
      />

      <Heading color={colors.gray[100]} textAlign="center" fontSize="lg" flex={1} ml={-6}>
        {title}
      </Heading>
    </HStack>
  );
}
export default Header;