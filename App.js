import {React} from 'react';
import Home  from './components/Home';
import {View, Text, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={{backgroundColor: "#FAFAFC", flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      
      <TouchableOpacity 
            // style={styles.card}
            onPressOut={()=>{
              navigation.navigate('Home');
    }}>
        <Text>Go back to Home screen</Text>
  </TouchableOpacity>
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
        headerTitle: "",
        headerShadowVisible: false,
        headerStyle: {backgroundColor: "#FAFAFC"}
       }}
       />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen}
        options = {{
          headerTitle: "",
          headerShadowVisible: false,
          headerStyle: {backgroundColor: "#FAFAFC"}
         }} />

    </Stack.Navigator>
  </NavigationContainer>  
  );
}



export default App;