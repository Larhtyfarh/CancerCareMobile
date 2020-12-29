import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView, TextInput, } from 'react-native'
import { mainStyle } from '../styles/main';
import {Camera} from 'expo-camera';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Message from '../components/message';
import TimePicker from 'react-native-simple-time-picker';

export default class addMedication extends Component {

    
    constructor(props) {
        super(props);
        this.state = {clicks: 0, show: true, drugtab: 1, colortab: 1, daytab: 0, message: false, mon: 0, tues: 0, wed: 0, thur: 0, fri: 0, sat: 0, sun: 0,};
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

        Increment= () => {
        this.setState({ clicks: this.state.clicks + 1 });
        }
        Decrement = () => {
        this.setState({ clicks: this.state.clicks - 1 });
        }

        handleBackButtonClick() {
            this.props.navigation.goBack(null);
            return true;
        }
    
        onToggleDrugTab = n => {
            this.setState({ drugtab: n })
        }

        onToggleColorTab = n => {
            this.setState({ colortab: n })
        }
    
        onToggleDayTab = n => {
            this.setState({ daytab: n })
        }

        onClickMon = n => {
            const { mon } = this.state;
            if (n === mon) {
                this.setState({mon: null })
            }else {
                this.setState({mon: n })
            }
        }

        onClickTues = n => {
            const { tues } = this.state;
            if (n === tues) {
                this.setState({tues: null })
            }else {
                this.setState({tues: n })
            }
        }

        onClickWed = n => {
            const { wed } = this.state;
            if (n === wed) {
                this.setState({wed: null })
            }else {
                this.setState({wed: n })
            }
        }

        onClickThur = n => {
            const { thur } = this.state;
            if (n === thur) {
                this.setState({thur: null })
            }else {
                this.setState({thur: n })
            }
        }

        onClickFri = n => {
            const { fri } = this.state;
            if (n === fri) {
                this.setState({fri: null })
            }else {
                this.setState({fri: n })
            }
        }

        onClickSat = n => {
            const { sat } = this.state;
            if (n === sat) {
                this.setState({sat: null })
            }else {
                this.setState({sat: n })
            }
        }

        onClickSun = n => {
            const { sun } = this.state;
            if (n === sun) {
                this.setState({sun: null })
            }else {
                this.setState({sun: n })
            }
        }

        showMessage = () => {
            this.setState({ message: true },() => {
                setTimeout(()=>{
                    this.setState({ message: false },()=>{
                        this.props.navigation.navigate("AllMedication")
                    })
                },1000)
            })  
        }
        hideMessage = () => {
            this.setState({ message: false }) 
        }
        

    render() {

        const { drugtab, colortab, daytab, mon, tues, wed, thur, fri, sat, sun, } = this.state;
        
        return (

            <>

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
                <View style={{flexDirection: "row", justifyContent: "space-between", }}>

                    <View style={{width: "80%", height: RF(50),alignItems: "center", flexDirection: "row", marginBottom:RF(20), borderBottomWidth: RF(2), }}>

                        <TextInput style={{width: RF(300), height: RF(50), fontSize: RF(18), color: lightTheme.grey,borderColor: "#f2f2f2", borderWidth: 1 }} clearButtonMode="while-editing" placeholder="Type Medication name or scan barcode" />

                    </View>

                    <View style={{width: "30%", alignItems: "center", marginRight: RF(20),  }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Scan")}>
                        <Image style={{width: RF(30), height: RF(30), }} source={require('../assets/icons/actions/scan.png')}/>
                        <Text style={{fontSize: RF(13), color: lightTheme.orange,fontWeight: "700",  }}>Scan</Text>
                    </TouchableOpacity>
                    </View>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Medicine Type</Text>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                <View style={{paddingHorizontal: RF(30), flexDirection: "row", marginBottom: RF(20)  }}>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(1)}>

                        <Image style={drugtab === 1? {width: RF(40), height: RF(40), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple, } : 
                                        {width: RF(40), height: RF(40),borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/capsuleGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(2)}>
                        <Image style={drugtab === 2? {width: RF(40), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,} : 
                                        {width: RF(40), height: RF(40), marginRight: RF(15),borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/pillGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(3)}>
                        <Image style={drugtab === 3? {width: RF(40), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/tabletlineGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(4)}>
                        <Image style={drugtab === 4? {width: RF(40), height: RF(40), marginRight: RF(15),  borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/tabletGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(5)}>
                        <Image style={drugtab === 5? {width: RF(24), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(24), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/dropGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(6)}>
                        <Image style={ drugtab === 6? {width: RF(40), height: RF(40), marginRight: RF(15),  borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/injectionGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(7)}>    
                        <Image style={ drugtab === 7? {width: RF(40), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/eyedropGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(8)}>    
                        <Image style={ drugtab === 8? {width: RF(18), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(18), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/syrupGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(9)}>    
                        <Image style={ drugtab === 9? {width: RF(40), height: RF(40), marginRight: RF(15), borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/bandaidGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(10)}> 
                        <Image style={drugtab === 10? {width: RF(40), height: RF(40), marginRight: RF(15),  borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(40), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/creamGrey.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onToggleDrugTab(11)}>    
                        <Image style={drugtab === 11? {width: RF(25), height: RF(40), marginRight: RF(15),  borderWidth: RF(2), borderRadius: RF(20), borderColor: lightTheme.purple,}: 
                                        {width: RF(25), height: RF(40), marginRight: RF(15), borderRadius: RF(20), borderColor: lightTheme.white, }} source={require('../assets/images/ointmentGrey.png')}/>
                    </TouchableOpacity>
                </View>

                </ScrollView>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ }}>

                <View style={{paddingHorizontal: RF(75), flexDirection: "row", marginBottom: RF(25), }}>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/greyColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/blueColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/aquaColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/yellowColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/pinkColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/darkblueColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/brownColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/greenColor.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{width: RF(30), height: RF(30), marginRight: RF(15), }} source={require('../assets/images/peachColor.png')}/>
                    </TouchableOpacity>

                </View>

                </ScrollView>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Dosage</Text>

                <View style={{width: "40%", height: RF(50), backgroundColor: lightTheme.white, flexDirection: "row", justifyContent: "space-between", padding: RF(10) ,borderRadius: RF(20),marginBottom: RF(20),elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65, marginBottom: RF(25),}}>

                    <TouchableOpacity onPress={this.state.clicks > 0 ? this.Decrement : null }>
                        <View style={{alignItems: "center", justifyContent: "center", backgroundColor: lightTheme.peach, height: RF(30), width: RF(30), borderRadius: RF(20), }}>
                            <Image style={{width: RF(18), height: RF(2), }} source={require('../assets/icons/actions/minus.png')}/>
                        </View>

                    </TouchableOpacity>

                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: lightTheme.white, height: RF(30), width: RF(30), borderRadius: RF(20), }}>
                        <Text style={{fontSize: RF(24), fontWeight: "600", }}>{this.state.clicks}</Text>

                    </View>


                    <TouchableOpacity onPress={this.Increment}>
                        <View style={{alignItems: "center", justifyContent: "center", backgroundColor: lightTheme.peach, height: RF(30), width: RF(30), borderRadius: RF(20), }}>
                        <Image style={{width: RF(18), height: RF(18), }} source={require('../assets/icons/actions/add.png')}/>

                        </View>

                    </TouchableOpacity>


                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(10), }}>Frequency</Text>

                <Text style={{fontSize: RF(15), fontWeight: "500", marginBottom: RF(15), color: lightTheme.orange,  }}>Select the days you want to use this medication</Text>

                <View style={{paddingHorizontal: RF(10), flexDirection: "row", marginBottom: RF(20), }}>

                    <TouchableOpacity onPress={()=>this.onClickMon(1)}>
                        <View style={mon === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                                    {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                        
                            <Text style={mon === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} : 
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"} }>M</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickTues(1)}>
                        <View style={tues === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={tues === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>T</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickWed(1)}>
                        <View style={wed === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={wed === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>W</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickThur(1)}>
                        <View style={thur === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={thur === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>T</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickFri(1)}>
                        <View style={fri === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={fri === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>F</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickSat(1)}>
                        <View style={sat === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={sat === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onClickSun(1)}>
                        <View style={sun === 1? {width: RF(40),height: RF(40),backgroundColor: lightTheme.purple,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), } :
                                        {width: RF(40),height: RF(40),backgroundColor: lightTheme.white,borderRadius: RF(30),alignItems: "center",justifyContent: "center",marginRight: RF(10), paddingHorizontal: RF(10), }}>
                            
                            <Text style={sun === 1? {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.white,fontWeight: "600"} :
                                        {marginBottom: RF(5),fontSize: RF(22),color: lightTheme.grey,fontWeight: "600"}}>S</Text>
                        </View>
                    </TouchableOpacity>

                </View>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(10), }}>Reminder</Text>

                <TouchableOpacity>
                    <View style={{alignItems: "center", justifyContent: "center", backgroundColor: lightTheme.peach, height: RF(30), width: RF(30), borderRadius: RF(20), marginBottom: RF(70), }}>
                        <Image style={{width: RF(18), height: RF(18), }} source={require('../assets/icons/actions/add.png')}/>
                
                    </View>
                </TouchableOpacity>

                

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="ADD MEDICATION" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>




                </ScrollView>

            </View>

            <Message 
                modalVisible={this.state.message}
                message="Added Successfully"
            />
            </>
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




