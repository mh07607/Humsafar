import React from 'react';
import {TextInput, View, Image} from 'react-native';
import styles from './iconinput.style'; 

const IconInput = ({placeHolder, icon, hide}) => {

    return (
        <View>
            <View style={styles.iconBorder}>
                <Image source={icon} />
                <View>
                    <TextInput secureTextEntry={hide}
                    placeholder={placeHolder}
                    style={styles.input}>
                    </TextInput>
                    <View style={styles.line}></View>
                </View>
            </View>
        </View>
    );
}

export default IconInput;