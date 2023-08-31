import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import * as Speech from 'expo-speech';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  speak = () => {
    var thingToSay = this.state.name; 
     this.state.name === ''
       ? alert('Please Enter a word')
       : Speech.speak(thingToSay);
  };

  render() {
    return (
   
      <ImageBackground
          source={require("./assets/bg.jpg")}
          style={styles.Container1}>
          
        
        <Text style={styles.title}> 𝐏𝐫𝐨𝐧𝐨𝐮𝐧𝐜𝐞 𝐈𝐭 </Text>
      
      <Image source={require("./assets/Image.png")}
      style={styles.imageIcon}></Image> 
     
     <Text style={styles.text1}> 𝙴𝚗𝚝𝚎𝚛 𝚃𝚑𝚎 𝚆𝚘𝚛𝚍 </Text>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ name: text });
          }}
          value={this.state.name}
        />

        <View>
          <TouchableOpacity style={styles.button} onPress={this.speak}>
            <Text style={styles.text2}> 𝐂𝐥𝐢𝐜𝐤 𝐇𝐞𝐚𝐫 𝐭𝐨 𝐇𝐞𝐚𝐫 𝐬𝐩𝐞𝐞𝐜𝐡 </Text>
          </TouchableOpacity>
        </View>
      
      </ImageBackground>  
      
  
    );
  }
}

const styles = StyleSheet.create({
  Container1:{ 
    flex: 1,
  },
  title: {
    color: '#064663',
    fontSize: 40,
    textAlign: 'center',
    fontStyle: 'bold',
    fontweight:"bold",
    marginTop:80

  },
  inputBox: {
    marginTop: 0,
    width:"80%",
    alignSelf: 'center',
    height: 60,
    textAlign: 'center',
    borderWidth: 4,
    borderRadius:20,
    borderColor: '#FFF192',
  },
  button: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#E6E6FA',
    marginTop: 80,
    borderRadius: 30,
    width: '70%',
    alignSelf: 'center',
    height: 90,
  },
  text1:{
    color: "#ED567",
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    fontweight:"bold",
    marginTop:-70
  },
  text2:{
    color: "#ED567",
    fontSize: 20,
    textAlign: 'center',
    fontStyle: 'bold',
    fontweight:"bold",
    marginTop:-10
  
  },
  imageIcon: {
    width: 200,
    height: 200,
    margin:100,
  
  },
});
