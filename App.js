import {React} from 'react';
import Home  from './components/Home';
import Login  from './components/Login';
// import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login}
        options = {{
          headerTitle: "Login",
          headerShown: false,
          headerShadowVisible: false,
          headerStyle: {backgroundColor: "#FAFAFC"}
         }} />
      <Stack.Screen name="Home"
       component={Home}
       options = {{
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {backgroundColor: "#FAFAFC"}
       }}
       />

    </Stack.Navigator>
  </NavigationContainer>  
  );
}



export default App;