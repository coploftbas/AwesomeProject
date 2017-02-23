/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  ListView,
  Navigator,
  Image
} from 'react-native';
import MyScene from './MyScene'

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    //this.state = {myText: ''}; //FOR BLINKING
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin', 'Devin', 'Cop', 'Devin'
      ])
    };
  }

  render() {
    let myPic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    let reactPic = {
      uri: 'https://facebook.github.io/react-native/img/favicon.png'
    }
    return (

      
      //<MyScene />
      <Navigator
        initialRoute = {{ title: 'My Initial Scene', index: 0 }}
        renderScene = {(route, navigator) => {
          return <MyScene
                   title = {route.title}

                   //Function to call when a new scene should be displayed
                   onForward = {() => {
                      const nextIndex = route.index + 1;
                      navigator.push({
                        title: 'Scene ' + nextIndex,
                        index: nextIndex,
                      });
                    }}

                   //Function to call to go back to the previous scene
                   onBack = {() => {
                      if( route.index > 0) {
                        navigator.pop();
                      }
                    }}
                  />
        }}
      />





      /*<Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) => {
          return <MyScene title={route.title} />
        }}
      />*/

      // ================= COMPONENTS TESTING =================
/*
      <View style={styles.container}>

        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>

        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu,{'\n'}
          Nothing Else!!
        </Text>
        <Text style={styles.instructions}>
          <LotsOfGreetings nameList = 'Pipat'/> {'\n'}
          <LotsOfGreetings nameList = 'Busaba' />
        </Text>
        <Image source={myPic} style={styles.bananaPic} />
        <Text>
          <Blink blinkText = 'Blinking Banana' style={styles.welcome}/>
        </Text>
        <Text>Is this part going to move up when blink disappear ?</Text>


      </View>
*/

      // ================= FLEX TEST 1 =================
      /*
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        <View style={{flex: 5, backgroundColor: 'lightblue'}} />
      </View>*/

      //FLEX TEST 2 (FLEX ROW)
      /*
      <View style={{
          flex: 1,
          flexDirection: 'row',
          //justifyContent: 'space-between', // DOESNT EFFECT TO 'FLEX'
        }}>
        <View style={{//width: 50,
            flex: 4, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{//width: 50,
            flex: 1, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{//width: 50,
            flex: 4, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      */

      //FLEX TEST 3 (FLEX COLUMN)
      /*
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
      */

      //ALIGN ITEMS
      /*
       <View style={{
        flex: 1,
        flexDirection: 'column', //SET MAIN AXIS (COLUMN -> VERTICAL) (ROW -> HORIZONTAL)
        justifyContent: 'center', //ALIGN FOR (X-AXIS <-> ROW) (Y-AXIS <-> COLUMN)
        alignItems: 'stretch',   //
      }}>
        <View style={{ height: 50, backgroundColor: 'powderblue'}} />
        <View style={{ height: 50, backgroundColor: 'skyblue'}} />
        <View style={{ height: 50, backgroundColor: 'steelblue'}} />
      </View>
      */

      // ================= TEXT INPUT ====================
      /*
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(myText) => this.setState({myText})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.myText.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      */

      // ================= TEXT INPUT ====================
      /*
      <View style={{flex:1}}>
      <View style={styles.topBar}></View>
      <ScrollView>
        <Text style={{fontSize:96}}>Cop Pipat</Text>
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Text style={{fontSize:80}}>Sun Busaba</Text>
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Text style={{fontSize:80}}>React Native</Text>
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Image source={reactPic} style={{width:40, height:40}} />
        <Text style={{fontSize:80}}>Is da best !</Text>
      </ScrollView>
      </View>
      */

      // =============== ListView ==============
      /*
      <View style={{flex: 1, paddingTop: 22}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
      */
    );
  }
}

class LotsOfGreetings extends Component {
  render() {
    return (
      <Text>
        Hello {this.props.nameList}!
      </Text>
    )
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    //Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText});
    }, 1000);
  }

  render() {
    let myDisplay = this.state.showText ? this.props.blinkText : ' ';
    return (
      <Text>{myDisplay}</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bananaPic: {
    width: 193,
    height: 110
  },
  HeightWidth: {
    height: 300,
    backgroundColor: 'skyblue'
  },
  topBar: {
    height: 20,
    backgroundColor: '#3B5998',
  },
  myContent: {
    flex: 10,
    backgroundColor: '#FFFFFF',
  },

});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
