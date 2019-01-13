import React from 'react';
import { Platform, StatusBar, StyleSheet, View,Text,NavigatorIOS} from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

class MediaListView extends React.Component{
render(){
  return(
 <View style={styles.container}>
         <View style={styles.navBar}>
         <View style={styles.navBarButton}></View>
            <Text style={[styles.navBarTitle,componentStyle.titleItallic,{
              fontWeight:'bold'
            }]}>iTunesBrowser</Text>
            <Text style={styles.navBarButton}>Search</Text>
          </View>
         <View style={styles.subContainer}>
           <Text>
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Emma Sibo
           </Text>
         </View>
         
        </View>
  );
}
}
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <NavigatorIOS style={styles.container}
        initialRoute={{
          component:MediaListView,
          title:'iTunesBrowser'
        }}
        />
       
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
   
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer:{
    flex:1,
    backgroundColor:'#CCC',
  },
  navBar:{
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
var componentStyle=StyleSheet.create({
  titleItallic:{
    fontStyle:'italic',
    fontWeight:'normal'
  }
  });