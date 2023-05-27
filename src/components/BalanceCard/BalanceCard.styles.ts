import styled, {css} from 'styled-components/native';
import {BalanceCardProps} from './BalanceCard';

const textColor = css<Pick<BalanceCardProps, 'title'>>`
  color: ${props => (props.title !== 'Total' ? '#363f5f' : '#fff')};
`;

export const Container = styled.View<Pick<BalanceCardProps, 'title'>>`
  width: 300px;
  height: 200px;

  padding: 18px 23px;

  elevation: 5;

  border-radius: 5px;
  background-color: ${props => (props.title !== 'Total' ? '#fff' : '#33CC95')};
`;

export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Icon = styled.Image``;

export const Title = styled.Text<Pick<BalanceCardProps, 'title'>>`
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;

  ${textColor}
`;

export const Value = styled.Text<Pick<BalanceCardProps, 'title'>>`
  font-size: 30px;
  line-height: 45px;
  font-weight: 500;

  ${textColor}
`;

export const Description = styled.Text<Pick<BalanceCardProps, 'title'>>`
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;

  ${textColor}

  margin-bottom: 42px;
`;
