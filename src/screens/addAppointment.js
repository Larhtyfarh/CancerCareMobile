import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView,  } from 'react-native'
import { mainStyle } from '../styles/main';
import {Camera} from 'expo-camera'
import { Ionicons } from '@expo/vector-icons';
import { Icons } from 'react-native-vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class addAppointment extends Component {

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

                <View style={styles.header}>

                    <View>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>

                            <Image style={styles.headerButton} source={require('../assets/icons/actions/back.png')}/>

                        </TouchableOpacity>

                    </View> 

                    <Text style={styles.headerText}>Add Appointment</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Title</Text>
                <View style={{borderBottomWidth: RF(1), marginBottom: RF(20),}}>
                        <Text style={{fontSize: RF(18), color: lightTheme.grey, marginBottom: RF(5), }}>Type Appointment name</Text>
                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20),}}>Caregiver</Text>
                <View style={{borderBottomWidth: RF(1), marginBottom: RF(20), }}>
                        <Text style={{fontSize: RF(18), color: lightTheme.grey, marginBottom: RF(5), }}>Type Caregiver name or select</Text>
                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20),}}>Select Date</Text>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.purple ,borderRadius: RF(10),justifyContent: "center" , alignItems: "center",marginRight: RF(20), marginBottom: RF(15), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", color: lightTheme.white}}>JAN</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>FEB</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>MAR</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>APR</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>MAY</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>JUN</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>JUL</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>AUG</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>SEP</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>OCT</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>NOV</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>DEC</Text>
                            
                    </View>

                </ScrollView>

                <View style={{height: RF(80), marginBottom: RF(15)}}>

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

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),justifyContent: "center" , alignItems: "center",marginRight: RF(20), marginBottom: RF(15), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>07:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>07:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>08:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>08:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.purple ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", color: lightTheme.white, }}>09:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600",   }}>10:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>10:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>11:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>11:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>12:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>12:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>01:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>01:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>02:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>02:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>03:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>03:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>04:00</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>04:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>05:00</Text>
                            
                    </View>
                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>05:30</Text>
                            
                    </View>

                    <View style={{width: RF(50),height: RF(30),backgroundColor: lightTheme.white ,borderRadius: RF(10),alignItems: "center", justifyContent: "center", marginRight: RF(20), }}>
                        
                        <Text style={{fontSize: RF(20),fontWeight: "600", }}>06:00</Text>
                            
                    </View>

                </ScrollView>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20),}}>Type</Text>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{marginBottom: RF(30)}}>
                        
                    <View style={{width: "100%", flexDirection: "row"}}>
                        <View style={styles.vitalsContainer}>
                        
                            <Image source={require("../assets/images/officeVisit.png")} style={styles.vitalsImage}/>
                            <Text style={styles.vitalsLabel}>Office Visit</Text>

                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/test.png")} style={styles.vitalsImage}/>
                            <Text style={styles.vitalsLabel}>Test</Text>
                            
                        </View>

                        <View style={styles.vitalsContainer}>
                        
                            <Image source={require("../assets/images/procedure.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Procedure</Text>
                            
                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/chemotherapy.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Chemoterapy</Text>
                            
                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/radiation.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Radiation</Text>
                            
                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/surgery.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Surgery</Text>
                            
                        </View>

                        <View style={styles.vitalsContainer}>

                            <Image source={require("../assets/images/others.png")} style={styles.vitalsImage} resizeMode="contain"/>
                            <Text style={styles.vitalsLabel}>Others</Text>
                            
                        </View>

                    </View>

                </ScrollView>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Location</Text>
                <View style={{borderBottomWidth: RF(1), marginBottom: RF(20),}}>
                        <Text style={{fontSize: RF(18), color: lightTheme.grey, marginBottom: RF(5), }}>Type Appointment location</Text>
                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20),}}>Notes</Text>

                <View style={{height: RF(165), flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom: RF(10),  }}>

                        <Image style={{height: RF(50), width: RF(55), marginBottom:RF(15)}} source={require('../assets/images/notes.png')}/>
                        <Text style={{fontSize: RF(20), color: lightTheme.grey,  }}>Tap here to add a note</Text>

                </View>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="ADD APPOINTMENT" color= "#F2f2f2" />

                </View>

                <View style={{paddingBottom: RF(30)}} />

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
        marginBottom: RF(30), 
        alignItems: "center",
    },

    headerButton: { 
        height: RF(30), 
        width: RF(30), 
    },

    headerText: {
        fontSize: RF(22),
        fontWeight: "700",
        color: lightTheme.orange, 
        flex:1, 
        textAlign: "center",
     }, 

     vitalsContainer: {
        width: RF(95),
        height: RF(120),
        backgroundColor: lightTheme.white,
        borderRadius: RF(20),
        paddingHorizontal: RF(5),
        paddingVertical: RF(25),
        alignItems: "center",
        marginRight: RF(10),
    },

    vitalsImage: {
        width: RF(55),
        height: RF(50),
        marginBottom: RF(15),
    },

    vitalsLabel: {
        marginBottom: RF(5),
        fontSize: RF(15),
        fontWeight: "700",
        color: lightTheme.orange,
    },

})
