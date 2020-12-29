import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Button, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView,  } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons  } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Message from '../components/message';
import Slider from '@react-native-community/slider';

export default class Log extends Component {
    state = {
        mood: 0,
        symptom: 1,
        tab: null,
        vittab: null,
        heartrange: 0,
        weightrange: 0,
        bloodrange: 0,
        temprange: 0,
        message: false
    }
    onMoodChange = value => {
        this.setState({ mood: value })
    }
    onTabChange = n => {
        const { tab } = this.state;
        if (n === tab) {
            this.setState({ vittab: null,tab: null })
        }else {
            this.setState({ tab: n,vittab: null })
        }
    }
    onVitalsTabChange = n => {
        const { vittab } = this.state;
        if (n === vittab) {
            this.setState({ vittab: null,tab: null })
        }else {
            this.setState({ vittab: n,tab: null })
        }
    }
    onSymptomChange = number => {
        this.setState({ symptom: number })
    }

    onHeartRangeChange = value => {
        this.setState({ heartrange: value.toFixed(0) })
    }
    onWeightRangeChange = value => {
        this.setState({ weightrange: value.toFixed(0) })
    }
    onBloodRangeChange = value => {
        this.setState({ bloodrange: value.toFixed(0) })
    }
    onTempRangeChange = value => {
        this.setState({ temprange: value.toFixed(0) })
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
        const { mood,tab,symptom,vittab,heartrange, weightrange, bloodrange, temprange, } = this.state;
        return (

            <>

            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Log</Text>

                </View>

                <KeyboardAvoidingView
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={{flex: 1}}
                >

                <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(5)}}>Mood</Text>
                
                
                <View style={{width: "100%", alignItems: "center"}}>
                    
