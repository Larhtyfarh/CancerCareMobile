import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class allNote extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    
    render() {
        return (
            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <View>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>

                            <Image style={{ height: RF(30), width: RF(30), }} source={require('../assets/icons/actions/back.png')}/>

                        </TouchableOpacity>

                    </View> 

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>All Notes</Text>
 
                </View>


                <TouchableOpacity onPress={() => this.props.navigation.navigate("NoteView")}>

                <View style={{width: "100%",height: RF(90),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/notes.png")} style={{width: RF(50),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(22), fontWeight: "600",marginBottom: RF(5), }}>Reaction to Ciplox</Text>
                                <Text style={{fontSize: RF(15),  marginBottom: RF(5),}}>
                                I have noticed a severe headache and rashes whenever i use the Ciplox drops, whenev...
                                </Text>
                                <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(7), }}>Sun 15, November</Text>

                            </View>
                            
                        </View>

                    </View>

                    </TouchableOpacity >


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NoteView")}>

                    <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/notes.png")} style={{width: RF(50),height: RF(50)}}/>
                                
                            <View style={{paddingHorizontal: RF(20)}}>
                                    <Text style={{fontSize: RF(22), fontWeight: "600",marginBottom: RF(5), }}>Severe Fatigue</Text>
                                    <Text style={{fontSize: RF(15),  marginBottom: RF(5),}}>
                                    My Fatigue level has gotten severe in the last couple of days, I’m unsure what the caus...
                                    </Text>
                                    <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(7), }}>Fri 13, November</Text>

                                </View>
                                
                            </View>

                    </View>

                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NoteView")}>

                    <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>
                        
                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/notes.png")} style={{width: RF(50),height: RF(50)}}/>
                                
                            <View style={{paddingHorizontal: RF(20)}}>
                                    <Text style={{fontSize: RF(22), fontWeight: "600",marginBottom: RF(5), }}>A good day</Text>
                                    <Text style={{fontSize: RF(15),  marginBottom: RF(5),}}>
                                    I've had a good day today.
                                    </Text>
                                    <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(7), }}>Thur 12, November</Text>

                            </View>
                                
                        </View> 
                            
                    </View>

                    </TouchableOpacity>

            </View>
        )
    }
}
