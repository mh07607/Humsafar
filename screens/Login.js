import {React} from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import IconInput from '../components/IconInput';

import styles from './login.style';


const Login = ({navigation}) => {
    return (
        <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
            <View style={{flex: 12  }}>
                <View style={styles.loginBanner}></View>
            </View>
                
            <View style={styles.container}>
                <Text style={{
                    fontSize: 32,
                    flex: 0.3
                }}>Log In</Text>

                <View style={{flex: 1, alignItems: 'center'}}>
                    <IconInput 
                    placeHolder='Username or email'
                    icon={require('../icons/User.png')}/>
                    <IconInput
                    placeHolder='Password'
                    icon={require('../icons/Lock.png')}/>
                    

                    <TouchableOpacity
                    onPressOut= {() => {navigation.navigate('Home');}}>
                        <Text>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPressOut={() => {navigation.navigate('CreateAccount');}}>
                        <Text>Don't have an account? Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;