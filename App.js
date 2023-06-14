import Home  from './components/Home';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home"
       component={Home}
       options = {{
        headerTitle: ""
       }}
       />
      <Stack.Screen name="Details" component={DetailsScreen} />

    </Stack.Navigator>
  </NavigationContainer>  
  );
}



export default App;