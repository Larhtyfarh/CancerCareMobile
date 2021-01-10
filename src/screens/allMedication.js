import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  BackHandler,
  Alert,
} from "react-native";
import { mainStyle } from "../styles/main";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Paracetamol from "../components/popups/Paracetamol";
import Amoxyl from "../components/popups/amoxyl";
import Ciplox from "../components/popups/ciplox";

export default class allMedication extends Component {
  state = {
    showParacetamol: false,
    showAmoxyl: false,
    showCiplox: false,
  };

  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

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
    const { showParacetamol, showAmoxyl, showCiplox } = this.state;

    return (
      <>
        <View style={mainStyle.container}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: RF(30),
              alignItems: "center",
            }}
          >
            <View>
              <TouchableOpacity onPress={this.handleBackButtonClick}>
                <Image
                  style={{ height: RF(30), width: RF(30) }}
                  source={require("../assets/icons/actions/back.png")}
                />
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
              All Medications
            </Text>
          </View>

          <TouchableOpacity onPress={this.onShowAmoxyl}>
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
                  <Text style={{ fontSize: RF(24), fontWeight: "700" }}>
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
                        width: RF(60),
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
                        width: RF(60),
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
                height: RF(80),
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
                  <Text style={{ fontSize: RF(24), fontWeight: "700" }}>
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
                        width: RF(60),
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
                        width: RF(60),
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
                height: RF(80),
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
                  <Text style={{ fontSize: RF(24), fontWeight: "700" }}>
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
                        width: RF(60),
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
                        width: RF(60),
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
                        width: RF(60),
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
        </View>

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
