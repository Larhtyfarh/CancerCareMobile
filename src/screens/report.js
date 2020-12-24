import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button, TouchableOpacity, Share } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons,  } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Icon from 'react-native-vector-icons';

export default class Report extends Component {

    onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'CancerCare | Share report with...',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

    state = {
        modalVisible: false,
        tab: 1
    };
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    
    onToggleTab = n => {
        this.setState({ tab: n })
    }


    render() {

        const { modalVisible,tab } = this.state;


        return (
            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <TouchableOpacity onPress={this.onShare}>
                        <View>

                            <Image style={{ width:RF(20), height: RF(20), }} source={require('../assets/icons/actions/send.png')}/>
                        
                        </View> 
                    </TouchableOpacity>


                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Report</Text>
                
                </View>


                <ScrollView showsVerticalScrollIndicator={false}>


                <View style={{width: "100%",flexDirection: "row",alignItems: "center",justifyContent: "center",marginBottom: RF(20), justifyContent: "space-evenly"}}>
                
                    <TouchableOpacity onPress={()=>this.onToggleTab(1)} style={tab === 1 ? {flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: RF(3)} : null}>

                        <Text style={tab === 1 ? {fontSize: RF(20), color: lightTheme.orange, fontWeight: "600"} : { fontSize: RF(20), color: lightTheme.grey}}>Vitals</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleTab(2)} style={tab === 2 ? {flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: RF(3)} : null}>

                        <Text style={tab === 2 ? {fontSize: RF(20), color: lightTheme.orange, fontWeight: "600"} : { fontSize: RF(20), color: lightTheme.grey}}>Symptoms</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleTab(3)} style={tab === 3 ? {flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: RF(3)} : null}>

                        <Text style={tab === 3 ? {fontSize: RF(20), color: lightTheme.orange, fontWeight: "600"} : { fontSize: RF(20), color: lightTheme.grey}}>Mood</Text>

                    </TouchableOpacity>


