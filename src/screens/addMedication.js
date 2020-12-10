import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView, } from 'react-native'
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { Icons } from 'react-native-vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class addMedication extends Component {


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

                <Text style={{fontSize: RF(20), fontWeight: "500",}}>Name</Text>
                <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end",  marginBottom: RF(20), }}>

                    <View style={{}}>
                        <Text style={{fontSize: RF(15), color: lightTheme.grey, }}>Type medication name or scan a barcode                     </Text>
                    </View>

                    <View style={{alignItems: "center", paddingRight:RF(20), }}>
                        <Image style={{width: RF(30), height: RF(30), }} source={require('../assets/icons/actions/scan.png')}/>
                        <Text style={{fontSize: RF(13), color: lightTheme.orange,fontWeight: "700",  }}>Scan</Text>
                    </View>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Medicine Type</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                <View style={{paddingHorizontal: RF(30), flexDirection: "row", marginBottom: RF(20)  }}>

                    <Image style={{width: RF(40), height: RF(40), }} source={require('../assets/images/capsuleGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/pillGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/tabletlineGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/tabletGrey.png')}/>
                    <Image style={{width: RF(24), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/dropGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/injectionGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/eyedropGrey.png')}/>
                    <Image style={{width: RF(18), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/syrupGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/bandaidGrey.png')}/>
                    <Image style={{width: RF(40), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/creamGrey.png')}/>
                    <Image style={{width: RF(25), height: RF(40), marginRight: RF(15), }} source={require('../assets/images/ointmentGrey.png')}/>

                </View>

                </ScrollView>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                <View style={{paddingHorizontal: RF(75), flexDirection: "row", marginBottom: RF(25), }}>

                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/greyColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/blueColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/aquaColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/yellowColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/pinkColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/darkblueColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/brownColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/greenColor.png')}/>
                    <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/peachColor.png')}/>

                </View>

                </ScrollView>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Dosage</Text>

                <View style={{width: "40%", height: RF(50), backgroundColor: lightTheme.white, flexDirection: "row", alignItems: "center", padding: RF(10) ,borderRadius: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, marginBottom: RF(25),}}>

                    <TouchableOpacity>
                            <Ionicons name="ios-add" size={RF(35)} color="#FA4A0C"/>

                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={{alignItems: "center", justifyContent: "center", backgroundColor: lightTheme.peach, height: RF(30), width: RF(30), borderRadius: RF(20), }}>
                            <Ionicons name="ios-add" size={RF(35)} color="#FA4A0C"/>

                        </View>

                    </TouchableOpacity>


                </View>


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

})




