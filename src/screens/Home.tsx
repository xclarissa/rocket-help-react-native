import { useState } from 'react';
import {
  VStack,
  IconButton,
  HStack,
  Text,
  FlatList,
  Heading,
  Icon as NativeBaseIcon,
  useTheme,
  Center,
} from 'native-base';
import Logo from '../assets/logo_secondary.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Filter from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

function Home() {
  const { colors } = useTheme();
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>('open');
  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: '1',
      patrimony: '123456',
      when: '18/07/2022 às 17:30',
      status: 'open',
    },
    {
      id: '2',
      patrimony: '123456',
      when: '18/07/2022 às 17:30',
      status: 'open',
    },
  ]);

  return (
    //Vstack empilha elementos
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack //cabeçalho //Hstack fica um ao lado do outro
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.700"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />

        <IconButton
          icon={<Icon name="logout" size={26} color={colors.gray[300]} />}
        />
      </HStack>

      <VStack flex={1} px={6}>
        <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
          <Heading color="gray.100">Meus chamados</Heading>
          <Text color="gray.200">3</Text>
        </HStack>

        <HStack space={3} mb={8}>
          <Filter
            type="open"
            title="em andamento"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalizado"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>

        <FlatList
          mt={3}
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <NativeBaseIcon size={45} as={<Icon name='robot-confused'  color='gray.300'/>} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                Você ainda não possui {'\n'}
                solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
              </Text>
            </Center>
          )}
        />

        <Button title="Nova solicitação" />
      </VStack>
    </VStack>
  );
}
export default Home;
