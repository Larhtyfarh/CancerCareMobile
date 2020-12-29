import React, { Component } from 'react'
import { Text, View, StyleSheet, Button, Image, AppRegistry, TouchableOpacity, ScrollView,  } from 'react-native'
import { mainStyle } from '../styles/main';
import {CheckBox} from "native-base";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Message from '../components/message';

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
        selectedLang:0,
        tab: 1,
        message: false,
      }

      onToggleTab = n => {
        this.setState({ tab: n })
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

        const {tab, } = this.state;

        return (

            <>

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
                        
                        <TouchableOpacity onPress={()=>this.onToggleTab(1)}>
                            <View style={tab === 1? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/mostCommon.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Most</Text>
                                <Text style={styles.vitalsLabel}>Common</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(2)}>
                            <View style={tab === 2? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/cardio.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Cardio/</Text>
                                <Text style={styles.vitalsLabel}>Circulatory</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(3)}>
                            <View style={tab === 3? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/gastro.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Gastro-</Text>
                                <Text style={styles.vitalsLabel}>Intestinal</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(4)}>
                            <View style={tab === 4? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/moodAttention.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Mood/</Text>
                                <Text style={styles.vitalsLabel}>Attention</Text>


                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(5)}>
                            <View style={tab === 5? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/oralMouth.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Oral/ Mouth</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(6)}>
                            <View style={tab === 6? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/pain.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Pain</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(7)}>
                            <View style={tab === 7? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/respiratory.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Respiratory</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>this.onToggleTab(8)}>
                            <View style={tab === 8? styles.vitalsContainerSelected : styles.vitalsContainer}>
                        
                                <Image source={require("../assets/images/perception.png")} style={styles.vitalsImage} resizeMode="contain"/>
                                <Text style={styles.vitalsLabel}>Visual/</Text>
                                <Text style={styles.vitalsLabel}>Perception</Text>

                            </View>
                        </TouchableOpacity>

                </ScrollView>

                {tab === 1 ? 
                <View>
                
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

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                </View> : null

                }

                {tab === 2 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/racingHeart.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Racing heart</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/swelling.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Swelling</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(340) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }


                {tab === 3 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/constipation.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Constipation</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/decreasedAppetite.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Decreased appetite</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/heartBurn.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black",  }}>Heart burn</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/tasteChanges.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===4?"#FA4A0C":"black",}}>Taste changes</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(250) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }


                {tab === 4 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/anxiety.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Anxiety</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/concentrationDifficulty.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Concentration difficulty</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/discouragedMood.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black",  }}>Discouraged Mood</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/memoryLoss.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===4?"#FA4A0C":"black",}}>Memory Loss</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(250) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }


                {tab === 5 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/dryMouth.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Dry Mouth</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/mouthThroatSores.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Mouth/Throat Sores</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/swallowingDifficulty.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black",  }}>Swallowing difficulty</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/voiceChanges.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===4?"#FA4A0C":"black",}}>Voice Changes</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(250) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }

                {tab === 6 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/general.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>General</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/diarrhea.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Abdominal/Belly pain</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/jointPain.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black",  }}>Joint Pain</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/musclePain.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===4?"#FA4A0C":"black",}}>Muscle Pain</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(250) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }

                {tab === 7 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/shortnessOfBreath.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Shortness of breath</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/wheezing.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>wheezing</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(340) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>

                </View>

                

                </View> : null

                }


                {tab === 8 ? 
                <View>
                
                <TouchableOpacity onPress={()=>this.setState({selectedLang:1})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===1} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/blurredVision.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===1?"#FA4A0C":"black",  }}>Blurred Vision</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:2})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===2} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/flashingLights.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===2?"#FA4A0C":"black",}}>Flashing Lights</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:3})}>
                    
                    <View style={{flexDirection: "row", marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===3} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:1})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/ringingEars.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===3?"#FA4A0C":"black",  }}>Ringing Ears</Text> 

                    </View>

                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.setState({selectedLang:4})}>
                    
                    <View style={{flexDirection: "row",marginBottom: RF(20), }}>

                        <CheckBox checked={this.state.selectedLang===4} color= "#FA4A0C" onPress={()=>this.setState({selectedLang:2})}/>
                        <Image style={styles.symptomsIcon} source={require('../assets/images/wateryEyes.png')} resizeMode="contain"/>
                        <Text style={{fontSize: RF(24), fontWeight: "700", color:this.state.selectedLang===4?"#FA4A0C":"black",}}>Watery Eyes</Text> 

                    </View>

                </TouchableOpacity>

                <View style={{backgroundColor: lightTheme.orange, height: RF(50), width: RF(250), borderRadius: RF(10), justifyContent: "center", alignSelf: "center", marginTop: RF(250) }}>

                    <Button title="SAVE CHANGES" color= "#F2f2f2" onPress={() => this.showMessage()}/>
                </View>

                

                </View> : null

                }
                
                
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

    vitalsContainerSelected: {
        width: RF(95),
        height: RF(120),
        backgroundColor: lightTheme.peach,
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
