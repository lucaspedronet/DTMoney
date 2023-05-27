import styled from 'styled-components/native';
import {Transaction} from './TransactionCard';

export const Container = styled.View`
  height: 128px;

  padding: 17px 24px 18px;
  margin-bottom: 8px;

  border-radius: 5px;

  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;

  letter-spacing: 1px;
  color: #363f5f;
`;

export const Value = styled.Text<Pick<Transaction, 'type'>>`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;

  color: ${({type}) => (type === 'Entrada' ? '#12a454' : '#E52E4D')};
`;

export const LabelFooter = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;

  color: #969cb2;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;
