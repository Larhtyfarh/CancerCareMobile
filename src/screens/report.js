import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons,  } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Icon from 'react-native-vector-icons';

export default class Report extends Component {
    render() {
        return (
            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <View>

                        <Image style={{ width:RF(20), height: RF(20), }} source={require('../assets/icons/actions/send.png')}/>
                        
                    </View> 


                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Report</Text>
                
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>


                <View style={{width: "100%",flexDirection: "row",alignItems: "center",justifyContent: "center",marginBottom: RF(25), justifyContent: "space-evenly"}}>
                
                    <View style={{flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: 1, borderBottomWidth: RF(3)}}>

                        <Text style={{fontSize: RF(20), color: lightTheme.orange, fontWeight: "600",}}>Vitals</Text>

                    </View>

                    <Text style={{fontSize: RF(20), color: lightTheme.grey}}>Symptoms</Text>

                    <Text style={{fontSize: RF(20), color: lightTheme.grey}}>Mood</Text>


                </View>

                <View style={{width: "100%",height: RF(240),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center"}}>
                            <Image style={{width: RF(44), height: RF(40), }} source={require('../assets/images/heartRate.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Heart Rate</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{paddingHorizontal: RF(25)}}>

                                <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>

                            </View> 

                        </View>

                        <View style={{paddingHorizontal: RF(30)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>160</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>140</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>120</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey,}}>80</Text>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>


                <View style={{width: "100%",height: RF(240),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center"}}>
                            <Image style={{width: RF(44), height: RF(40), }} source={require('../assets/images/weight.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Weight</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{paddingHorizontal: RF(25)}}>

                                <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>

                            </View> 

                        </View>

                        <View style={{paddingHorizontal: RF(30)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>80</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>60</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>40</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey,}}>20</Text>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>

                <View style={{width: "100%",height: RF(240),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center"}}>
                            <Image style={{width: RF(23), height: RF(40), }} source={require('../assets/images/bloodSugar.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Blood Sugar</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{paddingHorizontal: RF(25)}}>

                                <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>

                            </View> 

                        </View>

                        <View style={{paddingHorizontal: RF(30)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>160</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>140</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>120</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey,}}>80</Text>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>


                <View style={{width: "100%",height: RF(240),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center"}}>
                            <Image style={{width: RF(17), height: RF(40), }} source={require('../assets/images/temperature.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Temperature</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{paddingHorizontal: RF(25)}}>

                                <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>

                            </View> 

                        </View>

                        <View style={{paddingHorizontal: RF(30)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>35</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>30</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(25)}}>25</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey,}}>20</Text>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60)}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>

                </ScrollView>  
                
                
                </View>



        )
            
    }
}


