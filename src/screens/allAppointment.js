import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, BackHandler, Alert } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class allAppointment extends Component {
    render() {
        return (
            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CalendarAll")}>

                            <Image style={{ height: RF(30), width: RF(30), }} source={require('../assets/icons/actions/back.png')}/>

                        </TouchableOpacity>

                    </View> 

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>All Appointments</Text>
 
                </View>

                <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/appointment.png")} style={{width: RF(50),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(22), fontWeight: "600",marginBottom: RF(2), }}>Surgery Consult</Text>
                                <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(2),}}>Dr. James</Text>
                                <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(7), }}>Surgery</Text>

                                <View style={{flexDirection: "row",}}>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.orange, fontSize: RF(14), fontWeight: "600", }}>1:00p.m</Text>
                                    </View>

                                    <View style={{width: RF(120), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>Wed 25, November</Text>
                                    </View>

                                </View>

                            </View>
                            
                        </View>

                    </View>

                    <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(30),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/appointment.png")} style={{width: RF(50),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(22), fontWeight: "600",marginBottom: RF(2), }}>Chemoterapy</Text>
                                <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(2),}}>Dr. Tim</Text>
                                <Text style={{fontSize: RF(15),  color: lightTheme.grey, marginBottom: RF(7), }}>Chemoterapy</Text>

                                <View style={{flexDirection: "row",}}>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.orange, fontSize: RF(14), fontWeight: "600", }}>3:00p.m</Text>
                                    </View>

                                    <View style={{width: RF(110), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>Fri 27, November</Text>
                                    </View>

                                </View>

                            </View>
                            
                        </View>

                    </View>

            </View>
        )
    }
}
