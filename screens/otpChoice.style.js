import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginButton: {
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: 'aquamarine',
        borderRadius: 10,
        marginTop: 10,

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
        flex: 2,
        fontWeight: 'bold'
    },
});

export default styles;