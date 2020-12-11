import React, { Component } from 'react';
import { ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class Home extends Component {
    render() {
        return (
            <View style={mainStyle.container}>
                
                <View style={styles.header}>

                    <View>
                    <Text style={{fontSize: RF(22),fontWeight: "700",marginBottom: RF(5),color: lightTheme.orange }}>Hi,</Text>
                    <Text style={{fontSize: RF(32),fontWeight: "700",color: lightTheme.orange,marginBottom: RF(20)}}>Tolu</Text>
                    </View>

                    <TouchableOpacity>
                    <View style={{alignItems: "flex-end"}}>
                        <Ionicons name="md-menu" size={RF(35)} color="black" />
                    </View>  
                    </TouchableOpacity>
                </View>



                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.heading}>Next Up</Text>
                    <Text style={styles.subheading}>Meds</Text>

                    <View style={styles.medCard}>

                    </View>


                    <Text style={styles.subheading}>Appointment</Text>



                    <View style={styles.appointmentContainer}>
                        <View style={styles.appointmentCard}>
                            <View style={styles.appointmentDate}>
                                <Text style={{fontSize: RF(20),fontWeight: "700",color: lightTheme.white,marginBottom: RF(15)}}>Wed</Text>
                                <Text style={{fontSize: RF(18),fontWeight: "500",color: lightTheme.white}}>11</Text>
                            </View>
                            <View>
                                <Text style={styles.appointmentTitle}>Surgery Consult</Text>
                                <Text style={styles.appointmentDoctor}>Dr James</Text>
                                <Text style={{fontSize: RF(16),fontWeight: "500",color: "#656565",marginBottom: RF(2)}}>Surgery</Text>
                                <Text style={{fontSize: RF(16),fontWeight: "500",color: "#656565",marginBottom: RF(2)}}>11.00am</Text>
                            </View>
                        </View>
                        <View style={styles.appointmentCard}>
                            <View style={styles.appointmentDate}>
                                <Text style={{fontSize: RF(20),fontWeight: "700",color: lightTheme.white,marginBottom: RF(15)}}>Mon</Text>
                                <Text style={{fontSize: RF(18),fontWeight: "500",color: lightTheme.white}}>15</Text>
                            </View>
                            <View>
                                <Text style={styles.appointmentTitle}>Chemoterapy</Text>
                                <Text style={styles.appointmentDoctor}>Dr Tim</Text>
                                <Text style={{fontSize: RF(16),fontWeight: "500",color: "#656565",marginBottom: RF(2)}}>General</Text>
                                <Text style={{fontSize: RF(16),fontWeight: "500",color: "#656565",marginBottom: RF(2)}}>11.00am</Text>
                            </View>
                        </View>
                    </View>



                    <Text style={styles.quest}>How are you today?</Text>


                    <Text style={styles.heading}>Vitals</Text>



                    <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{marginBottom: RF(30)}}>
                        
                        <View style={{width: "100%", justifyContent: "space-between", flexDirection: "row"}}>
                        <View style={styles.vitalsContainer}>
                        
                            <Image source={require("../assets/images/heartRate.png")} style={styles.vitalsImage}/>
                            <Text style={styles.vitalsLabel}>Heart Rate</Text>
                            <Text style={styles.vitalsValue}>77 <Text style={{fontSize: RF(14),fontWeight: "600"}}>BPM</Text></Text>

                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/weight.png")} style={styles.vitalsImage}/>
                            <Text style={styles.vitalsLabel}>Weight</Text>
                            <Text style={styles.vitalsValue}>60 <Text style={{fontSize: RF(14),fontWeight: "600"}}>kg</Text></Text>

                        </View>

                        <View style={styles.vitalsContainer}>
                        
                            <Image source={require("../assets/images/bloodSugar.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Blood Sugar</Text>
                            <Text style={styles.vitalsValue}>35 <Text style={{fontSize: RF(12),fontWeight: "700"}}>mg/dL</Text></Text>

                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/temperature.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Temperature</Text>
                            <Text style={styles.vitalsValue}>32 <Text style={{fontSize: RF(14),fontWeight: "600"}}> C</Text></Text>

                        </View>

                        </View>

                    </ScrollView>



                    <View style={{width: "100%",flexDirection: "row",alignItems: "center",justifyContent: "space-between",marginBottom: RF(30)}}>

                        <View style={{width: "30%",alignItems: "center"}}>

                            <Text style={{fontSize: RF(20),color: lightTheme.black,fontWeight: "600",marginBottom: RF(20),textAlign: "center",color: lightTheme.black,marginBottom: RF(15)}}>Mood</Text>

                            <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: 10,elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,alignItems: "center",justifyContent: "center"}}>
                                <Image source={require("../assets/images/moodExcited.png")} style={{width: RF(50),height: RF(50),marginBottom: RF(5)}} />
                                <Text style={{fontSize: RF(20),color: lightTheme.black,fontWeight: "600",textAlign: "center",color: lightTheme.black}}>Excited</Text>
                            </View>
                        </View>

                        <View style={{width: "60%",alignItems: "center"}}>

                            <Text style={{fontSize: RF(20),color: lightTheme.black,fontWeight: "600",marginBottom: RF(20),textAlign: "center",color: lightTheme.black,marginBottom: RF(15)}}>Symptoms</Text>

                            <View style={{width: "100%",height: RF(100),backgroundColor: lightTheme.white,borderRadius: 10,elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,alignItems: "center",justifyContent: "center",flexDirection: "row"}}>

                                <View style={{flexDirection: "column",marginRight: RF(15)}}>
                                    <Text style={{fontSize: RF(16),fontWeight: "700",alignSelf: "flex-end"}}>Fatigue</Text>
                                    <Text style={{fontSize: RF(16),fontWeight: "700",alignSelf: "flex-end"}}>Nausea</Text>
                                    <Text style={{fontSize: RF(16),fontWeight: "700",alignSelf: "flex-end"}}>Headache</Text>
                                    
                                    
                                </View>

                                <View style={{flexDirection: "column",alignItems: "center",justifyContent: "center",marginRight: RF(10)}}>
                                    <View style={{width: RF(12),height: RF(12),backgroundColor: "#FFA869",borderRadius: RF(7.5),marginRight: RF(10),marginBottom: RF(4)}} />
                                    <View style={{width: RF(12),height: RF(12),backgroundColor: "#FFE17D",borderRadius: RF(7.5),marginRight: RF(10),marginBottom: RF(4)}} />
                                    <View style={{width: RF(12),height: RF(12),backgroundColor: "#CEFF7D",borderRadius: RF(7.5),marginRight: RF(10),marginBottom: RF(4)}} />
                                    
                                </View>

                                <View style={{flexDirection: "column",alignItems: "left",justifyContent: "center",marginRight: RF(10)}}>
                                    
                                    <Text style={{fontSize: RF(16),color: "#FFA869",fontWeight: "700"}}>Severe</Text>
                                    <Text style={{fontSize: RF(16),color: "#FFE17D",fontWeight: "700"}}>Moderate</Text>
                                    <Text style={{fontSize: RF(16),color: "#CEFF7D",fontWeight: "700"}}>Mild</Text>
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
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: RF(20),
    },

    heading: {
        fontSize: RF(24),
        fontWeight: "600",
        color: lightTheme.black,
        textAlign: "center",
        marginBottom: RF(15),
    },

    subheading: {
        fontSize: RF(18),
        fontWeight: "500",
        color: lightTheme.orange,
        textAlign: "center",
        marginBottom: RF(15),
    },

    medCard: {
        width: "100%",
        height: RF(180),
        backgroundColor: lightTheme.white,
        borderRadius: RF(10),
        elevation: 2,
        shadowColor: "rgba(57,57,57,0.10)",
        shadowOffset: {width: 0,
            height: 4},
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        marginBottom: RF(25),
    },

    appointmentContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: RF(30),
    },

    appointmentCard: {
        width: "48%",
        height: RF(100),
        backgroundColor: lightTheme.white,
        borderRadius: 10,
        elevation: 2,
        shadowColor: "rgba(57,57,57,0.10)",
        shadowOffset: {
                    width: 0,
                    height: 4
                },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        padding: RF(10),
        flexDirection: "row",
        alignItems: "center",
    },

    appointmentDate: {
        width: "30%",
        height: "100%",
        backgroundColor: lightTheme.purple,
        borderRadius: RF(10),
        alignItems: "center",
        justifyContent: "center",
        marginRight: RF(10),
    },

    appointmentTitle: {
        fontSize: RF(16),
        fontWeight: "700",
        color: lightTheme.orange,
        marginBottom: RF(2),
    },

    appointmentDoctor: {
        fontSize: RF(16),
        fontWeight: "700",
        color: lightTheme.black,
        marginBottom: RF(2),
    },

    quest: {
        fontSize: RF(24),
        color: "#656565",
        fontWeight: "600",
        marginBottom: RF(20),
    },

    vitalsContainer: {
        width: RF(90),
        height: RF(120),
        backgroundColor: lightTheme.white,
        borderRadius: RF(10),
        paddingHorizontal: RF(10),
        paddingVertical: RF(15),
        alignItems: "center",
        marginRight: RF(32),
    },

    vitalsImage: {
        width: RF(44),
        height: RF(40),
        marginBottom: RF(5),
    },

    vitalsLabel: {
        marginBottom: RF(5),
        fontSize: RF(12),
        fontWeight: "700",
    },

    vitalsValue: {
        fontSize: RF(28),
        color: lightTheme.orange,
        fontWeight: "800",
    },


    
})
