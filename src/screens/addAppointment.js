import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Platform,
} from "react-native";
import { mainStyle } from "../styles/main";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import RNPickerSelect from "react-native-picker-select";

import Message from "../components/message";

export default class addAppointment extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  state = {
    message: false,
    datetab: 3,
    monthtab: 1,
    timetab: 5,
    type: 0,
    pickedName: "Type Caregiver name or select",
  };
  showMessage = () => {
    this.setState({ message: true }, () => {
      setTimeout(() => {
        this.setState({ message: false }, () => {
          this.props.navigation.navigate("AllAppointment");
        });
      }, 1000);
    });
  };
  hideMessage = () => {
    this.setState({ message: false });
  };

  onToggleMonthTab = (n) => {
    this.setState({ monthtab: n });
  };

  onToggleDateTab = (n) => {
    this.setState({ datetab: n });
  };

  onToggleTimeTab = (n) => {
    this.setState({ timetab: n });
  };

  onClickType = (n) => {
    const { type } = this.state;
    if (n === type) {
      this.setState({ type: null });
    } else {
      this.setState({ type: n });
    }
  };

  render() {
    const { monthtab, datetab, timetab, type } = this.state;

    return (
      <>
        <View style={mainStyle.container}>
          <View style={styles.header}>
            <View>
              <TouchableOpacity onPress={this.handleBackButtonClick}>
                <Image
                  style={styles.headerButton}
                  source={require("../assets/icons/actions/back.png")}
                />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerText}>Add Appointment</Text>
          </View>

          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          >
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{ fontSize: RF(20), fontWeight: "500" }}>Title</Text>
              <View
                style={{
                  width: "90%",
                  height: RF(50),
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: RF(20),
                  borderBottomWidth: RF(2),
                }}
              >
                <TextInput
                  style={{
                    width: RF(350),
                    height: RF(50),
                    fontSize: RF(18),
                    color: lightTheme.grey,
                    borderColor: "#f2f2f2",
                    borderWidth: 1,
                  }}
                  clearButtonMode="while-editing"
                  placeholder="Type Apoointment name"
                />
              </View>

              <Text style={{ fontSize: RF(20), fontWeight: "500" }}>
                Caregiver
              </Text>
              <View
                style={{
                  width: "90%",
                  height: RF(50),
                  marginBottom: RF(20),
                  borderBottomWidth: 1,
                  overflow: "hidden",
                  justifyContent: "center",
                }}
              >
                <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  style={pickerSelectStyles}
                  placeholder={{
                    label: "Type Caregiver name or select",
                    value: "",
                  }}
                  items={[
                    { label: "Dr. James", value: "Dr. James" },
                    { label: "Dr. Tim", value: "Dr. Tim" },
                    { label: "Dr. Roberts", value: "Dr. Roberts" },
                    { label: "Dr. Peters", value: "Dr. Peters" },
                  ]}
                />
              </View>

              <Text
                style={{
                  fontSize: RF(20),
                  fontWeight: "500",
                  marginBottom: RF(20),
                }}
              >
                Select Date
              </Text>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{}}
              >
                <TouchableOpacity onPress={() => this.onToggleMonthTab(1)}>
                  <View
                    style={
                      monthtab === 1
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 1
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      JAN
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(2)}>
                  <View
                    style={
                      monthtab === 2
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 2
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      FEB
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(3)}>
                  <View
                    style={
                      monthtab === 3
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 3
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      MAR
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(4)}>
                  <View
                    style={
                      monthtab === 4
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 4
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      APR
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(5)}>
                  <View
                    style={
                      monthtab === 5
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 5
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      MAY
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(6)}>
                  <View
                    style={
                      monthtab === 6
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 6
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      JUN
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(7)}>
                  <View
                    style={
                      monthtab === 7
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 7
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      JUL
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(8)}>
                  <View
                    style={
                      monthtab === 8
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 8
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      AUG
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(9)}>
                  <View
                    style={
                      monthtab === 9
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 9
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      SEP
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(10)}>
                  <View
                    style={
                      monthtab === 10
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 10
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      OCT
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(11)}>
                  <View
                    style={
                      monthtab === 11
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 11
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      NOV
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleMonthTab(12)}>
                  <View
                    style={
                      monthtab === 12
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        monthtab === 12
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      DEC
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>

              <View style={{ height: RF(80), marginBottom: RF(15) }}>
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(18),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(18),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(18),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(18),
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
                                fontSize: RF(20),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(20),
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
                                fontSize: RF(18),
                                color: lightTheme.white,
                                fontWeight: "600",
                              }
                            : {
                                fontSize: RF(18),
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

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{}}
              >
                <TouchableOpacity onPress={() => this.onToggleTimeTab(1)}>
                  <View
                    style={
                      timetab === 1
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 1
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      07:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(2)}>
                  <View
                    style={
                      timetab === 2
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 2
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      07:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(3)}>
                  <View
                    style={
                      timetab === 3
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 3
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      08:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(4)}>
                  <View
                    style={
                      timetab === 4
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 4
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      08:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(5)}>
                  <View
                    style={
                      timetab === 5
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 5
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      09:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(6)}>
                  <View
                    style={
                      timetab === 6
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 6
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      09:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(7)}>
                  <View
                    style={
                      timetab === 7
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 7
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      10:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(8)}>
                  <View
                    style={
                      timetab === 8
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 8
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      10:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(9)}>
                  <View
                    style={
                      timetab === 9
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 9
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      11:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(10)}>
                  <View
                    style={
                      timetab === 10
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 10
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      11:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(11)}>
                  <View
                    style={
                      timetab === 11
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 11
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      12:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(12)}>
                  <View
                    style={
                      timetab === 12
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 12
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      12:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(13)}>
                  <View
                    style={
                      timetab === 13
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 13
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      01:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(14)}>
                  <View
                    style={
                      timetab === 14
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 14
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      01:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(15)}>
                  <View
                    style={
                      timetab === 15
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 15
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      02:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(16)}>
                  <View
                    style={
                      timetab === 16
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 16
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      02:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(17)}>
                  <View
                    style={
                      timetab === 17
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 17
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      03:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(18)}>
                  <View
                    style={
                      timetab === 18
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 18
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      03:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(19)}>
                  <View
                    style={
                      timetab === 19
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 19
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      04:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(20)}>
                  <View
                    style={
                      timetab === 20
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 20
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      04:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(21)}>
                  <View
                    style={
                      timetab === 21
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 21
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      05:00
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(22)}>
                  <View
                    style={
                      timetab === 22
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 22
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      05:30
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.onToggleTimeTab(23)}>
                  <View
                    style={
                      timetab === 23
                        ? {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.purple,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                        : {
                            width: RF(50),
                            height: RF(30),
                            backgroundColor: lightTheme.white,
                            borderRadius: RF(10),
                            justifyContent: "center",
                            alignItems: "center",
                            marginRight: RF(20),
                            marginBottom: RF(15),
                          }
                    }
                  >
                    <Text
                      style={
                        timetab === 23
                          ? {
                              fontSize: RF(20),
                              fontWeight: "600",
                              color: lightTheme.white,
                            }
                          : { fontSize: RF(20), fontWeight: "600" }
                      }
                    >
                      06:00
                    </Text>
                  </View>
                </TouchableOpacity>
              </ScrollView>

              <Text
                style={{
                  fontSize: RF(20),
                  fontWeight: "500",
                  marginBottom: RF(20),
                }}
              >
                Type
              </Text>

              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={{ marginBottom: RF(30) }}
              >
                <View style={{ width: "100%", flexDirection: "row" }}>
                  <TouchableOpacity onPress={() => this.onClickType(1)}>
                    <View
                      style={
                        type === 1
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/officeVisit.png")}
                        style={styles.vitalsImage}
                      />
                      <Text style={styles.vitalsLabel}>Office Visit</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(2)}>
                    <View
                      style={
                        type === 2
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/test.png")}
                        style={styles.vitalsImage}
                      />
                      <Text style={styles.vitalsLabel}>Test</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(3)}>
                    <View
                      style={
                        type === 3
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/procedure.png")}
                        style={styles.vitalsImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.vitalsLabel}>Procedure</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(4)}>
                    <View
                      style={
                        type === 4
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/chemotherapy.png")}
                        style={styles.vitalsImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.vitalsLabel}>Chemoterapy</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(5)}>
                    <View
                      style={
                        type === 5
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/radiation.png")}
                        style={styles.vitalsImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.vitalsLabel}>Radiation</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(6)}>
                    <View
                      style={
                        type === 6
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/surgery.png")}
                        style={styles.vitalsImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.vitalsLabel}>Surgery</Text>
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => this.onClickType(7)}>
                    <View
                      style={
                        type === 7
                          ? styles.vitalsContainerSelected
                          : styles.vitalsContainer
                      }
                    >
                      <Image
                        source={require("../assets/images/others.png")}
                        style={styles.vitalsImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.vitalsLabel}>Others</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ScrollView>

              <Text style={{ fontSize: RF(20), fontWeight: "500" }}>
                Location
              </Text>
              <View
                style={{
                  width: "90%",
                  height: RF(50),
                  alignItems: "center",
                  flexDirection: "row",
                  marginBottom: RF(20),
                  borderBottomWidth: RF(2),
                }}
              >
                <TextInput
                  style={{
                    width: RF(350),
                    height: RF(50),
                    fontSize: RF(18),
                    color: lightTheme.grey,
                    borderColor: "#f2f2f2",
                    borderWidth: 1,
                  }}
                  clearButtonMode="while-editing"
                  placeholder="Type Appointment location"
                />
              </View>

              <Text
                style={{
                  fontSize: RF(20),
                  fontWeight: "500",
                  marginBottom: RF(20),
                }}
              >
                Notes
              </Text>

              <View
                style={{
                  height: RF(165),
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: RF(10),
                }}
              >
                <Image
                  style={{
                    height: RF(50),
                    width: RF(55),
                    marginBottom: RF(15),
                  }}
                  source={require("../assets/images/notes.png")}
                />
                <TextInput
                  style={{
                    fontSize: RF(20),
                    color: lightTheme.grey,
                    borderColor: "#f2f2f2",
                    borderWidth: 1,
                  }}
                  clearButtonMode="while-editing"
                  placeholder="Tap here to add a note"
                />
              </View>

              <View
                style={{
                  backgroundColor: lightTheme.orange,
                  height: RF(50),
                  width: RF(250),
                  borderRadius: RF(10),
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                <Button
                  title="ADD APPOINTMENT"
                  color="#F2f2f2"
                  onPress={() => this.showMessage()}
                />
              </View>

              <View style={{ paddingBottom: RF(30) }} />
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

        <Message
          modalVisible={this.state.message}
          message="Added Successfully"
        />
      </>
    );
  }
}

