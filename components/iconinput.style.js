import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    input: {
        // elevation: 2,
        width: 300,
        fontSize: 22,
    },
    line:{
        // position: 'absolute',
        width: 240,
        height: 0,
        // left: 73;
        // top: 525;
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 50,
    },
    iconBorder:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
        elevation: 2,
        borderRadius: 2,
    },

})

export default styles;