import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button, Cursor} from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons,  } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class Log extends Component {

    render() {
        return (
            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Log</Text>

                </View>


                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(5)}}>Mood</Text>
                
                
                <View style={{width: "100%", alignItems: "center"}}>
                    
                    <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodUnhappy.png')}/>

                    <View style={{width: "100%", height: RF(10), borderRadius: RF(20), backgroundColor: "#C4C4C4", marginBottom: RF(30) }}>
                    
                    
                    </View>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(15)}}>Symptoms</Text>

                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", paddingRight: RF(20), paddingLeft: RF(20), paddingBottom: RF(25) }}>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(35), marginBottom:RF(5)}} source={require('../assets/images/fatigue.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Fatigue</Text>

                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(25), marginBottom:RF(5)}} source={require('../assets/images/nausea.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Nausea</Text>

                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(35), marginBottom:RF(5)}} source={require('../assets/images/headache.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Headache</Text>

                    </View>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(15)}}>Vitals</Text>

                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between", paddingRight: RF(20), paddingLeft: RF(20), paddingBottom: RF(25) }}>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(44), marginBottom: RF(10)}} source={require('../assets/images/heartRate.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Heart Rate</Text>

                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(40), marginBottom: RF(10)}} source={require('../assets/images/weight.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Weight</Text>

                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(23), marginBottom: RF(10)}} source={require('../assets/images/bloodSugar.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Blood Sugar</Text>

                    </View>

                    <View style={{flexDirection: "column", alignItems: "center", }}>
                        <Image style={{height: RF(40), width: RF(18), marginBottom: RF(10)}} source={require('../assets/images/temperature.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Temperature</Text>

                    </View>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(15)}}>Notes</Text>

        
                <View style={{height: RF(165), flexDirection: "column", alignItems: "center", justifyContent: "center", }}>

                        <Image style={{height: RF(50), width: RF(55), marginBottom:RF(15)}} source={require('../assets/images/notes.png')}/>
                        <Text style={{fontSize: RF(20), color: lightTheme.grey,  }}>Tap here to add a note</Text>

                </View>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="SAVE LOG" color= "#F2f2f2" />

                </View>

                


                





                




            </View>
        )
    }
}
