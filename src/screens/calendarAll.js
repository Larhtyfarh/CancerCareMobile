import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Modal, Alert, StyleSheet,  } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class CalendarAll extends Component {

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

                    <TouchableOpacity onPress={() => { this.setModalVisible(true);}}>
                    <View>
                        <Ionicons name="md-add" size={RF(35)} color="#FA4A0C" />
                    </View> 
                    </TouchableOpacity>

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Calendar</Text>
 
                </View>

                <View style={{width: "100%",flexDirection: "row",alignItems: "center",justifyContent: "center",marginBottom: RF(25), justifyContent: "space-evenly"}}>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Calendar")}>

                        <Text style={{fontSize: RF(20), color: lightTheme.grey}}>Daily</Text>

                    </TouchableOpacity>

                    <View style={{flexDirection: "column",borderBottomColor: lightTheme.orange, borderBottomWidth: RF(3)}}>

                        <Text style={{fontSize: RF(20), color: lightTheme.orange, fontWeight: "600",}}>All</Text>

                    </View>
                   
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: RF(15), }}>

                    <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange, }}>Medications</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("AllMedication")}>

                        <Text style={{fontSize: RF(14),fontWeight: "600" ,color: lightTheme.orange, textDecorationLine: "underline",  }}>See all</Text>

                    </TouchableOpacity>

                    
                    </View>

                    <View style={{width: "100%",height: RF(80),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/capsuleRedYellow.png")} style={{width: RF(25),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(24), fontWeight: "700", }}>Amoxyl</Text>
                                <Text style={{fontSize: RF(14), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(5), }}>1 capsule</Text>

                                <View style={{flexDirection: "row",}}>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.orange, fontSize: RF(14), fontWeight: "600", }}>7:00p.m</Text>
                                    </View>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>5:00p.m</Text>
                                    </View>

                                </View>

                            </View>
                            
                        </View>

                    </View>

                    <View style={{width: "100%",height: RF(80),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(10),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/tabletBlue.png")} style={{width: RF(50),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(24), fontWeight: "700", }}>Paracetamol</Text>
                                <Text style={{fontSize: RF(14), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(5), }}>2 tablets</Text>

                                <View style={{flexDirection: "row",}}>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.orange, fontSize: RF(14), fontWeight: "600", }}>7:00a.m</Text>
                                    </View>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>9:00p.m</Text>
                                    </View>

                                </View>

                            </View>
                            
                        </View>

                    </View>

                    <View style={{width: "100%",height: RF(80),backgroundColor: lightTheme.white,borderRadius: RF(10),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,marginBottom: RF(30),paddingHorizontal: RF(20),paddingVertical: RF(10), }}>

                        <View style={{flexDirection: "row" }}>

                            <Image source={require("../assets/images/dropAqua.png")} style={{width: RF(28),height: RF(50)}}/>
                            
                            <View style={{paddingHorizontal: RF(20)}}>
                                <Text style={{fontSize: RF(24), fontWeight: "700", }}>Ciplox</Text>
                                <Text style={{fontSize: RF(14), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(5), }}>1 drop</Text>

                                <View style={{flexDirection: "row",}}>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.peach, borderRadius: RF(10), alignItems: "center", justifyContent: "center", marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.orange, fontSize: RF(14), fontWeight: "600", }}>7:00a.m</Text>
                                    </View>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",marginRight: RF(15)}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>1:00p.m</Text>
                                    </View>

                                    <View style={{width: RF(60), height: RF(20), backgroundColor: lightTheme.lilac, borderRadius: RF(10), alignItems: "center", justifyContent: "center",}}>

                                        <Text style={{color: lightTheme.purple, fontSize: RF(14), fontWeight: "600", }}>9:00p.m</Text>
                                    </View>

                                </View>

                            </View>
                            
                        </View>

                    </View>

                    <View style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: RF(15), }}>

                    <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange, }}>Appointments</Text>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("AllAppointment")}>

                        <Text style={{fontSize: RF(14),fontWeight: "600" ,color: lightTheme.orange, textDecorationLine: "underline",  }}>See all</Text>

                    </TouchableOpacity>

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

                    <View style={{width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: RF(15), }}>

                    <Text style={{fontSize: RF(24), fontWeight: "700", color: lightTheme.orange, }}>Notes</Text>
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("AllNote")}>

                        <Text style={{fontSize: RF(14),fontWeight: "600" ,color: lightTheme.orange, textDecorationLine: "underline",  }}>See all</Text>

                    </TouchableOpacity>

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
                    <View style={{paddingBottom: RF(30)}} />

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