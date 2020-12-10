import React,{ Component } from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import { Stack, CalNav } from './src/route';
import { StatusBar } from "react-native";
// import { Appearance } from "react-native";

class App extends Component {
  componentDidMount() {
    StatusBar.setBarStyle("dark-content")
  }
  render() {
    return (
   
        < Stack/>
        
    );
  }
}

export default App;
