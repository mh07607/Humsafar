import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar, ImageBackground, Image} from 'react-native';
import IconInput from '../components/IconInput';

import styles from './login.style';

const image = require('../icons/Ellipse.png');

const Login = ({navigation}) => {
    return (
        <View style={{flex: 1,  backgroundColor: 'white'}}>
            <View style={{flex: 12}}>
                <ImageBackground source={image} style={styles.loginBanner}  />
                {/* <View style={styles.loginBanner}>
                    
                </View> */}
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
                     onPressOut={() => onBtnClick(navigation)}>
                        <Text style={{color: 'blue', fontSize: 18}}>Don't have an account? Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

function onBtnClick(navigation){
    navigation.navigate('CreateAccount');
}

export default Login;