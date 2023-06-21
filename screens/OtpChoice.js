
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './otpChoice.style';

const OtpChoice = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ flex: 1 }} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[{ textAlign: 'center', fontSize: 28, fontWeight: 'bold' }]}>OTP will be sent to your number.</Text>
      </View>
      <View style={{ flex: 2, justifyContent: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPressOut={() => { navigation.navigate('Otp'); }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Send OTP via Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPressOut={() => { navigation.navigate('Otp'); }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Send OTP via SMS</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default OtpChoice;