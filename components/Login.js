import {React} from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';
import styles from './login.style';


const Login = () => {
    return (
        <View style={{flex: 1, marginTop: StatusBar.currentHeight}}>
            <View style={{flex: 12  }}>
                <View style={styles.loginBanner}></View>
            </View>
                
            <View style={{flex: 10}}>
                <Text>Log In</Text>

                <Text>Username or email:</Text>
                <TextInput></TextInput>

                <Text>Password:</Text>
                <TextInput></TextInput>

                <TouchableOpacity>
                    <Text>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Forgot password?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;