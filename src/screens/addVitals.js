import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView,  } from 'react-native'
import { mainStyle } from '../styles/main';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class addVitals extends Component {

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

                    <Text style={styles.headerText}>Add Vitals</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Select vitals to track</Text>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: RF(25)}}>

                        <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/heartRate.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Heart Rate</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/weight.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Weight</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/bloodSugar.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Blood Sugar</Text>

                                </View>
                            </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: RF(280), }}>

                        <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/temperature.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Temperature</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/bloodPressure.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Blood</Text>
                                    <Text style={styles.vitalsLabel}>Pressure</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/respiratory.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Respiratory</Text>
                                    <Text style={styles.vitalsLabel}>Level</Text>

                                </View>
                            </TouchableOpacity>

                    </View>

                    <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" />

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
        paddingVertical: RF(10),
        alignItems: "center",
    },

    vitalsImage: {
        
        height: RF(60),
        marginBottom: RF(15),

    },

    vitalsLabel: {
        fontSize: RF(15),
        fontWeight: "700",
        color: lightTheme.orange,
    },

})