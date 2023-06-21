import { React } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles  from './home.style';
import NavBar from '../components/NavBar';

const Home = ({ navigation }) => {
    return (
      <View style={styles.top}>
        <View style={{flex: 13  }}>
                <View style={styles.banner}></View>
        </View>

        <View style={styles.cards}>
          <TouchableOpacity 
            style={styles.card}
            onPressOut={()=>{
              // navigation.navigate('Details');
            }}>
            <Text style={{fontSize: 24, color: 'gray'}}>Book a Ride</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.card}>
            <Text style={{fontSize: 24, color: 'gray'}}>Host a Ride</Text>  
          </TouchableOpacity>
        </View>
        <View style={styles.favorites}> 
            <Text> Favorites </Text>
        </View>
        <NavBar />
      </View>
    );
}

export default Home;