import { React } from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={style.container}>
        <Text>Sign In!</Text>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    marginTop: StatusBar.currentHeight,
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});

export default App;