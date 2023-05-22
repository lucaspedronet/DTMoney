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
      </Container>
    </>
  );
}
