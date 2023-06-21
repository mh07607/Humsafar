import React from "react";
import styles from "./navbar.style";
import { TouchableOpacity, View, Image } from "react-native";


const NavBar = () => {
    return(
        <View style={styles.top}>
            
            <TouchableOpacity>
                <Image source = {require('../icons/navbar/Home.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {require('../icons/navbar/group_share-1.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {require('../icons/navbar/Bell.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source = {require('../icons/navbar/User_box.png')}/>
            </TouchableOpacity>
        </View>

    );
}

export default NavBar;