                </View>

                
                {tab === 1 ? 
                <View>

                <View style={{width: "100%",height: RF(260),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{width: "100%", paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(44), height: RF(40), }} source={require('../assets/images/heartRate.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Heart Rate</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>

                                    <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row", }}>

                            <View style={{paddingHorizontal: RF(30)}}>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>160</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>140</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>120</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>80</Text>

                            </View>

                            <View>

                                <Image style={{width: RF(230), height: RF(110), marginHorizontal: RF(10) }} source={require('../assets/images/heartRateGraph.png')}/>

                            </View>

                        </View>
                        

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60), justifyContent: "space-between", }}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>


                <View style={{width: "100%",height: RF(260),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(44), height: RF(40), }} source={require('../assets/images/weight.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Weight</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row", }}>
                            <View style={{paddingHorizontal: RF(30)}}>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>80</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>60</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>40</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>20</Text>

                            </View>

                            <View>

                                <Image style={{width: RF(230), height: RF(110), marginHorizontal: RF(10) }} source={require('../assets/images/weightGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60), justifyContent: "space-between",}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>

                <View style={{width: "100%",height: RF(260),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(23), height: RF(40), }} source={require('../assets/images/bloodSugar.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Blood Sugar</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row", }}>
                            <View style={{paddingHorizontal: RF(30)}}>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>160</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>140</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>120</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>80</Text>

                            </View>

                            <View>

                                <Image style={{width: RF(230), height: RF(110), marginHorizontal: RF(10)}} source={require('../assets/images/bloodSugarGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60), justifyContent: "space-between",}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>


                <View style={{width: "100%",height: RF(260),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(17), height: RF(40), }} source={require('../assets/images/temperature.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Temperature</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18), }} source={require('../assets/icons/actions/sendBlack.png')}/>
                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row", }}>
                            <View style={{paddingHorizontal: RF(30)}}>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>35</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>30</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>25</Text>

                                <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginBottom: RF(20)}}>20</Text>

                            </View>

                            <View>

                                <Image style={{width: RF(230), height: RF(110), marginHorizontal: RF(10)}} source={require('../assets/images/heartRateGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(60), justifyContent: "space-between",}}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                </View>
                </View> 
                
                : null }



                {tab === 2 ?

                <View>

                <View style={{width: "100%",height: RF(280),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{width: "100%", paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(35), height: RF(40), }} source={require('../assets/images/fatigue.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Fatigue</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row", }}>
                            <View style={{marginBottom: RF(5), width: "25%" }}>

                                <View style={{}}>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Unbearable</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Severe</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Moderate</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Mild</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>None</Text>

                                </View>

                            </View>

                            <View>

                                <Image style={{width: RF(240), height: RF(125), marginHorizontal: RF(25), }} source={require('../assets/images/fatigueGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(90), justifyContent: "space-between", }}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                    </View> 


                    <View style={{width: "100%",height: RF(280),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{width: "100%", paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                            <Image style={{width: RF(25), height: RF(40), }} source={require('../assets/images/nausea.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Nausea</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>
                                
                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={{marginBottom: RF(5), width: "25%" }}>

                                <View style={{}}>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Unbearable</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Severe</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Moderate</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Mild</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>None</Text>

                                </View>

                            </View>

                            <View>

                                <Image style={{width: RF(240), height: RF(125), marginHorizontal: RF(25)}} source={require('../assets/images/nauseaGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(90), justifyContent: "space-between", }}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                    </View> 

                    <View style={{width: "100%",height: RF(280),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                    <View style={{flexDirection: "column"}}>

                        <View style={{width: "100%", paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center",}}>
                            <Image style={{width: RF(35), height: RF(40), }} source={require('../assets/images/headache.png')}/>
                        
                            <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Headache</Text>

                            <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                            </View>

                            <View style={{flex: 1, alignItems: "flex-end", }}>

                                <TouchableOpacity onPress={this.onShare}>
                                    <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                </TouchableOpacity>

                            </View> 

                        </View>

                        <View style={{flexDirection: "row"}}>
                            <View style={{marginBottom: RF(5), width: "25%" }}>

                                <View style={{}}>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(15)}}>Unbearable</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(15)}}>Severe</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(15)}}>Moderate</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(15)}}>Mild</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(15)}}>None</Text>

                                </View>

                            </View>

                            <View>

                                <Image style={{width: RF(240), height: RF(125), marginHorizontal: RF(25)}} source={require('../assets/images/headacheGraph.png')}/>

                            </View>

                        </View>

                        <View style={{flexDirection: "row", paddingHorizontal: RF(90), justifyContent: "space-between", }}>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                        </View>



                    </View>

                    </View> 


                </View> : null }



                { tab === 3 ?
                
                    <View>

                        <View style={{width: "100%",height: RF(270),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25)}}>

                            <View style={{flexDirection: "column"}}>

                                <View style={{width: "100%", paddingHorizontal: RF(25), paddingVertical: RF(25), flexDirection: "row", alignItems: "center", }}>
                                    <Image style={{width: RF(40), height: RF(40), }} source={require('../assets/images/moodExcited.png')}/>
                                
                                    <Text style={{fontSize: RF(30), fontWeight: "800", paddingHorizontal: RF(15)}}>Mood</Text>

                                    <View style={{width: RF(60), height: RF(40), borderRadius: RF(15), backgroundColor: "#F0F2F6", justifyContent: "center",  flexDirection: "row", }}>

                                        <Text style={{fontSize: RF(14), color: lightTheme.black, alignSelf: "center" }}> 24 H</Text>

                                    </View>

                                    <View style={{flex: 1, alignItems: "flex-end", }}>

                                        <TouchableOpacity onPress={this.onShare}>
                                            <Image style={{ width:RF(18), height: RF(18),  }} source={require('../assets/icons/actions/sendBlack.png')}/>

                                        </TouchableOpacity>

                                    </View> 

                                </View>

                                <View style={{flexDirection: "row"}}>
                                    <View style={{marginBottom: RF(5), width: "20%" }}>

                                        <View style={{}}>

                                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Excited</Text>

                                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Happy</Text>

                                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Neutral</Text>

                                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Sad</Text>

                                            <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, alignSelf: "flex-end", marginBottom: RF(14)}}>Unhappy</Text>

                                        </View>

                                    </View>

                                    <View>

                                        <Image style={{width: RF(240), height: RF(120), marginHorizontal: RF(25) }} source={require('../assets/images/moodGraph.png')}/>

                                    </View>

                                </View>

                                <View style={{flexDirection: "row", paddingHorizontal: RF(70), justifyContent: "space-between", }}>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>08:00</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>10:00</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>12:00</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                                    <Text style={{fontSize: RF(14), fontWeight: "600", color: lightTheme.grey, marginLeft: RF(22)}}>14:00</Text>

                                </View>

                                </View>
                        </View>

                    </View> : null}

                </ScrollView>  
                
                
                </View>



        )
            
    }
}


