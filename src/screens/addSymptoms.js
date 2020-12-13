import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView,  } from 'react-native'
import { mainStyle } from '../styles/main';
import {CheckBox} from "native-base";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";

export default class addSymptoms extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    state={
        selectedLang:0
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

                    <Text style={styles.headerText}>Add Symptoms</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{fontSize: RF(20), fontWeight: "500", marginBottom: RF(20), }}>Select a category to view symptoms</Text>

                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{marginBottom: RF(30)}}>
                        
                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/mostCommon.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Most</Text>
                                <Text style={styles.vitalsLabel}>Common</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/cardio.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Cardio/</Text>
                                <Text style={styles.vitalsLabel}>Circulatory</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/gastro.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Gastro-</Text>
                                <Text style={styles.vitalsLabel}>Intestinal</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/moodAttention.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Mood/</Text>
                                <Text style={styles.vitalsLabel}>Attention</Text>


                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/oralMouth.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Oral/ Mouth</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/pain.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Pain</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/respiratory.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Respiratory</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/perception.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Visual/</Text>
                                <Text style={styles.vitalsLabel}>Perception</Text>

                            </View>
                        </TouchableOpacity>

                </ScrollView>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/diarrhea.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Diarrhea</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/dizziness.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Dizziness</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:3})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/fatigue.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black", }}>Fatigue</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:4})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/nausea.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700",color:this.state.selectedLang===4?"#FA4A0C":"black", }}>Nausea</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:5})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===5} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:5})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/itching.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===5?"#FA4A0C":"black" }}>Itching</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:6})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===6} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:6})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/anxiety.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===6?"#FA4A0C":"black",}}>Anxiety</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:7})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===7} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:7})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/headache.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===7?"#FA4A0C":"black", }}>Headache</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:8})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===8} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:8})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/coughing.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===8?"#FA4A0C":"black",}}>Coughing</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:9})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(50), }}>

                        <CheckBox checked={this.state.selectedLang===9} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:9})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/vomiting.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===9?"#FA4A0C":"black",}}>Vomiting</Text> 

                    </View>

                </TouchableOpacity>

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
        paddingVertical: RF(20),
        alignItems: "center",
        marginRight: RF(10),
    },

    vitalsImage: {
        
        height: RF(50),
        marginBottom: RF(15),

    },

    vitalsLabel: {
        fontSize: RF(15),
        fontWeight: "700",
        color: lightTheme.orange,
        alignSelf: "center",
    },

    symptomsIcon: {
        width: RF(25),
        height: RF(25),
        marginRight: RF(15),
        paddingHorizontal: RF(50),

    },

    item:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:20,
        padding:10,
        marginBottom:10,
        flexDirection:"row",
      },
      checkBoxTxt:{
        marginLeft:20
      },

})
