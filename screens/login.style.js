import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loginBanner: {
        // backgroundColor: 'aquamarine',
        position: 'absolute',
        width: '100%',
        height: '100%',
        // left: -123,
        top: -56,
        
        // // background: url("https://wallpaperaccess.com/full/2431350.jpg"),
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
    },
    container: {
        flex: 10, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputContainer: {
        gap: 8,

    },

    login: {
        fontSize: 28,
        flex: 2,
        fontWeight: 'bold'
    },

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
});

export default styles;
