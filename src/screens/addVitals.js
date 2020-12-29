import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView,  } from 'react-native'
import { mainStyle } from '../styles/main';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Message from '../components/message';

export default class addVitals extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {hearttab: 1, weighttab: 1, bloodsugartab: 1, temperaturetab: 1, bloodpressuretab: 0, respiratorytab: 0, message: false, };
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    onClickHeartTab = n => {
        const { hearttab } = this.state;
        if (n === hearttab) {
            this.setState({hearttab: null })
        }else {
            this.setState({hearttab: n })
        }
    }

    onClickWeightTab = n => {
        const { weighttab } = this.state;
        if (n === weighttab) {
            this.setState({weighttab: null })
        }else {
            this.setState({weighttab: n })
        }
    }

    onClickBloodSugarTab = n => {
        const { bloodsugartab } = this.state;
        if (n === bloodsugartab) {
            this.setState({bloodsugartab: null })
        }else {
            this.setState({bloodsugartab: n })
        }
    }

    onClickTempratureTab = n => {
        const { temperaturetab } = this.state;
        if (n === temperaturetab) {
            this.setState({temperaturetab: null })
        }else {
            this.setState({temperaturetab: n })
        }
    }

    onClickBloodPressureTab = n => {
        const { bloodpressuretab } = this.state;
        if (n === bloodpressuretab) {
            this.setState({bloodpressuretab: null })
        }else {
            this.setState({bloodpressuretab: n })
        }
    }

    onClickRespiratoryTab = n => {
        const { respiratorytab } = this.state;
        if (n === respiratorytab) {
            this.setState({respiratorytab: null })
        }else {
            this.setState({respiratorytab: n })
        }
    }

    showMessage = () => {
        this.setState({ message: true },() => {
            setTimeout(()=>{
                this.setState({ message: false },()=>{
                    this.props.navigation.navigate("Home")
                })
            },1000)
        })  
    }
    hideMessage = () => {
        this.setState({ message: false }) 
    }


    render() {

        const { hearttab, weighttab, bloodsugartab, temperaturetab, bloodpressuretab, respiratorytab,  } = this.state;

        return (

            <>

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

                        <TouchableOpacity onPress={()=>this.onClickHeartTab(1)}>
                                <View style={hearttab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/heartRate.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Heart Rate</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onClickWeightTab(1)}>
                                <View style={weighttab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/weight.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Weight</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onClickBloodSugarTab(1)}>
                                <View style={bloodsugartab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/bloodSugar.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Blood Sugar</Text>

                                </View>
                            </TouchableOpacity>

                    </View>

                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: RF(280), }}>

                        <TouchableOpacity onPress={()=>this.onClickTempratureTab(1)}>
                                <View style={temperaturetab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/temperature.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Temperature</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onClickBloodPressureTab(1)}>
                                <View style={bloodpressuretab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/bloodPressure.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Blood</Text>
                                    <Text style={styles.vitalsLabel}>Pressure</Text>

                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={()=>this.onClickRespiratoryTab(1)}>
                                <View style={respiratorytab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                            
                                    <Image source={require("../assets/images/respiratory.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                    <Text style={styles.vitalsLabel}>Respiratory</Text>
                                    <Text style={styles.vitalsLabel}>Level</Text>

                                </View>
                            </TouchableOpacity>

                    </View>

                    <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                    </View>

                
                    <View style={{paddingBottom: RF(30)}} />

                </ScrollView>

            </View>

            <Message 
                modalVisible={this.state.message}
                message="Changes Saved"
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

     vitalsContainerSelected: {
        width: RF(95),
        height: RF(120),
        backgroundColor: lightTheme.peach,
        borderRadius: RF(20),
        paddingHorizontal: RF(5),
        paddingVertical: RF(10),
        alignItems: "center",
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