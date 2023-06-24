import React, {
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Transaction} from '../components/TransactionCard/TransactionCard';

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

type DataTransactionType = {
  id: string;
} & Transaction;

type TransactionContextType = {
  transaction: DataTransactionType[];
  setTransaction: SetStateAction<DataTransactionType[]>;
};

const TransactionContext = createContext<TransactionContextType>(
  {} as TransactionContextType,
);

function TransactionProvider({children}) {
  const [transaction, setTransaction] = useState<DataTransactionType[]>([]);

  useEffect(() => setTransaction(dataTransaction), []);

  return (
    <TransactionContext.Provider value={{transaction, setTransaction}}>
      {children}
    </TransactionContext.Provider>
  );
}

function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw Error('useTransaction must be used within an Transaction');
  }

  return context;
}

export {useTransaction, TransactionProvider};
