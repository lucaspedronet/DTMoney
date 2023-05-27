import {Platform} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: #e5e5e5;
`;

export const StatusBar = styled.StatusBar``;

export const HeaderBackground = styled.View`
  width: 100%;
  min-height: 230px;
  max-height: 250px;

  padding-top: ${Platform.OS === 'android' ? 32 : 62}px;

  background-color: #5429cc;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const Icon = styled.Image``;

export const Title = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  text-align: left;

  margin-left: 13px;
`;

export const Logo = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTransition = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  /* width: 130px; */
  height: 40px;

  padding: 11px 16px;
  border-radius: 5px;

  background-color: #6933ff;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;
export const ContainerListHorizontal = styled.View`
  width: 100%;
  height: 210px;

  margin-top: -100px;
  /* padding-bottom: 10px; */
  background-color: transparent;
`;

export const ListBalance = styled.ScrollView``;

export const TitleList = styled.Text`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #363f5f;
`;

export const HeaderTransactionList = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-top: 32px;
  padding-bottom: 16px;
`;

export const AmountTransaction = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #969cb2;
`;
