import {AuthProvider} from './src/context/AuthProvider';
import {HomeScreen} from './src/screens/HomeScreen';

export function App() {
  return (
    <AuthProvider>
      <HomeScreen />
    </AuthProvider>
  );
}

// TUDO DTMoney
// - Calcular soma total das saídas
// - Calcular soma total das entradas
// - Calcular o total do saldo
