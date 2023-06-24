/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
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
import {useAuth} from '../context/AuthProvider';

const icon = require('../assets/icon-logo.png');

type DataTransactionType = {
  id: string;
} & Transaction;

const dataTransaction: DataTransactionType[] = [
  {
    id: '1',
    name: 'Desenvolvimento de site',
    category: 'Vendas',
    value: 12,
    date: '13/04/2021',
    type: 'Entrada',
  },
  {
    id: '2',
    name: 'Hamburgueria Pizzy',
    category: 'Alimentação',
    value: 10,
    date: '10/04/2021',
    type: 'Saída',
  },
  {
    id: '3',
    name: 'Aluguel do apartamento',
    category: 'Casa',
    value: 11,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '4',
    name: 'Aluguel do apartamento',
    category: 'Casa',
    value: 12,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '5',
    name: 'Aluguel do apartamento',
    category: 'Casa',
    value: 13,
    date: '27/03/2021',
    type: 'Saída',
  },
  {
    id: '6',
    name: 'Aluguel do apartamento',
    category: 'Casa',
    value: 14,
    date: '27/03/2021',
    type: 'Saída',
  },
];

export function HomeScreen() {
  const [transaction, setTransaction] = useState<DataTransactionType[]>([]);
  const [visbleNewTransaction, setVisbleNewTransaction] =
    useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<'Vendas' | 'Alimentação' | 'Casa'>(
    'Casa',
  );
  const [type, setType] = useState<'Entrada' | 'Saída'>('Entrada');
  const {auth, signInDTMoney} = useAuth();

  useEffect(() => setTransaction(dataTransaction), []);

  function onCloseModal() {
    setVisbleNewTransaction(false);
  }

  function onShowModal() {
    setVisbleNewTransaction(true);
  }

  function onTotalSumOfRevenue() {
    return transaction.reduce((accumaltor, currentValue) => {
      if (currentValue.type === 'Entrada') {
        return currentValue.value + accumaltor;
      }
      return accumaltor;
    }, 0);
  }

  function onTotalSumOfExpenses() {
    return transaction.reduce((accumaltor, currentValue) => {
      if (currentValue.type === 'Saída') {
        return currentValue.value + accumaltor;
      }
      return accumaltor;
    }, 0);
  }

  function onTotalBalance() {
    return onTotalSumOfRevenue() - onTotalSumOfExpenses();
  }

  function onSubmit() {
    const data: DataTransactionType = {
      id: Math.random().toString(),
      name,
      value: price,
      category,
      type,
      date: Date.now().toString(),
    };

    setTransaction(props => [data, ...props]);
    onCloseModal();
  }

  // eslint-disable-next-line react/no-unstable-nested-components
  function ListHeaderComponent() {
    return (
      <HeaderTransactionList>
        <TitleList>Transações</TitleList>
        <AmountTransaction>{transaction.length} itens</AmountTransaction>
      </HeaderTransactionList>
    );
  }

  useEffect(() => {
    console.log({auth});
    (async () =>
      signInDTMoney({
        username: 'develop19.partner_br@solistica.com',
        password: 'Solistica.2022',
      }))();
  }, [auth, signInDTMoney]);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5429CC" />
      <Container>
        <ModalNewTransaction
          visible={visbleNewTransaction}
          onClose={onCloseModal}
          setName={name => setName(name)}
          setPrice={price => setPrice(price)}
          setCategory={category => setCategory(category)}
          onSubmite={onSubmit}
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
            {/* <BalanceCard
              title="Entradas"
              value={onTotalSumOfRevenue().toString()}
              description="Última entrada dia 13 de abril"
            />
            <BalanceCard
              title="Saídas"
              value={onTotalSumOfExpenses().toString()}
              description="Última entrada dia 13 de abril"
            />
            <BalanceCard
              title="Total"
              value={String(onTotalBalance())}
              description="Última entrada dia 13 de abril"
            /> */}
          </ListBalance>
        </ContainerListHorizontal>

        <FlatList
          ListHeaderComponent={<ListHeaderComponent />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,
          }}
          data={transaction}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard transaction={item} />}
        />
      </Container>
    </>
  );
}
