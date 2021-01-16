import React, { Component } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { mainStyle } from "../styles/main";
import { Ionicons } from "@expo/vector-icons";
import { lightTheme } from "../styles/colors";
import SemiCircleProgress from "../components/semicircleprogress";
import RF from "../utils/RF";
import Appointment from "../components/popups/appointment";
import Log1 from "../components/popups/log1";
import Log2 from "../components/popups/log2";
import Log3 from "../components/popups/log3";
import Log4 from "../components/popups/log4";
import Vital from "../components/popups/vital";
import Weight from "../components/popups/weight";
import BloodSugar from "../components/popups/bloodsugar";
import Temperature from "../components/popups/temperature";
import Mood from "../components/popups/mood";
import Symptom from "../components/popups/symptom";
import moment from "moment";

export default class Home extends Component {
  state = {
    payload: {
      title: "",
      name: "",
      type: "",
      address: "",
      phone: "",
      date: "",
      time: "",
    },

    showAppointment: false,
    showVital: false,
    showWeight: false,
    showBloodSugar: false,
    showTemperature: false,
    showMood: false,
    showSymptom: false,
    time: "",
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
    percentage: 0,
    log1: false,
    log2: false,
    log3: false,
    log4: false,
  };
  onShowAppointment = (v) => {
    this.setState({
      showAppointment: true,
      payload: { ...v },
    });
  };
  onHideAppointment = () => {
    this.setState({ showAppointment: false });
  };
  onShowLog = (i) => {
    this.setState({
      [`log${i}`]: true,
    });
  };
  onHideLog = (i) => {
    this.setState({ [`log${i}`]: false });
  };

  onShowVital = (v) => {
    this.setState({
      showVital: true,
      load: { ...v },
    });
  };
  onHideVital = () => {
    this.setState({ showVital: false });
  };

  onNavigateVital = () => {
    this.setState(
      {
        showVital: false,
        showWeight: false,
        showTemperature: false,
        showBloodSugar: false,
        showMood: false,
        showSymptom: false,
      },
      () => {
        this.props.navigation.navigate("Log");
      }
    );
  };

  onShowWeight = (v) => {
    this.setState({
      showWeight: true,
      load: { ...v },
    });
  };
  onHideWeight = () => {
    this.setState({ showWeight: false });
  };

  onShowBloodSugar = (v) => {
    this.setState({
      showBloodSugar: true,
      load: { ...v },
    });
  };
  onHideBloodSugar = () => {
    this.setState({ showBloodSugar: false });
  };

  onShowTemperature = (v) => {
    this.setState({
      showTemperature: true,
      load: { ...v },
    });
  };
  onHideTemperature = () => {
    this.setState({ showTemperature: false });
  };

  onShowMood = (v) => {
    this.setState({
      showMood: true,
      load: { ...v },
    });
  };
  onHideMood = () => {
    this.setState({ showMood: false });
  };

  onShowSymptom = (v) => {
    this.setState({
      showSymptom: true,
      load: { ...v },
    });
  };
  onHideSymptom = () => {
    this.setState({ showSymptom: false });
  };

  getHourCountdown = () => {
    let currentHour = new Date().getHours();
    let currentMinute = new Date().getMinutes();
    let currentSeconds = new Date().getSeconds();
    let seconds = (currentHour - 7) * 3600;
    if (currentHour === 7 || currentHour < 13) {
      this.setState(
        {
          time: moment.duration().add({
            days: 0,
            hours: 12 - currentHour,
            minutes: 60 - currentMinute,
            seconds: 60 - currentSeconds,
          }),
          percentage: (seconds / 46800) * 100,
        },
        () => {
          this.updateTimer();
        }
      );
    } else if (currentHour === 13 || currentHour < 17) {
      this.setState(
        {
          time: moment.duration().add({
            days: 0,
            hours: 16 - currentHour,
            minutes: 60 - currentMinute,
            seconds: 60 - currentSeconds,
          }),
          percentage: (seconds / 46800) * 100,
        },
        () => {
          this.updateTimer();
        }
      );
    } else if (currentHour === 17 || currentHour <= 21) {
      this.setState(
        {
          time: moment.duration().add({
            days: 0,
            hours: 20 - currentHour,
            minutes: 60 - currentMinute,
            seconds: 60 - currentSeconds,
          }),
          percentage: (seconds / 46800) * 100,
        },
        () => {
          this.updateTimer();
        }
      );
    }
  };