export const pickerSelectStyles = StyleSheet.create({
  viewContainer: {
    padding: 0,
    margin: 0,
    left: 0,
  },
  inputAndroidContainer: {
    padding: 0,
    margin: 0,
    left: 0,
  },
  inputIOS: {
    width: "100%",
    color: "#9A9A9D",
    fontSize: RF(18),
    padding: 0,
    margin: 0,
  },
  inputAndroid: {
    width: "100%",
    height: RF(30),
    color: "#9A9A9D",
    fontSize: RF(18),
    textAlign: "left",
    padding: 0,
    margin: 0,
  },
  placeholder: {
    color: "#9A9A9D",
    fontSize: RF(18),
    textAlign: "left",
    padding: 0,
    margin: 0,
  },
});

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
    flex: 1,
    textAlign: "center",
  },

  vitalsContainer: {
    width: RF(95),
    height: RF(120),
    backgroundColor: lightTheme.white,
    borderRadius: RF(20),
    paddingHorizontal: RF(5),
    paddingVertical: RF(25),
    alignItems: "center",
    marginRight: RF(10),
  },

  vitalsContainerSelected: {
    width: RF(95),
    height: RF(120),
    backgroundColor: lightTheme.peach,
    borderRadius: RF(20),
    paddingHorizontal: RF(5),
    paddingVertical: RF(25),
    alignItems: "center",
    marginRight: RF(10),
  },

  vitalsImage: {
    width: RF(55),
    height: RF(50),
    marginBottom: RF(15),
  },

  vitalsLabel: {
    marginBottom: RF(5),
    fontSize: RF(15),
    fontWeight: "700",
    color: lightTheme.orange,
  },
});
