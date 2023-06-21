import {StyleSheet, StatusBar, Dimensions} from 'react-native';

const styles = StyleSheet.create({
    top:{
      marginTop: StatusBar.currentHeight,
      flexDirection: 'column',
      gap: 20,
      flex: 1,
      backgroundColor: 'white'
    }
    ,
    home: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 0.5,
      marginBottom: 10,
    },
    homeText:{
      fontSize: 35,
      color: 'gray',
    },
    searchBar: {
      backgroundColor: 'whitesmoke',
      borderRadius: 20,
      flex: 0.5,
      alignSelf: 'center',
      width: Dimensions.get('window').width-50,
      
      //ios shadow
      shadowColor: 'black', 
      shadowOffset: { height: 1, width: 1 }, 
      shadowRadius: 1, 
      shadowOpacity: 1, 
  
      elevation: 2, //android shadow
    },
    cards: {
      flex: 11,
      gap: 10,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    card: {
      //ios shadow
      shadowColor: 'black', 
      shadowOffset: { height: 1, width: 1 }, 
      shadowRadius: 1, 
      shadowOpacity: 1, 
  
      elevation: 3, //android shadow
  
      borderRadius: 12,
      backgroundColor: '#fff',
      width: Dimensions.get('window').width-100,
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
    },
    banner: {
      position: 'absolute',
      width: 1000,
      height: 1000,
      left: -320,
      top: -707,
      backgroundColor: 'aquamarine',

      //background: url(.jpg);
    },
    favorites: {
      flex: 6,
    },

  });


export default styles;