import { VStack, Heading, Icon as NativeBaseIcon } from 'native-base';
import { useTheme } from 'native-base';
import Logo from '../assets/logo_primary.svg';

import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  function handleSignIn() {
    console.log(email, password);
  }

  return (
    <VStack flex={1} alignItems="center" bg="gray.600" px={8} paddingTop={24}>
      <Logo />
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        value={email}
        placeholder="E-mail"
        marginBottom={4}
        InputLeftElement={
          <NativeBaseIcon
            as={<Icon name="envelope" size={25} color={colors.gray[300]} />}
            margin={4}
          />
        }
        onChangeText={setEmail}
      />
      <Input
        value={password}
        placeholder="Senha"
        marginBottom={8}
        InputLeftElement={
          <NativeBaseIcon
            as={<Icon name="key" size={25} color={colors.gray[300]} />}
            margin={4}
          />
        }
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button onPress={handleSignIn} title="Entrar" w="full" />
    </VStack>
  );
}
export default SignIn;
