import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    top: {
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loginBanner: {
        backgroundColor: 'aquamarine',
        position: 'absolute',
        width: 606,
        height: 606,
        left: -200,
        top: -206,

        // background: url(.jpg);
    },

    loginButton: {
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'aquamarine',
        borderRadius: 10,
        marginTop: 50,

        shadowColor: "#000", //ios
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3, //android
    },
    login: {
        fontSize: 28,
        fontWeight: 'bold'
    },
});

export default styles;