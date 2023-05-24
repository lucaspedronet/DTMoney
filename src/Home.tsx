/* eslint-disable react/react-in-jsx-scope */
import {BalanceCard} from './components/BalanceCard/BalanceCard';

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
} from './Home.styles';

const icon = require('./assets/icon-logo.png');

export function Home() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#5429CC" />
      <Container>
        <HeaderBackground>
          <Header>
            <Logo>
              <Icon source={icon} />
              <Title>DT Money</Title>
            </Logo>

            <ButtonTransition>
              <Label>Novo Transação</Label>
            </ButtonTransition>
          </Header>
        </HeaderBackground>
        <ListBalance
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 25,
            gap: 16,
          }}
          style={{
            position: 'absolute',
            top: 160,
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
      </Container>
    </>
  );
}
