import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  StyleSheet,
} from "react-native";
import { mainStyle } from "../styles/main";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Chemotherapy from "../components/popups/chemotherapy";
import Surgery from "../components/popups/surgery";
import Paracetamol from "../components/popups/Paracetamol";
import Amoxyl from "../components/popups/amoxyl";
import Ciplox from "../components/popups/ciplox";
import StackCardList from "react-native-notification-stack-card";

export default class Calendar extends Component {
  state = {
    modalVisible: false,
    tab: 1,
    datetab: 3,
    showChemotherapy: false,
    showSurgery: false,
    showParacetamol: false,
    showAmoxyl: false,
    showCiplox: false,
    stack1: true,
    stack2: true,
    stack3: true,
    stack4: true,
  };

  updateStack1 = (state) => {
    this.setState({ stack1: state });
  };

  updateStack2 = (state) => {
    this.setState({ stack2: state });
  };

  updateStack3 = (state) => {
    this.setState({ stack3: state });
  };

  updateStack4 = (state) => {
    this.setState({ stack4: state });
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  onToggleTab = (n) => {
    this.setState({ tab: n });
  };

  onToggleDateTab = (n) => {
    this.setState({ datetab: n });
  };

  onShowChemotherapy = (v) => {
    this.setState({
      showChemotherapy: true,
    });
  };
  onHideChemotherapy = () => {
    this.setState({ showChemotherapy: false });
  };

  onShowSurgery = (v) => {
    this.setState({
      showSurgery: true,
    });
  };
  onHideSurgery = () => {
    this.setState({ showSurgery: false });
  };

  onShowParacetamol = (v) => {
    this.setState({
      showParacetamol: true,
    });
  };
  onHideParacetamol = () => {
    this.setState({ showParacetamol: false });
  };

  onShowAmoxyl = (v) => {
    this.setState({
      showAmoxyl: true,
    });
  };
  onHideAmoxyl = () => {
    this.setState({ showAmoxyl: false });
  };

  onShowCiplox = (v) => {
    this.setState({
      showCiplox: true,
    });
  };
  onHideCiplox = () => {
    this.setState({ showCiplox: false });
  };

  render() {
    const {
      modalVisible,
      tab,
      datetab,
      showChemotherapy,
      showSurgery,
      showParacetamol,
      showAmoxyl,
      showCiplox,
      stack1,
      stack2,
      stack3,
      stack4,
    } = this.state;

    return (
      <>
        <View style={mainStyle.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            animationType="fade"
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.5)",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }}
              />

              <View style={styles.modalView}>
                <View
                  style={{
                    width: "100%",
                    marginTop: RF(25),
                    marginBottom: RF(25),
                    alignContent: "center",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                  }}
                >
                  <View style={{ paddingRight: RF(25) }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}
                    >
                      <Ionicons name="md-close" size={RF(30)} color="#FA4A0C" />
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      fontSize: RF(22),
                      fontWeight: "600",
                      textAlign: "center",
                      flex: 1,
                    }}
                  >
                    Add New
                  </Text>
                </View>

                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginBottom: RF(20),
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddMedication");
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        width: RF(80),
                        height: RF(110),
                        alignItems: "center",
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        paddingTop: RF(20),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                      }}
                    >
                      <Image
                        style={{
                          width: RF(40),
                          height: RF(40),
                          marginBottom: RF(20),
                        }}
                        source={require("../assets/images/tabletBlue.png")}
                      />
                      <Text
                        style={{
                          fontSize: RF(12),
                          fontWeight: "700",
                          color: lightTheme.orange,
                        }}
                      >
                        Medication
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddAppointment");
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        width: RF(80),
                        height: RF(110),
                        alignItems: "center",
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        paddingTop: RF(20),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                      }}
                    >
                      <Image
                        style={{
                          width: RF(40),
                          height: RF(40),
                          marginBottom: RF(20),
                        }}
                        source={require("../assets/images/appointment.png")}
                      />
                      <Text
                        style={{
                          fontSize: RF(11),
                          fontWeight: "700",
                          color: lightTheme.orange,
                        }}
                      >
                        Appointment
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddSymptoms");
                      this.setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        width: RF(80),
                        height: RF(110),
                        alignItems: "center",
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        paddingTop: RF(20),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                      }}
                    >
                      <Image
                        style={{
                          width: RF(37),
                          height: RF(40),
                          marginBottom: RF(20),
                        }}
                        source={require("../assets/images/symptoms.png")}
                      />
                      <Text
                        style={{
                          fontSize: RF(12),
                          fontWeight: "700",
                          color: lightTheme.orange,
                        }}
                      >
                        Symptoms
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("AddVitals"),
                        this.setModalVisible(!modalVisible);
                    }}
                  >
                    <View
                      style={{
                        width: RF(80),
                        height: RF(110),
                        alignItems: "center",
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        paddingTop: RF(20),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                      }}
                    >
                      <Image
                        style={{
                          width: RF(44),
                          height: RF(40),
                          marginBottom: RF(20),
                        }}
                        source={require("../assets/images/heartRate.png")}
                      />
                      <Text
                        style={{
                          fontSize: RF(12),
                          fontWeight: "700",
                          color: lightTheme.orange,
                        }}
                      >
                        Vitals
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <View
            style={{
              width: "100%",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              marginBottom: RF(30),
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(true);
                }}
              >
                <Ionicons name="md-add" size={RF(35)} color="#FA4A0C" />
              </TouchableOpacity>
            </View>

            <Text
              style={{
                fontSize: RF(22),
                fontWeight: "700",
                color: lightTheme.orange,
                flex: 1,
                textAlign: "center",
              }}
            >
              Calendar
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: RF(20),
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity
              onPress={() => this.onToggleTab(1)}
              style={
                tab === 1
                  ? {
                      flexDirection: "column",
                      borderBottomColor: lightTheme.orange,
                      borderBottomWidth: RF(3),
                    }
                  : null
              }
            >
              <Text
                style={
                  tab === 1
                    ? {
                        fontSize: RF(20),
                        color: lightTheme.orange,
                        fontWeight: "600",
                      }
                    : { fontSize: RF(20), color: lightTheme.grey }
                }
              >
                Daily
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.onToggleTab(2)}
              style={
                tab === 2
                  ? {
                      flexDirection: "column",
                      borderBottomColor: lightTheme.orange,
                      borderBottomWidth: RF(3),
                    }
                  : null
              }
            >
              <Text
                style={
                  tab === 2
                    ? {
                        fontSize: RF(20),
                        color: lightTheme.orange,
                        fontWeight: "600",
                      }
                    : { fontSize: RF(20), color: lightTheme.grey }
                }
              >
                All
              </Text>
            </TouchableOpacity>
          </View>

          {tab === 1 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ height: RF(80), marginBottom: RF(40) }}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  contentContainerStyle={{}}
                >
                  <TouchableOpacity onPress={() => this.onToggleDateTab(1)}>
                    <View
                      style={
                        datetab === 1
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 1
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        S
                      </Text>

                      <Text
                        style={
                          datetab === 1
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        15
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(2)}>
                    <View
                      style={
                        datetab === 2
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 2
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        M
                      </Text>

                      <Text
                        style={
                          datetab === 2
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        16
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(3)}>
                    <View
                      style={
                        datetab === 3
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 3
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        T
                      </Text>

                      <Text
                        style={
                          datetab === 3
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        17
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(4)}>
                    <View
                      style={
                        datetab === 4
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 4
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        W
                      </Text>

                      <Text
                        style={
                          datetab === 4
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        18
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(5)}>
                    <View
                      style={
                        datetab === 5
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 5
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        T
                      </Text>

                      <Text
                        style={
                          datetab === 5
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        19
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(6)}>
                    <View
                      style={
                        datetab === 6
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 6
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        F
                      </Text>

                      <Text
                        style={
                          datetab === 6
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        20
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(7)}>
                    <View
                      style={
                        datetab === 7
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 7
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        S
                      </Text>

                      <Text
                        style={
                          datetab === 7
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        21
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(8)}>
                    <View
                      style={
                        datetab === 8
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 8
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        S
                      </Text>

                      <Text
                        style={
                          datetab === 8
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        22
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(9)}>
                    <View
                      style={
                        datetab === 9
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 9
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        M
                      </Text>

                      <Text
                        style={
                          datetab === 9
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        23
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(10)}>
                    <View
                      style={
                        datetab === 10
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 10
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        T
                      </Text>

                      <Text
                        style={
                          datetab === 10
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        24
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(11)}>
                    <View
                      style={
                        datetab === 11
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 11
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        W
                      </Text>

                      <Text
                        style={
                          datetab === 11
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        25
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(12)}>
                    <View
                      style={
                        datetab === 12
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 12
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        T
                      </Text>

                      <Text
                        style={
                          datetab === 12
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        26
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(13)}>
                    <View
                      style={
                        datetab === 13
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 13
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        F
                      </Text>

                      <Text
                        style={
                          datetab === 13
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        27
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onToggleDateTab(14)}>
                    <View
                      style={
                        datetab === 14
                          ? {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.purple,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                          : {
                              width: RF(40),
                              height: RF(75),
                              backgroundColor: lightTheme.white,
                              borderRadius: RF(10),
                              paddingHorizontal: RF(10),
                              paddingVertical: RF(15),
                              alignItems: "center",
                              marginRight: RF(10),
                            }
                      }
                    >
                      <Text
                        style={
                          datetab === 14
                            ? {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                marginBottom: RF(5),
                                fontSize: RF(22),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        S
                      </Text>

                      <Text
                        style={
                          datetab === 14
                            ? {
                                fontSize: RF(15),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(15),
                                color: lightTheme.grey,
                                fontWeight: "600",
                              }
                        }
                      >
                        28
                      </Text>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>

              {stack1 ? (
                <TouchableOpacity
                  onPress={() => this.updateStack1(false)}
                  style={{
                    marginBottom: RF(20),
                    position: "relative",
                    height: RF(90),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      zIndex: 9999,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/capsuleRedYellow.png")}
                          style={{ width: RF(15), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Amoxyl
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            1 capsule
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/tabletBlue.png")}
                          style={{ width: RF(30), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Paracetamol
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            2 tablets
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/dropAqua.png")}
                          style={{ width: RF(17), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Ciplox
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            1 drop
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ color: lightTheme.grey, fontSize: RF(12) }}
                      >
                        (3 cards)
                      </Text>

                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: RF(10),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      zIndex: 98,
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity onPress={() => this.updateStack1(true)}>
                    <View
                      style={{
                        width: "100%",
                        height: RF(70),
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        paddingHorizontal: RF(20),
                        paddingVertical: RF(10),
                        marginBottom: RF(10),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: RF(8),
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/capsuleRedYellow.png")}
                            style={{ width: RF(15), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Amoxyl
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              1 capsule
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/tabletBlue.png")}
                            style={{ width: RF(30), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Paracetamol
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              2 tablets
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/dropAqua.png")}
                            style={{ width: RF(17), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Ciplox
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              1 drop
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            width: RF(50),
                            height: RF(15),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(12),
                              alignItems: "flex-end",
                            }}
                          >
                            7:00am
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      marginBottom: RF(10),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/dropAqua.png")}
                          style={{ width: RF(17), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Ciplox
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            1 drop
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.peach,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.orange,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          1:00pm
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      marginBottom: RF(25),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/capsuleRedYellow.png")}
                          style={{ width: RF(15), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Amoxyl
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            1 capsule
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.peach,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.orange,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          5:00pm
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}

              {stack2 ? (
                <TouchableOpacity
                  onPress={() => this.updateStack2(false)}
                  style={{
                    marginBottom: RF(10),
                    position: "relative",
                    height: RF(90),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      zIndex: 9999,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/fatigue.png")}
                          style={{ width: RF(26), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Fatigue
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Severe
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/nausea.png")}
                          style={{ width: RF(20), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Nausea
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Severe
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/headache.png")}
                          style={{ width: RF(25), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Headache
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Mild
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ color: lightTheme.grey, fontSize: RF(12) }}
                      >
                        (2 cards)
                      </Text>

                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: RF(10),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      zIndex: 98,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity onPress={() => this.updateStack2(true)}>
                    <View
                      style={{
                        width: "100%",
                        height: RF(70),
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        paddingHorizontal: RF(20),
                        paddingVertical: RF(10),
                        marginBottom: RF(10),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: RF(8),
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/fatigue.png")}
                            style={{ width: RF(26), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Fatigue
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              Severe
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/nausea.png")}
                            style={{ width: RF(20), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Nausea
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              Severe
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/headache.png")}
                            style={{ width: RF(24), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(12), fontWeight: "700" }}
                            >
                              Headache
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              Mild
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            width: RF(50),
                            height: RF(15),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(12),
                              alignItems: "flex-end",
                            }}
                          >
                            7:00am
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      marginBottom: RF(10),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/fatigue.png")}
                          style={{ width: RF(26), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Fatigue
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Mild
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/nausea.png")}
                          style={{ width: RF(20), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Nausea
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Severe
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/headache.png")}
                          style={{ width: RF(24), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                            Headache
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Severe
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.peach,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.orange,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          4:00pm
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}

              {stack3 ? (
                <TouchableOpacity
                  onPress={() => this.updateStack3(false)}
                  style={{
                    marginBottom: RF(20),
                    position: "relative",
                    height: RF(90),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(5),
                      zIndex: 9999,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/moodExcited.png")}
                          style={{ width: RF(30), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(16), fontWeight: "700" }}>
                            Mood
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Happy
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ color: lightTheme.grey, fontSize: RF(12) }}
                      >
                        (3 cards)
                      </Text>

                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: RF(10),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      zIndex: 98,
                    }}
                  />
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: 0,
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity onPress={() => this.updateStack3(true)}>
                    <View
                      style={{
                        width: "100%",
                        height: RF(70),
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        paddingHorizontal: RF(20),
                        paddingVertical: RF(5),
                        marginBottom: RF(10),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: RF(8),
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/moodExcited.png")}
                            style={{ width: RF(30), height: RF(30) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{ fontSize: RF(16), fontWeight: "700" }}
                            >
                              Mood
                            </Text>
                            <Text
                              style={{
                                fontSize: RF(14),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              Happy
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            width: RF(50),
                            height: RF(15),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(12),
                              alignItems: "flex-end",
                            }}
                          >
                            7:00am
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(5),
                      marginBottom: RF(10),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/moodNeutral.png")}
                          style={{ width: RF(30), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(16), fontWeight: "700" }}>
                            Mood
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Neutral
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          10:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(5),
                      marginBottom: RF(25),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/moodSad.png")}
                          style={{ width: RF(30), height: RF(30) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text style={{ fontSize: RF(16), fontWeight: "700" }}>
                            Mood
                          </Text>
                          <Text
                            style={{
                              fontSize: RF(14),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            Sad
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.peach,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.orange,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          5:00pm
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}

              {stack4 ? (
                <TouchableOpacity
                  onPress={() => this.updateStack4(false)}
                  style={{
                    marginBottom: RF(10),
                    position: "relative",
                    height: RF(90),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      zIndex: 9999,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/heartRate.png")}
                          style={{ width: RF(22), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            77<Text style={{ fontSize: RF(12) }}>BPM</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/weight.png")}
                          style={{ width: RF(20), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            60<Text style={{ fontSize: RF(12) }}>kg</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/bloodSugar.png")}
                          style={{ width: RF(12), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            35<Text style={{ fontSize: RF(12) }}>mg/dL</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/temperature.png")}
                          style={{ width: RF(9), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            32<Text style={{ fontSize: RF(12) }}>C</Text>
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{ color: lightTheme.grey, fontSize: RF(12) }}
                      >
                        (2 cards)
                      </Text>

                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      position: "absolute",
                      bottom: RF(10),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.9,
                      shadowRadius: 4.65,
                      zIndex: 98,
                    }}
                  />
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity onPress={() => this.updateStack4(true)}>
                    <View
                      style={{
                        width: "100%",
                        height: RF(70),
                        backgroundColor: lightTheme.white,
                        borderRadius: RF(10),
                        elevation: 2,
                        shadowColor: "rgba(57,57,57,0.10)",
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.3,
                        shadowRadius: 4.65,
                        paddingHorizontal: RF(20),
                        paddingVertical: RF(10),
                        marginBottom: RF(10),
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: RF(8),
                        }}
                      >
                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/heartRate.png")}
                            style={{ width: RF(22), height: RF(20) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{
                                fontSize: RF(22),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              77<Text style={{ fontSize: RF(12) }}>BPM</Text>
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/weight.png")}
                            style={{ width: RF(20), height: RF(20) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{
                                fontSize: RF(22),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              60<Text style={{ fontSize: RF(12) }}>kg</Text>
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/bloodSugar.png")}
                            style={{ width: RF(12), height: RF(20) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{
                                fontSize: RF(22),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              35<Text style={{ fontSize: RF(12) }}>mg/dL</Text>
                            </Text>
                          </View>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                          <Image
                            source={require("../assets/images/temperature.png")}
                            style={{ width: RF(9), height: RF(20) }}
                          />

                          <View style={{ paddingHorizontal: RF(10) }}>
                            <Text
                              style={{
                                fontSize: RF(22),
                                fontWeight: "700",
                                color: lightTheme.orange,
                              }}
                            >
                              32<Text style={{ fontSize: RF(12) }}>C</Text>
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-end",
                        }}
                      >
                        <View
                          style={{
                            width: RF(50),
                            height: RF(15),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(12),
                              alignItems: "flex-end",
                            }}
                          >
                            7:00am
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: "100%",
                      height: RF(70),
                      backgroundColor: lightTheme.white,
                      borderRadius: RF(10),
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      paddingHorizontal: RF(20),
                      paddingVertical: RF(10),
                      marginBottom: RF(10),
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginBottom: RF(8),
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/heartRate.png")}
                          style={{ width: RF(22), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            82<Text style={{ fontSize: RF(12) }}>BPM</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/weight.png")}
                          style={{ width: RF(20), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            59<Text style={{ fontSize: RF(12) }}>kg</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/bloodSugar.png")}
                          style={{ width: RF(12), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            32<Text style={{ fontSize: RF(12) }}>mg/dL</Text>
                          </Text>
                        </View>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../assets/images/temperature.png")}
                          style={{ width: RF(9), height: RF(20) }}
                        />

                        <View style={{ paddingHorizontal: RF(10) }}>
                          <Text
                            style={{
                              fontSize: RF(22),
                              fontWeight: "700",
                              color: lightTheme.orange,
                            }}
                          >
                            33<Text style={{ fontSize: RF(12) }}>C</Text>
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{
                            color: lightTheme.purple,
                            fontSize: RF(12),
                            alignItems: "flex-end",
                          }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              )}

              <TouchableOpacity onPress={this.onShowChemotherapy}>
                <View
                  style={{
                    width: "100%",
                    height: RF(80),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(25),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "column" }}>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require("../assets/images/appointment.png")}
                        style={{ width: RF(30), height: RF(30) }}
                      />

                      <View style={{ paddingHorizontal: RF(15) }}>
                        <Text
                          style={{
                            fontSize: RF(16),
                            fontWeight: "700",
                            color: lightTheme.orange,
                          }}
                        >
                          Chemoterapy
                        </Text>
                        <Text style={{ fontSize: RF(12), fontWeight: "600" }}>
                          Dr. Tim
                        </Text>
                        <Text
                          style={{
                            fontSize: RF(10),
                            fontWeight: "600",
                            color: lightTheme.grey,
                          }}
                        >
                          General
                        </Text>
                      </View>
                    </View>

                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: RF(120),
                          height: RF(15),
                          backgroundColor: lightTheme.peach,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: RF(10),
                        }}
                      >
                        <Text
                          style={{ color: lightTheme.orange, fontSize: RF(12) }}
                        >
                          Mon 16, November
                        </Text>
                      </View>

                      <View
                        style={{
                          width: RF(50),
                          height: RF(15),
                          backgroundColor: lightTheme.lilac,
                          borderRadius: RF(10),
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Text
                          style={{ color: lightTheme.purple, fontSize: RF(12) }}
                        >
                          7:00am
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View style={{ paddingBottom: RF(10) }} />
            </ScrollView>
          ) : null}

          {tab === 2 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: RF(15),
                }}
              >
                <Text
                  style={{
                    fontSize: RF(24),
                    fontWeight: "700",
                    color: lightTheme.orange,
                  }}
                >
                  Medications
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("AllMedication");
                  }}
                >
                  <Text
                    style={{
                      fontSize: RF(14),
                      fontWeight: "600",
                      color: lightTheme.orange,
                      textDecorationLine: "underline",
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={this.onShowAmoxyl}>
                <View
                  style={{
                    width: "100%",
                    height: RF(90),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/capsuleRedYellow.png")}
                      style={{ width: RF(25), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text style={{ fontSize: RF(22), fontWeight: "700" }}>
                        Amoxyl
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(14),
                          fontWeight: "700",
                          color: lightTheme.orange,
                          marginBottom: RF(5),
                        }}
                      >
                        1 capsule
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.peach,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.orange,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            7:00p.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            5:00p.m
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onShowParacetamol}>
                <View
                  style={{
                    width: "100%",
                    height: RF(90),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/tabletBlue.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text style={{ fontSize: RF(22), fontWeight: "700" }}>
                        Paracetamol
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(14),
                          fontWeight: "700",
                          color: lightTheme.orange,
                          marginBottom: RF(5),
                        }}
                      >
                        2 tablets
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.peach,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.orange,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            7:00a.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            9:00p.m
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onShowCiplox}>
                <View
                  style={{
                    width: "100%",
                    height: RF(90),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(30),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/dropAqua.png")}
                      style={{ width: RF(28), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text style={{ fontSize: RF(22), fontWeight: "700" }}>
                        Ciplox
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(14),
                          fontWeight: "700",
                          color: lightTheme.orange,
                          marginBottom: RF(5),
                        }}
                      >
                        1 drop
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.peach,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.orange,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            7:00a.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            1:00p.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            9:00p.m
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: RF(15),
                }}
              >
                <Text
                  style={{
                    fontSize: RF(24),
                    fontWeight: "700",
                    color: lightTheme.orange,
                  }}
                >
                  Appointments
                </Text>

                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("AllAppointment")
                  }
                >
                  <Text
                    style={{
                      fontSize: RF(14),
                      fontWeight: "600",
                      color: lightTheme.orange,
                      textDecorationLine: "underline",
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity onPress={this.onShowSurgery}>
                <View
                  style={{
                    width: "100%",
                    height: RF(110),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/appointment.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text
                        style={{
                          fontSize: RF(22),
                          fontWeight: "600",
                          marginBottom: RF(2),
                        }}
                      >
                        Surgery Consult
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(2),
                        }}
                      >
                        Dr. James
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(7),
                        }}
                      >
                        Surgery
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.peach,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.orange,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            1:00p.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(140),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            Wed 25, November
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onShowChemotherapy}>
                <View
                  style={{
                    width: "100%",
                    height: RF(110),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(30),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/appointment.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text
                        style={{
                          fontSize: RF(22),
                          fontWeight: "600",
                          marginBottom: RF(2),
                        }}
                      >
                        Chemoterapy
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(2),
                        }}
                      >
                        Dr. Tim
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(7),
                        }}
                      >
                        Chemoterapy
                      </Text>

                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            width: RF(65),
                            height: RF(20),
                            backgroundColor: lightTheme.peach,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: RF(15),
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.orange,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            3:00p.m
                          </Text>
                        </View>

                        <View
                          style={{
                            width: RF(140),
                            height: RF(20),
                            backgroundColor: lightTheme.lilac,
                            borderRadius: RF(10),
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Text
                            style={{
                              color: lightTheme.purple,
                              fontSize: RF(14),
                              fontWeight: "600",
                            }}
                          >
                            Fri 27, November
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: RF(15),
                }}
              >
                <Text
                  style={{
                    fontSize: RF(24),
                    fontWeight: "700",
                    color: lightTheme.orange,
                  }}
                >
                  Notes
                </Text>

                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate("AllNote")}
                >
                  <Text
                    style={{
                      fontSize: RF(14),
                      fontWeight: "600",
                      color: lightTheme.orange,
                      textDecorationLine: "underline",
                    }}
                  >
                    See all
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NoteView")}
              >
                <View
                  style={{
                    width: "100%",
                    height: RF(100),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/notes.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text
                        style={{
                          fontSize: RF(20),
                          fontWeight: "600",
                          marginBottom: RF(5),
                        }}
                      >
                        Reaction to Ciplox
                      </Text>
                      <Text style={{ fontSize: RF(13), marginBottom: RF(5) }}>
                        I have noticed a severe headache and rashes whenever i
                        use the Ciplox drops, whenev...
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(7),
                        }}
                      >
                        Sun 15, November
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NoteView")}
              >
                <View
                  style={{
                    width: "100%",
                    height: RF(110),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/notes.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text
                        style={{
                          fontSize: RF(20),
                          fontWeight: "600",
                          marginBottom: RF(5),
                        }}
                      >
                        Severe Fatigue
                      </Text>
                      <Text style={{ fontSize: RF(13), marginBottom: RF(5) }}>
                        My Fatigue level has gotten severe in the last couple of
                        days, I’m unsure what the caus...
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(7),
                        }}
                      >
                        Fri 13, November
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("NoteView")}
              >
                <View
                  style={{
                    width: "100%",
                    height: RF(110),
                    backgroundColor: lightTheme.white,
                    borderRadius: RF(10),
                    elevation: 2,
                    shadowColor: "rgba(57,57,57,0.10)",
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 4.65,
                    marginBottom: RF(10),
                    paddingHorizontal: RF(20),
                    paddingVertical: RF(10),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Image
                      source={require("../assets/images/notes.png")}
                      style={{ width: RF(50), height: RF(50) }}
                    />

                    <View style={{ paddingHorizontal: RF(20) }}>
                      <Text
                        style={{
                          fontSize: RF(20),
                          fontWeight: "600",
                          marginBottom: RF(5),
                        }}
                      >
                        A good day
                      </Text>
                      <Text style={{ fontSize: RF(13), marginBottom: RF(5) }}>
                        I've had a good day today.
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(15),
                          color: lightTheme.grey,
                          marginBottom: RF(7),
                        }}
                      >
                        Thur 12, November
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={{ paddingBottom: RF(30) }} />
            </ScrollView>
          ) : null}
        </View>

        <Chemotherapy
          modalVisible={showChemotherapy}
          onHide={this.onHideChemotherapy}
        />

        <Surgery modalVisible={showSurgery} onHide={this.onHideSurgery} />

        <Paracetamol
          modalVisible={showParacetamol}
          onHide={this.onHideParacetamol}
        />

        <Amoxyl modalVisible={showAmoxyl} onHide={this.onHideAmoxyl} />

        <Ciplox modalVisible={showCiplox} onHide={this.onHideCiplox} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    width: "100%",
    backgroundColor: "#f2f2f2",
    borderRadius: RF(20),
    elevation: 2,
    shadowColor: "rgba(57,57,57,0.10)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
});
