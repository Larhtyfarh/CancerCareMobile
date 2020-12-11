import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Alert, Modal, StyleSheet,  } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class Calendar extends Component {

    state = {
        modalVisible: false
      };
    
      setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
    
    
    render() {

        const { modalVisible } = this.state;

        return (
            
            <View style={mainStyle.container}>


            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {Alert.alert("Popup closed."); }}>

                <View style={styles.modalView}>

                    <View style={{width: "100%", marginTop: RF(25), marginBottom: RF(25), alignContent: "center", justifyContent: "space-between", flexDirection: "row-reverse", }}>
                        
                        <View style={{paddingRight: RF(25), }}>
                            <TouchableOpacity onPress={() => {this.setModalVisible(!modalVisible);}}>
                                <Ionicons name="md-close" size={RF(30)} color="#FA4A0C" />
                            </TouchableOpacity>
                        </View>
                        
                        <Text style={{fontSize: RF(22), fontWeight: "600", textAlign: "center", flex: 1, }}>Add New</Text>

                    </View>


                    <View style={{width: "100%",flexDirection: "row", justifyContent: "space-evenly",  marginBottom: RF(20), }}>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddMedication"); this.setModalVisible(!modalVisible); }}>
                        <View style={{width: RF(80), height: RF(110), alignItems: "center",backgroundColor: lightTheme.white,borderRadius: RF(10), paddingTop: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, }}>

                            <Image style={{width: RF(40), height: RF(40), marginBottom: RF(20), }} source={require('../assets/images/tabletBlue.png')}/>
                            <Text style={{fontSize: RF(15), fontWeight: "700", color: lightTheme.orange, }}>Medication</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddAppointment"); this.setModalVisible(!modalVisible); }}>
                        <View style={{width: RF(80), height: RF(110), alignItems: "center",backgroundColor: lightTheme.white,borderRadius: RF(10), paddingTop: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, }}>

                            <Image style={{width: RF(40), height: RF(40), marginBottom: RF(20), }} source={require('../assets/images/appointment.png')}/>
                            <Text style={{fontSize: RF(15), fontWeight: "700", color: lightTheme.orange, }}>Appointment</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddSymptoms"); this.setModalVisible(!modalVisible); }}>
                        <View style={{width: RF(80), height: RF(110), alignItems: "center",backgroundColor: lightTheme.white,borderRadius: RF(10), paddingTop: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, }}>

                            <Image style={{width: RF(37), height: RF(40), marginBottom: RF(20), }} source={require('../assets/images/symptoms.png')}/>
                            <Text style={{fontSize: RF(15), fontWeight: "700", color: lightTheme.orange, }}>Symptoms</Text>

                        </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddVitals"), this.setModalVisible(!modalVisible); }}>
                        <View style={{width: RF(80), height: RF(110), alignItems: "center",backgroundColor: lightTheme.white,borderRadius: RF(10), paddingTop: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, }}>

                            <Image style={{width: RF(44), height: RF(40), marginBottom: RF(20), }} source={require('../assets/images/heartRate.png')}/>
                            <Text style={{fontSize: RF(15), fontWeight: "700", color: lightTheme.orange, }}>Vitals</Text>

                        </View>
                        </TouchableOpacity>

                    </View>

              
                </View>
            </Modal>

        


                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <View>
                        <TouchableOpacity  onPress={() => { this.setModalVisible(true);}}>
                            <Ionicons name="md-add" size={RF(35)} color="#FA4A0C" />
                        </TouchableOpacity>
                    </View> 

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Calendar</Text>

                </View>

                <View style={{width: "100%",flexDirection: "row",alignItems: "center",justifyContent: "center",marginBottom: RF(20), justifyContent: "space-evenly"}}>
                
                    <View style={{flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: RF(3)}}>

                        <Text style={{fontSize: RF(20), color: lightTheme.orange, fontWeight: "600",}}>Daily</Text>

                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("CalendarAll")}>

                        <Text style={{fontSize: RF(20), color: lightTheme.grey}}>All</Text>

                    </TouchableOpacity>


                    </View>


            <ScrollView showsVerticalScrollIndicator={false}>


            <View style={{height: RF(80), marginBottom: RF(40)}}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>
                    
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                    <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                    
                    <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>15</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                    <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>M</Text>
                    
                    <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>16</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.purple,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"}}>T</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.white,fontWeight: "600"}}>17</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>W</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>18</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>T</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>19</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>F</Text>
                        
                        <Text style={{fontSize: RF(18),color: lightTheme.grey,fontWeight: "700"}}>20</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>21</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>22</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>M</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>23</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>T</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>24</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>W</Text>
                        
                        <Text style={{fontSize: RF(20),color: lightTheme.grey,fontWeight: "600"}}>25</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>T</Text>
                        
                        <Text style={{fontSize: RF(18),color: lightTheme.grey,fontWeight: "700"}}>26</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>F</Text>
                        
                        <Text style={{fontSize: RF(18),color: lightTheme.grey,fontWeight: "700"}}>27</Text>
                    </View>
                    <View style={{width: RF(40),height: RF(75),backgroundColor: lightTheme.white,borderRadius: RF(10),paddingHorizontal: RF(10),paddingVertical: RF(15),alignItems: "center",marginRight: RF(10)}}>
                    
                        <Text style={{marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                        
                        <Text style={{fontSize: RF(18),color: lightTheme.grey,fontWeight: "700"}}>28</Text>
                    </View>
                </ScrollView>
</View>


                <View style={{width: "100%",height: RF(70),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(15),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>
                    
                <View style={{flexDirection:"row",justifyContent: "space-between", marginBottom: RF(12)}}>


                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/capsuleRedYellow.png")} style={{width: RF(15),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Amoxyl</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>1 capsule</Text>
                        </View>
                        
                    </View>

                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/tabletBlue.png")} style={{width: RF(30),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Paracetamol</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>2 tablets</Text>
                        </View>
                        
                    </View>

                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/dropAqua.png")} style={{width: RF(17),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Ciplox</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>1 drop</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between" }}>

                <Text style={{color: lightTheme.grey, fontSize: RF(12)}}>(3 cards)</Text>

                <View style={{width: RF(45), height: RF(15), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center"}}>

                        <Text style={{color: lightTheme.purple, fontSize: RF(12), alignItems: "flex-end",}}>7:00am</Text>
                </View>

                </View>

                </View>




                <View style={{width: "100%",height: RF(70),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>
                    
                <View style={{flexDirection:"row",justifyContent: "space-between", marginBottom: RF(12)}}>


                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/fatigue.png")} style={{width: RF(27),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Fatigue</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>Severe</Text>
                        </View>
                        
                    </View>

                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/nausea.png")} style={{width: RF(20),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Nausea</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>Severe</Text>
                        </View>
                        
                    </View>

                    <View style={{flexDirection: "row" }}>

                        <Image source={require("../assets/images/headache.png")} style={{width: RF(25),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(10)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Headache</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>Mild</Text>
                        </View>
                        
                    </View>
                </View>

                <View style={{flexDirection: "row", justifyContent: "space-between" }}>

                <Text style={{color: lightTheme.grey, fontSize: RF(12)}}>(2 cards)</Text>

                <View style={{width: RF(45), height: RF(15), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center"}}>

                        <Text style={{color: lightTheme.purple, fontSize: RF(12), alignItems: "flex-end",}}>7:00am</Text>
                </View>

                </View>

                </View>


                <View style={{width: "100%",height: RF(70),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>


                    <View style={{flexDirection: "row", marginBottom: RF(12) }}>

                        <Image source={require("../assets/images/moodExcited.png")} style={{width: RF(30),height: RF(30)}}/>
                        
                        <View style={{paddingHorizontal: RF(15)}}>
                            <Text style={{fontSize: RF(14), fontWeight: "700", }}>Mood</Text>
                            <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange,}}>Excited</Text>
                        </View>
                        
                    </View>

                    
                    <View style={{flexDirection: "row", justifyContent: "space-between" }}>

                        <Text style={{color: lightTheme.grey, fontSize: RF(12)}}>(3 cards)</Text>

                        <View style={{width: RF(45), height: RF(15), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center"}}>

                                <Text style={{color: lightTheme.purple, fontSize: RF(12), alignItems: "flex-end",}}>7:00am</Text>
                        </View>

                    </View>

                </View>





                <View style={{width: "100%",height: RF(70),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>
                    
                    <View style={{flexDirection:"row",justifyContent: "space-between", marginBottom: RF(12)}}>


                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/heartRate.png")} style={{width: RF(22),height: RF(20)}}/>
                            
                            <View style={{paddingHorizontal: RF(10)}}>
                                
                                <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange,}}>77<Text style={{fontSize: RF(14)}}>BPM</Text></Text>
                                
                            </View>
                            
                        </View>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/weight.png")} style={{width: RF(20),height: RF(20)}}/>
                            
                            <View style={{paddingHorizontal: RF(10)}}>
                                
                            <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange,}}>60<Text style={{fontSize: RF(14)}}>kg</Text></Text>
                                
                            </View>
                            
                        </View>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/bloodSugar.png")} style={{width: RF(12),height: RF(20)}}/>
                            
                            <View style={{paddingHorizontal: RF(10)}}>
                                
                            <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange,}}>35<Text style={{fontSize: RF(14)}}>mg/dL</Text></Text>
                                
                            </View>
                            
                        </View>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/temperature.png")} style={{width: RF(9),height: RF(20)}}/>
                            
                            <View style={{paddingHorizontal: RF(10)}}>
                                
                                <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange,}}>32<Text style={{fontSize: RF(14)}}>C</Text></Text>
                                
                            </View>
                            
                        </View>
                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between" }}>

                    <Text style={{color: lightTheme.grey, fontSize: RF(12)}}>(2 cards)</Text>

                    <View style={{width: RF(45), height: RF(15), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center"}}>

                            <Text style={{color: lightTheme.purple, fontSize: RF(12), alignItems: "flex-end",}}>7:00am</Text>
                    </View>

                    </View>

                    </View>


                    <View style={{width: "100%",height: RF(70),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(25),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>


                    <View style={{flexDirection: "column"}}>
                        
                        <View style={{flexDirection: "row"}}>

                            <Image source={require("../assets/images/appointment.png")} style={{width: RF(30),height: RF(30)}}/>
                            
                            <View style={{paddingHorizontal: RF(15)}}>
                                <Text style={{fontSize: RF(16), fontWeight: "700", color: lightTheme.orange }}>Chemoterapy</Text>
                                <Text style={{fontSize: RF(12), fontWeight: "600",}}>Dr. Tim</Text>
                                <Text style={{fontSize: RF(10), fontWeight: "600", color: lightTheme.grey,}}>General</Text>
                            </View>

                        </View>

                        
                    <View style={{flexDirection: "row", justifyContent: "flex-end", }}>

                        <View style={{width: RF(100), height: RF(15), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(10)}}>

                            <Text style={{color: lightTheme.orange, fontSize: RF(12),}}>Mon 16, November</Text>
                        </View>

                        <View style={{width: RF(45), height: RF(15), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                <Text style={{color: lightTheme.purple, fontSize: RF(12), }}>7:00am</Text>
                        </View>

                    </View>

                    
                    </View>

                    </View>

                    <View style={{paddingBottom: RF(10)}} />
            </ScrollView>  
            </View>
              


        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        width: "100%",
        backgroundColor: "#f2f2f2",
        borderRadius: RF(20),
        elevation: 2,
        shadowColor: "rgba(57,57,57,0.10)",
        shadowOffset: {width: 0,
            height: 4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    },
    

  });
