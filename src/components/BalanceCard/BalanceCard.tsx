import React from 'react';

import {useTransaction} from '../../context/Transaction';
import * as S from './BalanceCard.styles';

const icons = {
  Entradas: require('../../assets/icon-entry-value.png'),
  Saídas: require('../../assets/icon-output.png'),
  Total: require('../../assets/icon-full.png'),
};

export type BalanceCardProps = {
  title: 'Entradas' | 'Saídas' | 'Total';
  value: string;
  description: string;
};

export function BalanceCard({title, value, description}: BalanceCardProps) {
  const {transaction, setTransaction} = useTransaction();

  console.log({transaction: transaction[4]});

  return (
    <S.Container title={title}>
      <S.HeaderContainer>
        <S.Title title={title}>{title}</S.Title>

        <S.Icon source={icons[title]} />
      </S.HeaderContainer>

      <S.Value title={title}>{value}</S.Value>
      <S.Description title={title}>{description}</S.Description>
    </S.Container>
  );
}