  updateTimer = () => {
    const x = setInterval(() => {
      let { time } = this.state;
      if (time <= 0) {
        clearInterval(x);
      } else {
        time = time.subtract(1, "s");
        const days = time.days();
        const hours = time.hours();
        const mins = time.minutes();
        const secs = time.seconds();
        this.setState({
          days,
          hours,
          mins,
          secs,
          time,
        });
      }
    }, 1000);
  };

  componentDidMount() {
    this.getHourCountdown();
  }

  render() {
    const {
      showAppointment,
      payload,
      showVital,
      showWeight,
      showBloodSugar,
      showTemperature,
      showMood,
      showSymptom,
      time,
      days,
      hours,
      mins,
      secs,
      percentage,
      log1,
      log2,
      log3,
      log4,
    } = this.state;
    return (
      <>
        <View style={mainStyle.container}>
          <View style={styles.header}>
            <View>
              <Text
                style={{
                  fontSize: RF(22),
                  fontWeight: "700",
                  marginBottom: RF(5),
                  color: lightTheme.orange,
                }}
              >
                Hi,
              </Text>
              <Text
                style={{
                  fontSize: RF(32),
                  fontWeight: "700",
                  color: lightTheme.orange,
                  marginBottom: RF(20),
                }}
              >
                Tolu
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <View style={{ alignItems: "flex-end" }}>
                <Ionicons name="md-menu" size={RF(35)} color="black" />
              </View>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.heading}>Next Up</Text>
            <Text style={styles.subheading}>Meds</Text>

            <View style={{ ...styles.medCard, height: RF(200) }}>
              <View
                style={{
                  alignItems: "flex-end",
                  marginRight: RF(15),
                  marginTop: RF(15),
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("AddMedication");
                  }}
                >
                  <Ionicons name="md-add" size={RF(30)} color="#FA4A0C" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  position: "relative",
                  height: RF(135),
                }}
              >
                <SemiCircleProgress
                  percentage={percentage}
                  progressColor={"#ED4A10"}
                ></SemiCircleProgress>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    top: RF(40),
                  }}
                >
                  <Text
                    style={{
                      fontSize: RF(14),
                      fontWeight: "700",
                      marginBottom: RF(2),
                    }}
                  >
                    Time till
                  </Text>
                  <Image
                    source={require("../assets/icons/actions/drugs.png")}
                    style={{
                      width: RF(65),
                      height: RF(33),
                      marginBottom: RF(5),
                    }}
                  />
                  <Text
                    style={{
                      fontSize: RF(24),
                      fontWeight: "700",
                    }}
                  >
                    {`${hours} : ${mins} : ${secs}`}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => this.onShowLog(1)}
                  style={{
                    position: "absolute",
                    left: RF(80),
                    bottom: RF(30),
                    width: RF(20),
                    height: RF(20),
                    backgroundColor: "#ED4A10",
                    borderRadius: "50%",
                  }}
                />
                <TouchableOpacity
                  onPress={() => this.onShowLog(4)}
                  style={{
                    position: "absolute",
                    right: RF(80),
                    bottom: RF(30),
                    width: RF(20),
                    height: RF(20),
                    backgroundColor: "#E5E5E5",
                    borderRadius: "50%",
                    borderWidth: 1.5,
                    borderColor: "#3F27D2",
                  }}
                />
                <TouchableOpacity
                  onPress={() => this.onShowLog(2)}
                  style={{
                    position: "absolute",
                    left: RF(165),
                    top: RF(-4),
                    width: RF(20),
                    height: RF(20),
                    backgroundColor: "#E5E5E5",
                    borderRadius: "50%",
                    borderWidth: 1.5,
                    borderColor: "#ED4A10",
                  }}
                />
                <TouchableOpacity
                  onPress={() => this.onShowLog(3)}
                  style={{
                    position: "absolute",
                    right: RF(103),
                    top: RF(30),
                    width: RF(20),
                    height: RF(20),
                    backgroundColor: "#E5E5E5",
                    borderRadius: "50%",
                    borderWidth: 1.5,
                    borderColor: "#3F27D2",
                  }}
                />
                <Image
                  source={require("../assets/icons/actions/day.png")}
                  style={{
                    position: "absolute",
                    left: RF(80),
                    bottom: RF(5),
                    width: RF(20),
                    height: RF(20),
                  }}
                />
                <Image
                  source={require("../assets/icons/actions/night.png")}
                  style={{
                    position: "absolute",
                    right: RF(80),
                    bottom: RF(5),
                    width: RF(20),
                    height: RF(20),
                  }}
                />
              </View>
            </View>

            <Text style={styles.subheading}>Appointment</Text>

            <View style={styles.appCard}>
              <View
                style={{
                  alignItems: "flex-end",
                  marginRight: RF(15),
                  marginTop: RF(15),
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate("AddAppointment");
                  }}
                >
                  <Ionicons name="md-add" size={RF(30)} color="#FA4A0C" />
                </TouchableOpacity>
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator="false"
                contentContainerStyle={{
                  alignItems: "flex-end",
                  marginBottom: RF(20),
                  paddingHorizontal: RF(17),
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    this.onShowAppointment({
                      title: "Surgery Consult",
                      name: "Dr James",
                      type: "Surgery",
                      address: "52, Peters drive, MidLands road.",
                      phone: "+44 300 790 6268",
                      date: "Wed 11, November",
                      time: "11:00a.m",
                    })
                  }
                  style={{
                    width: RF(150),
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    marginRight: RF(25),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(45),
                      backgroundColor: "#3F27D2",
                      borderRadius: RF(10),
                      marginBottom: RF(7),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFF",
                        fontWeight: "700",
                        fontSize: RF(18),
                      }}
                    >
                      Surgery Consult
                    </Text>
                  </View>
                  <View
                    style={{
                      width: RF(20),
                      height: RF(20),
                      borderRadius: RF(10),
                      backgroundColor: "#C4C4C4",
                      borderWidth: 2,
                      borderColor: "#3F27D2",
                      marginBottom: RF(3),
                    }}
                  />
                  <Text
                    style={{
                      color: "#FA4A0C",
                      fontSize: RF(16),
                      fontWeight: "700",
                    }}
                  >
                    Wed 11
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.onShowAppointment({
                      title: "Chemoterapy",
                      name: "Dr Tim",
                      type: "General",
                      address: "52, Peters drive, MidLands road.",
                      phone: "+44 300 790 6268",
                      date: "Mon 16, November",
                      time: "11:00a.m",
                    })
                  }
                  style={{
                    width: RF(150),
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                    marginRight: RF(25),
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(45),
                      backgroundColor: "#3F27D2",
                      borderRadius: RF(10),
                      marginBottom: RF(7),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFF",
                        fontWeight: "700",
                        fontSize: RF(18),
                      }}
                    >
                      Chemoterapy
                    </Text>
                  </View>
                  <View
                    style={{
                      width: RF(20),
                      height: RF(20),
                      borderRadius: RF(10),
                      backgroundColor: "#C4C4C4",
                      borderWidth: 2,
                      borderColor: "#3F27D2",
                      marginBottom: RF(3),
                    }}
                  />
                  <Text
                    style={{
                      color: "#FA4A0C",
                      fontSize: RF(16),
                      fontWeight: "700",
                    }}
                  >
                    Mon 16
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.onShowAppointment({
                      title: "Check Up",
                      name: "Dr James",
                      type: "Surgery",
                      address: "52, Peters drive, MidLands road.",
                      phone: "+44 300 790 6268",
                      date: "Thur 19, November",
                      time: "09:00a.m",
                    })
                  }
                  style={{
                    width: RF(150),
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2,
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(45),
                      backgroundColor: "#3F27D2",
                      borderRadius: RF(10),
                      marginBottom: RF(7),
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: "#FFF",
                        fontWeight: "700",
                        fontSize: RF(18),
                      }}
                    >
                      Checkup
                    </Text>
                  </View>
                  <View
                    style={{
                      width: RF(20),
                      height: RF(20),
                      borderRadius: RF(10),
                      backgroundColor: "#C4C4C4",
                      borderWidth: 2,
                      borderColor: "#3F27D2",
                      marginBottom: RF(3),
                    }}
                  />
                  <Text
                    style={{
                      color: "#FA4A0C",
                      fontSize: RF(16),
                      fontWeight: "700",
                    }}
                  >
                    Thur 19
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: RF(550),
                    height: RF(4),
                    backgroundColor: "#3F27D2",
                    position: "absolute",
                    bottom: RF(25),
                    left: RF(17),
                  }}
                />
              </ScrollView>
            </View>

            <Text style={styles.quest}>How are you today?</Text>

            <Text style={styles.heading}>Vitals</Text>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ marginBottom: RF(30) }}
            >
              <View
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity onPress={this.onShowVital}>
                  <View style={styles.vitalsContainer}>
                    <Image
                      source={require("../assets/images/heartRate.png")}
                      style={styles.vitalsImage}
                    />
                    <Text style={styles.vitalsLabel}>Heart Rate</Text>
                    <Text style={styles.vitalsValue}>
                      77{" "}
                      <Text style={{ fontSize: RF(14), fontWeight: "600" }}>
                        BPM
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onShowWeight}>
                  <View style={styles.vitalsContainer}>
                    <Image
                      source={require("../assets/images/weight.png")}
                      style={styles.vitalsImage}
                    />
                    <Text style={styles.vitalsLabel}>Weight</Text>
                    <Text style={styles.vitalsValue}>
                      60{" "}
                      <Text style={{ fontSize: RF(14), fontWeight: "600" }}>
                        kg
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onShowBloodSugar}>
                  <View style={styles.vitalsContainer}>
                    <Image
                      source={require("../assets/images/bloodSugar.png")}
                      style={styles.vitalsImage}
                      resizeMode="contain"
                    />
                    <Text style={styles.vitalsLabel}>Blood Sugar</Text>
                    <Text style={styles.vitalsValue}>
                      35{" "}
                      <Text style={{ fontSize: RF(12), fontWeight: "700" }}>
                        mg/dL
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.onShowTemperature}>
                  <View style={styles.vitalsContainer}>
                    <Image
                      source={require("../assets/images/temperature.png")}
                      style={styles.vitalsImage}
                      resizeMode="contain"
                    />
                    <Text style={styles.vitalsLabel}>Temperature</Text>
                    <Text style={styles.vitalsValue}>
                      32{" "}
                      <Text style={{ fontSize: RF(14), fontWeight: "600" }}>
                        {" "}
                        C
                      </Text>
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>

            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: RF(30),
              }}
            >
              <View style={{ width: "30%", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: RF(20),
                    color: lightTheme.black,
                    fontWeight: "600",
                    marginBottom: RF(20),
                    textAlign: "center",
                    color: lightTheme.black,
                    marginBottom: RF(15),
                  }}
                >
                  Mood
                </Text>

                <TouchableOpacity
                  onPress={this.onShowMood}
                  style={{ width: "100%" }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: RF(100),
                      backgroundColor: lightTheme.white,
                      borderRadius: 10,
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/images/moodExcited.png")}
                      style={{
                        width: RF(50),
                        height: RF(50),
                        marginBottom: RF(5),
                      }}
                    />
                    <Text
                      style={{
                        fontSize: RF(20),
                        color: lightTheme.black,
                        fontWeight: "600",
                        textAlign: "center",
                        color: lightTheme.black,
                      }}
                    >
                      Excited
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ width: "60%", alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: RF(20),
                    color: lightTheme.black,
                    fontWeight: "600",
                    marginBottom: RF(20),
                    textAlign: "center",
                    color: lightTheme.black,
                    marginBottom: RF(15),
                  }}
                >
                  Symptoms
                </Text>

                <TouchableOpacity onPress={this.onShowSymptom}>
                  <View
                    style={{
                      width: "100%",
                      height: RF(100),
                      backgroundColor: lightTheme.white,
                      borderRadius: 10,
                      elevation: 2,
                      shadowColor: "rgba(57,57,57,0.10)",
                      shadowOffset: { width: 0, height: 4 },
                      shadowOpacity: 0.3,
                      shadowRadius: 4.65,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{ flexDirection: "column", marginRight: RF(15) }}
                    >
                      <Text
                        style={{
                          fontSize: RF(16),
                          fontWeight: "700",
                          alignSelf: "flex-end",
                        }}
                      >
                        Fatigue
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(16),
                          fontWeight: "700",
                          alignSelf: "flex-end",
                        }}
                      >
                        Nausea
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(16),
                          fontWeight: "700",
                          alignSelf: "flex-end",
                        }}
                      >
                        Headache
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: RF(10),
                      }}
                    >
                      <View
                        style={{
                          width: RF(12),
                          height: RF(12),
                          backgroundColor: "#FFA869",
                          borderRadius: RF(7.5),
                          marginRight: RF(10),
                          marginBottom: RF(4),
                        }}
                      />
                      <View
                        style={{
                          width: RF(12),
                          height: RF(12),
                          backgroundColor: "#FFE17D",
                          borderRadius: RF(7.5),
                          marginRight: RF(10),
                          marginBottom: RF(4),
                        }}
                      />
                      <View
                        style={{
                          width: RF(12),
                          height: RF(12),
                          backgroundColor: "#CEFF7D",
                          borderRadius: RF(7.5),
                          marginRight: RF(10),
                          marginBottom: RF(4),
                        }}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                        alignItems: "left",
                        justifyContent: "center",
                        marginRight: RF(10),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: RF(16),
                          color: "#FFA869",
                          fontWeight: "700",
                        }}
                      >
                        Severe
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(16),
                          color: "#FFE17D",
                          fontWeight: "700",
                        }}
                      >
                        Moderate
                      </Text>
                      <Text
                        style={{
                          fontSize: RF(16),
                          color: "#CEFF7D",
                          fontWeight: "700",
                        }}
                      >
                        Mild
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ paddingBottom: RF(10) }} />
          </ScrollView>
        </View>

        <Log1 modalVisible={log1} onHide={() => this.onHideLog(1)} />

        <Log2 modalVisible={log2} onHide={() => this.onHideLog(2)} />
        <Log3 modalVisible={log3} onHide={() => this.onHideLog(3)} />
        <Log4 modalVisible={log4} onHide={() => this.onHideLog(4)} />

        <Appointment
          modalVisible={showAppointment}
          payload={payload}
          onHide={this.onHideAppointment}
        />

        <Vital
          modalVisible={showVital}
          onHide={this.onHideVital}
          action={this.onNavigateVital}
        />

        <Weight
          modalVisible={showWeight}
          onHide={this.onHideWeight}
          action={this.onNavigateVital}
        />

        <BloodSugar
          modalVisible={showBloodSugar}
          onHide={this.onHideBloodSugar}
          action={this.onNavigateVital}
        />

        <Temperature
          modalVisible={showTemperature}
          onHide={this.onHideTemperature}
          action={this.onNavigateVital}
        />

        <Mood
          modalVisible={showMood}
          onHide={this.onHideMood}
          action={this.onNavigateVital}
        />

        <Symptom
          modalVisible={showSymptom}
          onHide={this.onHideSymptom}
          action={this.onNavigateVital}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: RF(20),
  },

  heading: {
    fontSize: RF(24),
    fontWeight: "600",
    color: lightTheme.black,
    textAlign: "center",
    marginBottom: RF(15),
  },

  subheading: {
    fontSize: RF(18),
    fontWeight: "500",
    color: lightTheme.orange,
    textAlign: "center",
    marginBottom: RF(15),
  },

  medCard: {
    width: "100%",
    height: RF(180),
    backgroundColor: lightTheme.white,
    borderRadius: RF(10),
    elevation: 2,
    shadowColor: "rgba(57,57,57,0.10)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: RF(25),
  },

  appCard: {
    width: "100%",
    height: RF(165),
    backgroundColor: lightTheme.white,
    borderRadius: RF(10),
    elevation: 2,
    shadowColor: "rgba(57,57,57,0.10)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    marginBottom: RF(25),
  },

  appointmentContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: RF(30),
    zIndex: 20,
  },

  appointmentCard: {
    width: "48%",
    height: RF(100),
    backgroundColor: lightTheme.white,
    borderRadius: 10,
    elevation: 2,
    shadowColor: "rgba(57,57,57,0.10)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    padding: RF(10),
    flexDirection: "row",
    alignItems: "center",
  },

  appointmentDate: {
    width: "30%",
    height: "100%",
    backgroundColor: lightTheme.purple,
    borderRadius: RF(10),
    alignItems: "center",
    justifyContent: "center",
    marginRight: RF(10),
  },

  appointmentTitle: {
    fontSize: RF(16),
    fontWeight: "700",
    color: lightTheme.orange,
    marginBottom: RF(2),
  },

  appointmentDoctor: {
    fontSize: RF(16),
    fontWeight: "700",
    color: lightTheme.black,
    marginBottom: RF(2),
  },

  quest: {
    fontSize: RF(24),
    color: "#656565",
    fontWeight: "600",
    marginBottom: RF(20),
  },

  vitalsContainer: {
    width: RF(90),
    height: RF(120),
    backgroundColor: lightTheme.white,
    borderRadius: RF(10),
    paddingHorizontal: RF(10),
    paddingVertical: RF(15),
    alignItems: "center",
    marginRight: RF(32),
  },

  vitalsImage: {
    width: RF(44),
    height: RF(40),
    marginBottom: RF(5),
  },

  vitalsLabel: {
    marginBottom: RF(5),
    fontSize: RF(12),
    fontWeight: "700",
  },

  vitalsValue: {
    fontSize: RF(28),
    color: lightTheme.orange,
    fontWeight: "800",
  },
});
