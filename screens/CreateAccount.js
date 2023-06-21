import { React } from 'react';
import IconInput from '../components/IconInput';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './createAccount.style'

const CreateAccount = ({navigation}) => {
    return(
    <View style={styles.top}>
        <View style={{flex: 12 }}>
            <View style={styles.loginBanner}></View>
        </View>

        <View style={{flex: 10, alignItems: 'center' }}>
            <View style={{flex: 10, flexDirection: 'column', alignItems: 'center'}}>
                <Text style={styles.login}>Create account</Text>
                <Text style={{fontSize: 20}}> Continue with Phone number</Text>
            </View>

            <View style={{flex: 18, alignItems: 'center'}}>
                <IconInput placeHolder = '+921234567890'
                icon= {require('../icons/Form.png')}
                />

                <TouchableOpacity style={styles.loginButton}
                    onPressOut= {() => {navigation.navigate('OtpChoice');}}>
                    <Text style={{fontSize: 20, 
                        fontWeight: 'bold', 
                    }}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}

export default CreateAccount;