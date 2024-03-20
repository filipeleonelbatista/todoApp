import { StatusBar } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <>
      <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" />
      <Home />
    </>
  );
}
