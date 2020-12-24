import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput,  } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import { ScrollView } from 'react-native-gesture-handler';


export default class Article extends Component {

    state = {
        modalVisible: false,
        tab: 1
    };
    
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    
    onToggleTab = n => {
        this.setState({ tab: n })
    }

    render() {

        const { modalVisible,tab, } = this.state;

        return (

            <View style={mainStyle.container}>

                <View style={{width: "100%",flexDirection: "row-reverse",justifyContent: "space-between",marginBottom: RF(30), alignItems: "center"}}>

                    <Text style={{fontSize: RF(22),fontWeight: "700",color: lightTheme.orange, flex:1, textAlign: "center" }}>Articles</Text>

                </View>


                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{width: "100%", height: RF(50), backgroundColor: "#D9D9D9", borderRadius: RF(30), paddingHorizontal: RF(35), alignItems: "center", flexDirection: "row", marginBottom:RF(20) }}>


                        <Ionicons name="md-search" size={RF(30)} color= "#7B7B81" />

                        <TextInput style={{width: RF(300), height: RF(50), fontSize: RF(22), color: lightTheme.grey, paddingHorizontal: RF(15), borderColor: "#D9D9D9", borderWidth: 1 }} clearButtonMode="while-editing" placeholder="Search Articles" />

                    </View>

                    <View style={{marginBottom: RF(30)}}>

                    
                    
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal >

                            <TouchableOpacity onPress={()=>this.onToggleTab(1)}>

                                <View style={tab === 1 ? {height: RF(40), backgroundColor: lightTheme.peach, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row",marginRight: RF(10)}
                                : {height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row",marginRight: RF(10)}}>

                                <Image style={{width: RF(14), height: RF(15) }} source={tab === 1 ? require('../assets/icons/actions/map.png') : require('../assets/icons/actions/mapBlack.png')}/> 
                                    <Text style={tab === 1 ? {fontSize: RF(18), fontWeight: "600", color: lightTheme.orange, paddingHorizontal: RF(5)} : {fontSize: RF(18), paddingHorizontal: RF(5),}}> Discover</Text>

                                </View>

                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>this.onToggleTab(2)}>

                                <View style={tab === 2 ? {height: RF(40), backgroundColor: lightTheme.peach, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}
                                : {height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                                    <Image style={{width: RF(15), height: RF(15) }} source={tab === 2 ? require('../assets/icons/actions/clockOrange.png') : require('../assets/icons/actions/clock.png')}/>
                                    <Text style={tab === 2 ? {fontSize: RF(18), fontWeight: "600", color: lightTheme.orange, paddingHorizontal: RF(5)} : {fontSize: RF(18), paddingHorizontal: RF(5)}}> Recents</Text>

                                </View>

                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>this.onToggleTab(3)}>

                                <View style={ tab === 3 ? {height: RF(40), backgroundColor: lightTheme.peach, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}
                                : {height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                                    <Image style={{width: RF(17), height: RF(15) }} source={tab === 3 ? require('../assets/icons/actions/heartOrange.png') : require('../assets/icons/actions/heart.png')}/>
                                    <Text style={tab === 3 ? {fontSize: RF(18), fontWeight: "600", color: lightTheme.orange, paddingHorizontal: RF(5)} : {fontSize: RF(18), paddingHorizontal: RF(5)}}> Favorites</Text>

                                </View>

                            </TouchableOpacity>


                            <TouchableOpacity onPress={()=>this.onToggleTab(4)}>

                                <View style={tab === 4 ? {height: RF(40), backgroundColor: lightTheme.peach, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}
                                : {height: RF(40), backgroundColor: lightTheme.white, borderRadius: RF(30), paddingHorizontal: RF(10), alignItems: "center", flexDirection: "row", marginRight: RF(10), elevation: 2,shadowColor: "rgba(57,57,57,0.10)",shadowOffset: {width: 0,height: 4},shadowOpacity: 0.30,shadowRadius: 4.65,}}>

                                    <Image style={{width: RF(13), height: RF(15) }} source={tab === 4 ? require('../assets/icons/actions/saveOrange.png') : require('../assets/icons/actions/save.png')}/>
                                    <Text style={tab === 4 ? {fontSize: RF(18), fontWeight: "600", color: lightTheme.orange, paddingHorizontal: RF(5)} : {fontSize: RF(18), paddingHorizontal: RF(5)}}> Saved</Text>

                                </View>

                            </TouchableOpacity>

                        </ScrollView>

                    </View>

                    
                {tab === 1 ? 
                    <View>
                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(15)}}>Top Articles</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                        <View style={{width: "100%", height: RF(180), backgroundColor: "#E2D2E8", alignContent: "center", borderRadius: RF(30), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{}}>

                                <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>New</Text>
                                <Text style={{fontSize: RF(30), fontWeight: "700"}}>Discovery</Text>

                            </View>

                            <View style={{flex: 1, marginTop: RF(25), alignItems: "flex-end",}}>
                                <Image style={{height: RF(120), width: RF(115), }} source={require('../assets/images/newDiscovery.png')}/>
                            </View>

                        </View>

                    </TouchableOpacity>

                    <Text style={{fontSize: RF(20), fontWeight: "700", color: lightTheme.orange, marginBottom: RF(15)}}>New Articles</Text>

                    
                    <View style={{width: "100%",flexDirection: "row" , justifyContent: "space-between" }}>

                        <View style={{width: "47%",}}>
                            
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                                <View style={{ height: RF(120), backgroundColor: "#DBCED1",borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                    <View style={{flex:1, flexDirection: "column",  }}>

                                        <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/breakThrough.png')}/>
                                    
                                        <View>

                                            <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Break Through</Text>

                                        </View>

                                    </View>

                                </View>
                                
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                                <View style={{height: RF(120), backgroundColor: "#EDD3BE", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                    <View style={{flex:1, flexDirection: "column", }}>

                                        <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/drugTest.png')}/>
                                    
                                        <View>

                                            <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Failed: Drug Test</Text>

                                        </View>

                                    </View>

                                </View>

                            </TouchableOpacity>

                        </View>

                        <View style={{width: "47%"}}>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                                <View style={{ height: RF(120), backgroundColor: "#D3E2DF", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                    <View style={{flex:1, flexDirection: "column",  }}>

                                        <Image style={{height: RF(60), width: RF(56), marginTop: RF(10),alignSelf: "flex-end" }} source={require('../assets/images/researchWork.png')}/>
                                
                                        <View>

                                            <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>Research Work</Text>

                                        </View>

                                    </View>


                                </View>

                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                                <View style={{height: RF(120), backgroundColor: "#EEBFCC", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                    <View style={{flex:1, flexDirection: "column", }}>

                                        <Image style={{height: RF(60), width: RF(56), marginTop: RF(10), alignSelf: "flex-end"}} source={require('../assets/images/whatToDo.png')}/>
                                
                                        <View>

                                            <Text style={{fontSize: RF(18), fontWeight: "600",marginTop: RF(15), marginBottom: RF(5)}}>What To Do?</Text>

                                        </View>

                                    </View>

                                </View>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View> : null }
                
                {tab === 2 ? 
            
                <View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                            <View style={{width: "100%", height: RF(120), backgroundColor: "#E2D2E8", alignContent: "center", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                <View style={{}}>

                                    <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>New</Text>
                                    <Text style={{fontSize: RF(30), fontWeight: "700"}}>Discovery</Text>

                                </View>

                                <View style={{flex: 1, marginTop: RF(25), alignItems: "flex-end", }}>
                                    <Image style={{height: RF(60), width: RF(58), }} source={require('../assets/images/newDiscovery.png')}/>
                                </View>

                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                            <View style={{width: "100%", height: RF(120), backgroundColor: "#DBCED1", alignContent: "center", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                                <View style={{}}>

                                    <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>Break</Text>
                                    <Text style={{fontSize: RF(30), fontWeight: "700"}}>Through</Text>

                                </View>

                                <View style={{flex: 1, marginTop: RF(25), alignItems: "flex-end", }}>
                                    <Image style={{height: RF(60), width: RF(58), }} source={require('../assets/images/breakThrough.png')}/>
                                </View>

                            </View>

                        </TouchableOpacity>


                            
                </View> : null } 



                {tab === 3 ? 
            
            <View>

                <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                        <View style={{width: "100%", height: RF(120), backgroundColor: "#E2D2E8", alignContent: "center", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{}}>

                                <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>Break</Text>
                                <Text style={{fontSize: RF(30), fontWeight: "700"}}>Through</Text>

                            </View>

                            <View style={{flex: 1, marginTop: RF(25), alignItems: "flex-end", }}>
                                <Image style={{height: RF(60), width: RF(58), }} source={require('../assets/images/breakThrough.png')}/>
                            </View>

                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate("ArticleView")}>

                        <View style={{width: "100%", height: RF(120), backgroundColor: "#DBCED1", alignContent: "center", borderRadius: RF(20), flexDirection: "row" , paddingHorizontal: RF(15), marginBottom: RF(20)}}>

                            <View style={{}}>

                                <Text style={{fontSize: RF(30), fontWeight: "700",marginTop: RF(15), marginBottom: RF(5)}}>Research</Text>

                            </View>

                            <View style={{flex: 1, marginTop: RF(25), alignItems: "flex-end", }}>
                                <Image style={{height: RF(60), width: RF(58), }} source={require('../assets/images/researchWork.png')}/>
                            </View>

                        </View>

                    </TouchableOpacity>


                        
            </View> : null } 



            {tab === 4 ? 
            
            <View style={{alignItems: "center", marginTop: RF(100),  }}>

                <Image style={{height: RF(150), width: RF(135),}} source={require('../assets/images/noArticle.png')}/>
                <Text style={{fontSize: RF(30), fontWeight: "700", marginTop: RF(20), }}>No saved articles yet</Text>
                <Text style={{fontSize: RF(15), color: lightTheme.grey, marginTop: RF(5), }}>Search or go to discover to start reading an article</Text>

                        
            </View> : null } 


                <View style={{paddingBottom: RF(10)}} />
            </ScrollView> 
            </View>
            
        )
    }
}
