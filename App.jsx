import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import HomeNav from './app/navigation/HomeNav';
import HomeScreen from './app/screens/HomeScreen';

export default function App() {
  return (

    <View style={{
      flex: 1,
      backgroundColor: '#fff',
    }}>
      <NavigationContainer>
        {/* <HomeScreen /> */}
        <HomeNav />
      </NavigationContainer>
    </View>
  );
}
