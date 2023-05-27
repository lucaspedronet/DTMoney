/* eslint-disable react/react-in-jsx-scope */
import {FlatList} from 'react-native';
import {BalanceCard} from '../components/BalanceCard/BalanceCard';
import {
  TransactionCard,
  Transaction,
} from '../components/TransactionCard/TransactionCard';

import {
  ButtonTransition,
  Label,
  Container,
  HeaderBackground,
  Header,
  Icon,
  Title,
  Logo,
  StatusBar,
  ListBalance,
  ContainerListHorizontal,
  TitleList,
  HeaderTransactionList,
  AmountTransaction,
} from './HomeScreen.styles';
import {ModalNewTransaction} from '../components/ModalNewTransaction/ModalNewTransaction';
import {useState} from 'react';

const icon = require('../assets/icon-logo.png');

type DataTransactionType = {
  id: string;
} & Transaction;

const dataTransaction: DataTransactionType[] = [
  {
    id: '1',
    title: 'Desenvolvimento de site',
    category: 'Vendas',
    value: 12.003,
    date: '13/04/2021',
    type: 'Entrada',
  },
  {
    id: '2',
    title: 'Hamburgueria Pizzy',
    category: 'Alimentação',
    value: 59,
    date: '10/04/2021',
    type: 'Saída',
  },
  {
    id: '3',
    title: 'Aluguel do apartamento',
    category: 'Casa',
    value: 1.2009,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '4',
    title: 'Aluguel do apartamento',
    category: 'Casa',
    value: 1.2009,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '5',
    title: 'Aluguel do apartamento',
    category: 'Casa',
    value: 1.2009,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '6',
    title: 'Aluguel do apartamento',
    category: 'Casa',
    value: 1.2009,
    date: '27/03/2021',
    type: 'Saída',
  },
];

export function HomeScreen() {
  const [visbleNewTransaction, setVisbleNewTransaction] =
    useState<boolean>(false);

  function onCloseModal() {
    setVisbleNewTransaction(false);
  }

  function onShowModal() {
    setVisbleNewTransaction(true);
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function ListHeaderComponent() {
    return (
      <HeaderTransactionList>
        <TitleList>Transações</TitleList>
        <AmountTransaction>08</AmountTransaction>
      </HeaderTransactionList>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5429CC" />
      <Container>
        <ModalNewTransaction
          visible={visbleNewTransaction}
          onClose={onCloseModal}
        />
        <HeaderBackground>
          <Header>
            <Logo>
              <Icon source={icon} />
              <Title>DT Money</Title>
            </Logo>

            <ButtonTransition onPress={onShowModal}>
              <Label>Novo Transação</Label>
            </ButtonTransition>
          </Header>
        </HeaderBackground>

        <ContainerListHorizontal>
          <ListBalance
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 25,
              gap: 16,
            }}>
            <BalanceCard
              title="Entradas"
              value="R$ 17.400,00"
              description="Última entrada dia 13 de abril"
            />
            <BalanceCard
              title="Saídas"
              value="R$ 17.400,00"
              description="Última entrada dia 13 de abril"
            />
            <BalanceCard
              title="Total"
              value="R$ 17.400,00"
              description="Última entrada dia 13 de abril"
            />
          </ListBalance>
        </ContainerListHorizontal>

        <FlatList
          ListHeaderComponent={<ListHeaderComponent />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          data={dataTransaction}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard transaction={item} />}
        />
      </Container>
    </>
  );
}
