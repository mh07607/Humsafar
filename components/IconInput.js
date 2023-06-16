import React from 'react';
import {TextInput, View, Image} from 'react-native';
import styles from './iconinput.style';

const IconInput = ({placeHolder, icon}) => {

    return (
        <View style={styles.iconBorder}>
            <Image source={icon} />
            <View>
                <TextInput
                placeholder={placeHolder}
                style={styles.input}>
                </TextInput>
                <View style={styles.line}></View>
            </View>
        </View>
    );
}

export default IconInput;