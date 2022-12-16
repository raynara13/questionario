import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Formulario from './src/components/formulario';
import Titulo from './src/components/titulo';
// import Principal from './src/principal';
import Principal from './src/components/principal';


export default function App() {
  return (
    <View style={styles.container}>
      <Titulo />
      <Principal />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizonte: 15,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fonteBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
