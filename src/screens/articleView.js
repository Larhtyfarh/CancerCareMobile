import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, Button, StyleSheet, BackHandler } from 'react-native';
import { mainStyle } from '../styles/main';
import { Ionicons } from '@expo/vector-icons';
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
export default class articleView extends Component {

    constructor(props) {
        super(props);
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
        this.state = {heart: 0, save: 0, };
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    onClickHeart = n => {
        const { heart } = this.state;
        if (n === heart) {
            this.setState({heart: null })
        }else {
            this.setState({heart: n })
        }
    }

    onClickSave = n => {
        const { save } = this.state;
        if (n === save) {
            this.setState({save: null })
        }else {
            this.setState({save: n })
        }
    }


    render() {

        const { heart, save } = this.state;

        return (
            <View style={mainStyle.container}>

                <View style={styles.header}>

                    <View>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>

                            <Image style={styles.headerButton} source={require('../assets/icons/actions/back.png')}/>

                        </TouchableOpacity>

                    </View> 

                    <Text style={styles.headerText}>Article</Text>
 
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={{width: "100%", height: RF(220), backgroundColor: "#E2D2E8", borderRadius: RF(20) ,alignItems: "center", justifyContent: "center", marginBottom: RF(25)}}>

                        <Image style={{height: RF(180), width: RF(172), }} source={require('../assets/images/newDiscovery.png')}/>

                    </View>

                    <View style={{flexDirection: "row", marginBottom: RF(15), marginHorizontal: RF(10), justifyContent: "space-between" }}>
                        <View>

                            <Text style={{fontSize: RF(32), fontWeight: "700", }}>New</Text>
                            <Text style={{fontSize: RF(32), fontWeight: "700", }}>Discovery</Text>

                        </View>

                        <View style={{flexDirection: "row",  }}>
                            <TouchableOpacity onPress={()=>this.onClickSave(1)}>

                                <Image style={{width: RF(21), height: RF(25), }} source={save === 1? require('../assets/icons/actions/savedFull.png') : require('../assets/icons/actions/saveOrange.png')}/>
                                
                            </TouchableOpacity>
                            
                            <TouchableOpacity onPress={()=>this.onClickHeart(1)}>
                            
                                <Image style={{width: RF(27), height: RF(25), marginHorizontal: RF(20), }} source={heart === 1? require('../assets/icons/actions/heartFull.png') : require('../assets/icons/actions/heartOrange.png')}/>
                            
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{width: "90%", marginHorizontal: RF(10), }}>

                        <Text style={{fontSize: RF(22), fontWeight: "600", marginBottom: RF(20), }}>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

                        </Text>
                        
                        <Text style={{fontSize: RF(22), fontWeight: "600", marginBottom: RF(20), }}>

                        Ac ut consequat semper viverra nam libero justo laoreet sit. Habitasse platea dictumst quisque sagittis. A scelerisque purus semper eget. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Sociis natoque penatibus et magnis dis parturient montes nascetur.

                        </Text>

                        <Text style={{fontSize: RF(22), fontWeight: "600", marginBottom: RF(20), }}>
                        
                        Cursus turpis massa tincidunt dui ut ornare lectus sit. Dui faucibus in ornare quam viverra. Massa sed elementum tempus egestas. Sagittis vitae et leo duis. 

                        </Text>
                        
                        <Text style={{fontSize: RF(22), fontWeight: "600", marginBottom: RF(20), }}>

                        Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Semper risus in hendrerit gravida rutrum q
                        
                        </Text>

                        <Text style={{fontSize: RF(22), fontWeight: "600", marginBottom: RF(20), }}>
                        
                        Egestas erat imperdiet sed euismod nisiporta lorem mollis aliquam. Senectus et netus et malesuada fames. Eu ultrices vitae auctor eu augue. 

                        </Text>

                    </View>

                    <View style={{paddingBottom: RF(40)}} />


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
    
        title: {
            fontSize: RF(30),
            fontWeight: "700",
            marginBottom: RF(7),
        },
    
        body: {
            fontSize: RF(20),
            fontWeight: "500",
    
        },
    
        date: {
            fontSize: RF(18),
            fontWeight: "500",
            marginBottom: RF(10),
            color: lightTheme.grey,
    
        },
        
    })
    