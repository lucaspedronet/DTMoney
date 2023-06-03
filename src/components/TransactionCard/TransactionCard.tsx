import * as S from './TransactionCard.styles';

export type Transaction = {
  type: 'Entrada' | 'Saída';
  name: string;
  value: number;
  date: string;
  category: 'Vendas' | 'Alimentação' | 'Casa';
};

type TransactionCardProps = {
  transaction: Transaction;
};

export function TransactionCard({transaction}: TransactionCardProps) {
  const {name, value, date, category, type} = transaction;

  return (
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.Value type={type}>
        {type === 'Saída' && '- '}R$ {value}
      </S.Value>

      <S.Footer>
        <S.LabelFooter>{category}</S.LabelFooter>
        <S.LabelFooter>{date}</S.LabelFooter>
      </S.Footer>
    </S.Container>
  );
}
