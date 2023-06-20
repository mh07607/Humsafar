import {React} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import IconInput from '../components/IconInput';

import styles from './login.style';


const Login = ({navigation}) => {
    return (
        <View style={{flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: 'white'}}>
            <View style={{flex: 12  }}>
                <View style={styles.loginBanner}></View>
            </View>
                
            <View style={styles.container}>
                <Text style={styles.login}>Log In</Text>

                {/* <TextInput 
                 style={styles.input}
                 placeholder='Username or email'>
                </TextInput>

                <TextInput 
                 style={styles.input}
                 placeholder='Password'></TextInput> */}
                <View style={{flex: 10, alignItems: 'center', gap: 2,}}>
                    <View style={styles.inputContainer}>
                        <IconInput 
                        placeHolder='Username or email'
                        icon={require('../icons/User.png')}
                        hide={false}/>
                        <IconInput
                        placeHolder='Password'
                        icon={require('../icons/Lock.png')}
                        hide={true}/>
                    </View>
                    

                    <TouchableOpacity style={styles.loginButton}
                    onPressOut= {() => {navigation.navigate('Home');}}>
                        <Text style={{fontSize: 20, 
                            fontWeight: 'bold', 
                        }}>Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex: 1}}
                    >
                        <Text style={{color: 'blue', fontSize: 18,}}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{flex: 1}}
                     onPressOut={() => {navigation.navigate('CreateAccount');}}>
                        <Text style={{color: 'blue', fontSize: 18}}>Don't have an account? Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Login;