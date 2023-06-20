import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    input: {
        // elevation: 2,
        width: 300,
        fontSize: 18,
    },
    line:{
        width: 240,
        height: 0,

        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
    },
    iconBorder:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 2,
        padding: 8,
        paddingBottom: 15,

        shadowColor: "#000", //ios
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3, //android

        borderRadius: 10,
        backgroundColor: 'white',
    },

})

export default styles;