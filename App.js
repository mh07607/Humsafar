import { React } from 'react';
import { View, Text, StatusBar, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
// import { styles } from './styles/AppStyles'


const App = () => {
  return (
    <View style={styles.top}>
      <View style={styles.home}>
        <Text style={styles.homeText}>Home</Text>
      </View>
      <TextInput style={styles.searchBar}
        placeholder='Search'
      />
      <View style={styles.cards}>
        <TouchableOpacity style={styles.card}>
          <Text style={{fontSize: 24, color: 'gray'}}>Book a Ride</Text>  
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={{fontSize: 24, color: 'gray'}}>Host a Ride</Text>  
        </TouchableOpacity>
      </View>
      <View style = {styles.settings}>
        <Text style={{fontSize: 16, color: 'gray'}}>Settings</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  top:{
    marginTop: StatusBar.currentHeight,
    marginBottom: 25,
    flexDirection: 'column',
    gap: 10,
    flex: 1
  }
  ,
  home: {
    backgroundColor: 'aquamarine',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  homeText:{
    fontSize: 35,
    color: 'gray',
  },
  searchBar: {
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    flex: 0.5,
    alignSelf: 'center',
    width: Dimensions.get('window').width-100,
  },
  cards: {
    flex: 10,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 300,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  settings: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;