                    {mood === 0 ? <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodUnhappy.png')}/> : null }
                    {mood > 0 && mood <= 1 ? <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodSad.png')}/> : null }
                    {mood > 1 && mood <= 2 ? <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodNeutral.png')}/> : null }
                    {mood > 2 && mood < 4 ? <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodHappy.png')}/> : null }
                    {mood === 4 ? <Image style={{width: RF(50), height: RF(50), marginBottom: RF(15)}} source={require('../assets/images/moodExcited.png')}/> : null }

                </View>

                <View style={{marginBottom: RF(25)}}>
                    <Slider
                        style={{width: "100%", height: RF(40), }}
                        minimumValue={0}
                        maximumValue={4}
                        value={mood}
                        onValueChange={value => this.onMoodChange(value)}
                        minimumTrackTintColor="#49A663"
                        maximumTrackTintColor="#c4c4c4"
                    />
                </View>

                <View style={{flexDirection: "row", marginBottom: RF(15), alignItems: "center", }}>
                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginRight: RF(15)}}>Symptoms</Text>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddSymptoms")}}>
                        <Ionicons name="md-add" size={RF(30)} color="#FA4A0C" />
                    </TouchableOpacity>
                </View>

                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between",}}>

                    <TouchableOpacity onPress={()=>this.onTabChange(1)} style={tab === 1 ? Style.boxActive : Style.box}>
                        <Image style={{height: RF(40), width: RF(35), marginBottom:RF(5)}} source={require('../assets/images/fatigue.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Fatigue</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onTabChange(2)} style={tab === 2 ? Style.boxActive : Style.box}>
                        <Image style={{height: RF(40), width: RF(25), marginBottom:RF(5)}} source={require('../assets/images/nausea.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Nausea</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onTabChange(3)} style={tab === 3 ? Style.boxActive : Style.box}>
                        <Image style={{height: RF(40), width: RF(35), marginBottom:RF(5)}} source={require('../assets/images/headache.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Headache</Text>
                    </TouchableOpacity>
                </View>

                {tab !== null ? 
                <View style={{width: "100%",height: RF(106),backgroundColor: "#FFF",marginBottom: RF(25),borderBottomLeftRadius: RF(10),borderBottomRightRadius: RF(10),alignItems: "center",justifyContent: "center"}}> 
                    {symptom === 1 ? 
                        <View style={{flexDirection: "row",alignItems: "center"}}>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(1)}>
                                <View style={{width: RF(20),height: RF(40),backgroundColor: "#CEFF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(2)}>
                                <View style={{width: RF(25),height: RF(50),backgroundColor: "#C4C4C4" ,borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(3)}>
                                <View style={{width: RF(30),height: RF(60),backgroundColor: "#C4C4C4",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(4)}>
                                <View style={{width: RF(35),height: RF(70),backgroundColor: "#C4C4C4",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(5)}>
                                <View style={{width: RF(40),height: RF(80),backgroundColor: "#C4C4C4",borderRadius: RF(20)}} />
                            </TouchableOpacity>
                        </View> : null
                    }

                    {symptom === 2 ? 
                        <View style={{flexDirection: "row",alignItems: "center"}}>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(1)}>
                                <View style={{width: RF(20),height: RF(40),backgroundColor: "#CEFF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(2)}>
                                <View style={{width: RF(25),height: RF(50),backgroundColor: "#F5FF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(3)}>
                                <View style={{width: RF(30),height: RF(60),backgroundColor: "#C4C4C4",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(4)}>
                                <View style={{width: RF(35),height: RF(70),backgroundColor: "#C4C4C4",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(5)}>
                                <View style={{width: RF(40),height: RF(80),backgroundColor: "#C4C4C4",borderRadius: RF(20)}} />
                            </TouchableOpacity>
                        </View> : null
                    }

                    {symptom === 3 ? 
                        <View style={{flexDirection: "row",alignItems: "center"}}>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(1)}>
                                <View style={{width: RF(20),height: RF(40),backgroundColor: "#CEFF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(2)}>
                                <View style={{width: RF(25),height: RF(50),backgroundColor: "#F5FF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(3)}>
                                <View style={{width: RF(30),height: RF(60),backgroundColor: "#FFE17D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(4)}>
                                <View style={{width: RF(35),height: RF(70),backgroundColor: "#C4C4C4",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(5)}>
                                <View style={{width: RF(40),height: RF(80),backgroundColor: "#C4C4C4",borderRadius: RF(20)}} />
                            </TouchableOpacity>
                        </View> : null
                    }

                    {symptom === 4 ? 
                        <View style={{flexDirection: "row",alignItems: "center"}}>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(1)}>
                                <View style={{width: RF(20),height: RF(40),backgroundColor: "#CEFF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(2)}>
                                <View style={{width: RF(25),height: RF(50),backgroundColor: "#F5FF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(3)}>
                                <View style={{width: RF(30),height: RF(60),backgroundColor: "#FFE17D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(4)}>
                                <View style={{width: RF(35),height: RF(70),backgroundColor: "#FFCB7D",borderRadius: RF(20),marginRight: RF(15)}} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.onSymptomChange(5)}>
                                <View style={{width: RF(40),height: RF(80),backgroundColor: "#C4C4C4",borderRadius: RF(20)}} />
                            </TouchableOpacity>
                        </View> : null
                    }

                    {symptom === 5 ? 
                    <View style={{flexDirection: "row",alignItems: "center"}}>
                        <TouchableOpacity onPress={()=>this.onSymptomChange(1)}>
                            <View style={{width: RF(20),height: RF(40),backgroundColor: "#CEFF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSymptomChange(2)}>
                            <View style={{width: RF(25),height: RF(50),backgroundColor: "#F5FF7D",borderRadius: RF(20),marginRight: RF(15)}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSymptomChange(3)}>
                            <View style={{width: RF(30),height: RF(60),backgroundColor: "#FFE17D",borderRadius: RF(20),marginRight: RF(15)}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSymptomChange(4)}>
                            <View style={{width: RF(35),height: RF(70),backgroundColor: "#FFCB7D",borderRadius: RF(20),marginRight: RF(15)}} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.onSymptomChange(5)}>
                            <View style={{width: RF(40),height: RF(80),backgroundColor: "#FFA869",borderRadius: RF(20)}} />
                        </TouchableOpacity>
                    </View> : null
                    }
                </View> : null }




                <View style={{flexDirection: "row", marginBottom: RF(15), alignItems: "center", marginTop: RF(25), }}>
                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginRight: RF(15)}}>Vitals</Text>

                    <TouchableOpacity onPress={() => {this.props.navigation.navigate("AddVitals")}}>
                        <Ionicons name="md-add" size={RF(30)} color="#FA4A0C" />
                    </TouchableOpacity>
                </View>




                <View style={{width: "100%", flexDirection: "row", justifyContent: "space-evenly", }}>

                    <TouchableOpacity onPress={()=>this.onVitalsTabChange(1)} style={vittab === 1 ? Style.vitalBoxActive : Style.vitalBox}>
                            <Image style={{height: RF(40), width: RF(44), marginBottom: RF(10)}} source={require('../assets/images/heartRate.png')}/>
                            <Text style={{fontSize: RF(15), fontWeight: "600", }}>Heart Rate</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onVitalsTabChange(2)} style={vittab === 2 ? Style.vitalBoxActive : Style.vitalBox}>
                        <Image style={{height: RF(40), width: RF(40), marginBottom: RF(10)}} source={require('../assets/images/weight.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Weight</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onVitalsTabChange(3)} style={vittab === 3 ? Style.vitalBoxActive : Style.vitalBox}>
                        <Image style={{height: RF(40), width: RF(23), marginBottom: RF(10)}} source={require('../assets/images/bloodSugar.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Blood Sugar</Text>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>this.onVitalsTabChange(4)} style={vittab === 4 ? Style.vitalBoxActive : Style.vitalBox}>
                        <Image style={{height: RF(40), width: RF(18), marginBottom: RF(10)}} source={require('../assets/images/temperature.png')}/>
                        <Text style={{fontSize: RF(15), fontWeight: "600", }}>Temperature</Text>

                    </TouchableOpacity>

                </View>


                {vittab !== null ? 
                <View style={{width: "100%",height: RF(106),backgroundColor: "#FFF",marginBottom: RF(25),borderBottomLeftRadius: RF(10),borderBottomRightRadius: RF(10),alignItems: "center",justifyContent: "center"}}> 
                    { vittab === 1 ?
                        <View style={{width: "100%", marginBottom: RF(5), alignItems: "center", }}>
                        <Text style={{fontSize: RF(34), color: lightTheme.orange, fontWeight: "700", }}>
                            {this.state.heartrange}        
                        <Text style={{fontSize: RF(17),  }}>
                            BPM
                        </Text>
                        </Text> 
                    
                        <Slider
                            style={{width: "80%", height: RF(40), }}
                            minimumValue={0}
                            maximumValue={100}
                            value={heartrange}
                            onValueChange={value => this.onHeartRangeChange(value)}
                            minimumTrackTintColor="#49A663"
                            maximumTrackTintColor="#c4c4c4" /> 
                        </View> : null 
                    }

                    { vittab === 2 ?
                        <View style={{width: "100%", marginBottom: RF(5), alignItems: "center", }}>
                        <Text style={{fontSize: RF(34), color: lightTheme.orange, fontWeight: "700", }}>
                        {this.state.weightrange}  
                        <Text style={{fontSize: RF(17),  }}>
                            kg
                        </Text>
                        </Text> 
                    
                        <Slider
                            style={{width: "80%", height: RF(40), }}
                            minimumValue={0}
                            maximumValue={100}
                            value={weightrange}
                            onValueChange={value => this.onWeightRangeChange(value)}
                            minimumTrackTintColor="#49A663"
                            maximumTrackTintColor="#c4c4c4"/> 
                        </View>: null
                    }

                    { vittab === 3 ?
                        <View style={{width: "100%",marginBottom: RF(5), alignItems: "center", }}>
                        <Text style={{fontSize: RF(34), color: lightTheme.orange, fontWeight: "700", }}>
                        {this.state.bloodrange}  
                        <Text style={{fontSize: RF(17),  }}>
                            mg/dL
                        </Text>
                        </Text> 
                    
                        <Slider
                            style={{width: "80%", height: RF(40), }}
                            minimumValue={0}
                            maximumValue={100}
                            value={bloodrange}
                            onValueChange={value => this.onBloodRangeChange(value)}
                            minimumTrackTintColor="#49A663"
                            maximumTrackTintColor="#c4c4c4"/> 
                        </View> : null
                    }

                    { vittab === 4 ?
                        <View style={{width: "100%", marginBottom: RF(5), alignItems: "center", }}>
                        <Text style={{fontSize: RF(34), color: lightTheme.orange, fontWeight: "700", }}>
                        {this.state.temprange}  
                        <Text style={{fontSize: RF(17),  }}>
                            C
                        </Text>
                        </Text> 
                    
                        <Slider
                            style={{width: "80%", height: RF(40), }}
                            minimumValue={0}
                            maximumValue={100}
                            value={temprange}
                            onValueChange={value => this.onTempRangeChange(value)}
                            minimumTrackTintColor="#49A663"
                            maximumTrackTintColor="#c4c4c4"/> 
                        </View> : null
                    }
                </View> : null }




                <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.black, marginBottom: RF(15), marginTop: RF(25),}}>Notes</Text>

        
                <View style={{height: RF(165), flexDirection: "column", alignItems: "center", justifyContent: "center",  }}>

                        <Image style={{height: RF(50), width: RF(55), marginBottom:RF(15)}} source={require('../assets/images/notes.png')}/>
                        <TextInput style={{fontSize: RF(20), color: lightTheme.grey, borderColor: "#f2f2f2", borderWidth: 1, }} clearButtonMode="while-editing" placeholder="Tap here to add a note" />

                </View>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center" }}>

                    <Button title="SAVE LOG" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                <View style={{paddingBottom: RF(10)}} />
            </ScrollView>  

            </KeyboardAvoidingView>


            </View>


            <Message 
                modalVisible={this.state.message}
                message="Logged Successfully"
            />
            </>
        )
    }
}

export const Style = StyleSheet.create({
    box: {
        flexDirection: "column", 
        alignItems: "center",
        padding: RF(10)
    },
    boxActive: {
        flexDirection: "column", 
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: RF(10),
        borderTopLeftRadius: RF(10),
        borderTopRightRadius: RF(10)
    },
    vitalBox: {
        flexDirection: "column", 
        alignItems: "center",
    },
    vitalBoxActive: {
        flexDirection: "column", 
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: RF(10),
        borderTopLeftRadius: RF(10),
        borderTopRightRadius: RF(10)
    },
    
  

})
