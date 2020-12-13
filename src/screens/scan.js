import React, { Component, useState, useEffect  } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,  } from 'react-native'
import { mainStyle } from '../styles/main';
import Camera from 'react-native-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Ionicons } from '@expo/vector-icons';
import { Icons } from 'react-native-vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";


export default class scan extends Component {

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

                    <Text style={styles.headerText}>Add Medication</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(65), alignSelf: "center", }}>Scan barcode of the medicine</Text>

                <View style={{marginBottom: RF(60), justifyContent: "center", alignItems: "center", }}>
                    
                    <BarCodeScanner style={{height: RF(380), width: RF(245), }}/>
      
                </View>

                <TouchableOpacity>

                    <Image style={{height: RF(150), width: RF(150), alignSelf: "center", }} source={require('../assets/images/capture.png')}/>
    
                </TouchableOpacity>

                </ScrollView>

            </View>
        )
    }
}

//<Image  style={{height: RF(390), width: RF(255), }} source={require('../assets/images/barcode.png')}/>




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

})
