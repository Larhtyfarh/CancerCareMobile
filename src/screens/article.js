import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import { ScrollView } from 'react-native-gesture-handler';


export default class Article extends Component {
    render() {
        return (

            <View style={mainStyle.container}>

                    <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                        <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Articles</Text>

                    </View>




                    <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{width: "100%", height: RF(50), backgroundColor: "#D9D9D9", borderRadius: RF(30), paddingHorizontal: RF(35), alignItems: "center", flexDirection: "row", marginBottom:RF(20) }}>


                    <Ionicons name="md-search" size={RF(30)} color= "#7B7B81" />

                    <Text style={{fontSize: RF(22), color: lightTheme.grey, paddingHorizontal: RF(15)}}> Search Articles</Text>

                    </View>

                    <View style={{marginBottom: RF(30)}}>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal >

                        <View style={{height: RF(40), backgroundColor: lightTheme.peach, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row",marginRight: RF(10)}}>

                            <Image style={{width: RF(14), height: RF(15) }} source={require('../assets/icons/actions/map.png')}/> 
                            <Text style={{fontSize: RF(18), fontWeight: "600", color: lightTheme.orange, paddingHorizontal: RF(5)}}> Discover</Text>

                        </View>

                        <View style={{height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                            <Image style={{width: RF(15), height: RF(15) }} source={require('../assets/icons/actions/clock.png')}/>
                            <Text style={{fontSize: RF(18), paddingHorizontal: RF(5)}}> Recents</Text>

                        </View>

                        <View style={{height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                            <Image style={{width: RF(17), height: RF(15) }} source={require('../assets/icons/actions/heart.png')}/>
                            <Text style={{fontSize: RF(18), paddingHorizontal: RF(5)}}> Favorites</Text>

                        </View>

                        <View style={{height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                            <Image style={{width: RF(13), height: RF(15) }} source={require('../assets/icons/actions/save.png')}/>
                            <Text style={{fontSize: RF(18), paddingHorizontal: RF(5)}}> Saved</Text>

                        </View>


                    </ScrollView>

                    </View>

                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(15)}}>Top Articles</Text>

                    <View style={{width: "100%", height: RF(180), backgroundColor: "#E2D2E8", alignContent: "center", borderRadius: RF(30), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                        <View style={{}}>

                            <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>New</Text>
                            <Text style={{fontSize: RF(30), fontWeight: "700"}}>Discovery</Text>

                        </View>

                        <View style={{marginTop: RF(25), marginLeft: RF(80)}}>
                            <Image style={{height: RF(120), width: RF(115), }} source={require('../assets/images/newDiscovery.png')}/>
                        </View>

                    </View>

                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(15)}}>New Articles</Text>

                    
                    <View style={{width: "100%",flexDirection: "row" , justifyContent: "space-between" }}>

                    <View style={{width: "47%",}}>
                        
                        <View style={{ height: RF(120), backgroundColor: "#DBCED1",borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{flexDirection: "column",  }}>

                                <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/breakThrough.png')}/>
                            
                                <View>

                                    <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Break Through</Text>

                                </View>

                            </View>


                        </View>

                        <View style={{height: RF(120), backgroundColor: "#EDD3BE", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{flexDirection: "column", }}>

                                <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/drugTest.png')}/>
                            
                                <View>

                                    <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Failed: Drug Test</Text>

                                </View>

                            </View>

                            </View>


                        </View>

                        <View style={{width: "47%"}}>

                        <View style={{ height: RF(120), backgroundColor: "#D3E2DF", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{flexDirection: "column",  }}>

                                <Image style={{height: RF(60), width: RF(56), marginTop: RF(10),alignSelf: "flex-end" }} source={require('../assets/images/researchWork.png')}/>
                            
                                <View>

                                    <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Research Work</Text>

                                </View>

                            </View>


                        </View>

                        <View style={{height: RF(120), backgroundColor: "#EEBFCC", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{flexDirection: "column", }}>

                                <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/whatToDo.png')}/>
                            
                                <View>

                                    <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>What To Do?</Text>

                                </View>

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
