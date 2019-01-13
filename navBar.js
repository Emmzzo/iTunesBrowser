import React from 'react';
import { StyleSheet} from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      subContainer:{
        flex:1,
        backgroundColor:'#CCC',
      },
      navBars:{
        backgroundColor:'#2A3744',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'
      },
      navBarTitle:{
        color:'#FEFEFE',
        textAlign:'center', 
        fontWeight:'bold',
        flex:1
    
      },
      navBarButton:{
        width:50,
        color:'#FEFEFE',
        textAlign:'center'
      }
});