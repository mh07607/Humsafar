import { React } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles  from './home.style';

const Home = ({ navigation }) => {
    return (
      <View style={styles.top}>
        <View style={styles.home}>
          <TouchableOpacity> 
            <Text> Settings </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> Profile </Text>  
          </TouchableOpacity>
        </View>

        <View style={styles.cards}>
          <TouchableOpacity 
            style={styles.card}
            onPressOut={()=>{
              navigation.navigate('Details');
            }}>
            <Text style={{fontSize: 24, color: 'gray'}}>Book a Ride</Text>  
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.card}
           >
            <Text style={{fontSize: 24, color: 'gray'}}>Host a Ride</Text>  
          </TouchableOpacity>
        </View>
        <TouchableOpacity style = {styles.settings}>
          <Text style={{fontSize: 16, color: 'gray'}}>Help</Text>
        </TouchableOpacity>
      </View>
    );
}

export default Home;