import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  AppRegistry,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { mainStyle } from "../styles/main";
import { CheckBox } from "native-base";
import { lightTheme } from "../styles/colors";
import RF from "../utils/RF";
import Message from "../components/message";

const categories = [
  {
    name: "Diarrhea",
    image: require("../assets/images/diarrhea.png"),
  },
  {
    name: "Dizziness",
    image: require("../assets/images/dizziness.png"),
  },
  {
    name: "Fatigue",
    image: require("../assets/images/fatigue.png"),
  },
  {
    name: "Nausea",
    image: require("../assets/images/nausea.png"),
  },
  {
    name: "Itching",
    image: require("../assets/images/itching.png"),
  },
  {
    name: "Headache",
    image: require("../assets/images/headache.png"),
  },
  {
    name: "Coughing",
    image: require("../assets/images/coughing.png"),
  },
  {
    name: "Vomiting",
    image: require("../assets/images/vomiting.png"),
  },
];

const categories2 = [
  {
    name: "Racing heart",
    image: require("../assets/images/racingHeart.png"),
  },
  {
    name: "Swelling",
    image: require("../assets/images/swelling.png"),
  },
];

const categories3 = [
  {
    name: "Constipation",
    image: require("../assets/images/constipation.png"),
  },
  {
    name: "Decreased appetite",
    image: require("../assets/images/decreasedAppetite.png"),
  },
  {
    name: "Heart burn",
    image: require("../assets/images/heartBurn.png"),
  },
  {
    name: "Taste changes",
    image: require("../assets/images/tasteChanges.png"),
  },
];

const categories4 = [
  {
    name: "Anxiety",
    image: require("../assets/images/anxiety.png"),
  },
  {
    name: "Concentration difficulty",
    image: require("../assets/images/concentrationDifficulty.png"),
  },
  {
    name: "Discouraged Mood",
    image: require("../assets/images/discouragedMood.png"),
  },
  {
    name: "Memory Loss",
    image: require("../assets/images/memoryLoss.png"),
  },
];

const categories5 = [
  {
    name: "Dry Mouth",
    image: require("../assets/images/dryMouth.png"),
  },
  {
    name: "Mouth/Throat Sores",
    image: require("../assets/images/mouthThroatSores.png"),
  },
  {
    name: "Swallowing difficulty",
    image: require("../assets/images/swallowingDifficulty.png"),
  },
  {
    name: "Voice Changes",
    image: require("../assets/images/voiceChanges.png"),
  },
];

const categories6 = [
  {
    name: "General",
    image: require("../assets/images/general.png"),
  },
  {
    name: "Abdominal/Belly pain",
    image: require("../assets/images/diarrhea.png"),
  },
  {
    name: "Joint Pain",
    image: require("../assets/images/jointPain.png"),
  },
  {
    name: "Muscle Pain",
    image: require("../assets/images/musclePain.png"),
  },
];

const categories7 = [
  {
    name: "Shortness of breath",
    image: require("../assets/images/shortnessOfBreath.png"),
  },
  {
    name: "Wheezing",
    image: require("../assets/images/wheezing.png"),
  },
];

const categories8 = [
  {
    name: "Blurred Vision",
    image: require("../assets/images/blurredVision.png"),
  },
  {
    name: "Flashing Lights",
    image: require("../assets/images/flashingLights.png"),
  },
  {
    name: "Ringing Ears",
    image: require("../assets/images/ringingEars.png"),
  },
  {
    name: "Watery Eyes",
    image: require("../assets/images/wateryEyes.png"),
  },
];

export default class addSymptoms extends Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    return true;
  }

  state = {
    selectedLang: 3,
    tab: 1,
    message: false,
    category: ["Fatigue", "Nausea", "Headache"],
  };

  onToggleTab = (n) => {
    this.setState({ tab: n });
  };

  beActive = (c) => {
    const c_arr = this.state.category;
    if (c_arr.includes(c)) {
      return "active";
    } else {
      return null;
    }
  };

  onGetCheckedValue = (c) => {
    console.log("checked value", c);
    const c_arr = this.state.category;
    if (c_arr.includes(c)) {
      c_arr.splice(c_arr.indexOf(c), 1);
    } else {
      c_arr.push(c);
    }
    this.setState({
      category: c_arr,
    });
  };

  showMessage = () => {
    this.setState({ message: true }, () => {
      setTimeout(() => {
        this.setState({ message: false }, () => {
          this.props.navigation.navigate("Home");
        });
      }, 1000);
    });
  };
  hideMessage = () => {
    this.setState({ message: false });
  };

  render() {
    const { tab } = this.state;

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

            <Text style={styles.headerText}>Add Symptoms</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: RF(20),
                fontWeight: "500",
                marginBottom: RF(20),
              }}
            >
              Select a category to view symptoms
            </Text>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              contentContainerStyle={{ marginBottom: RF(30) }}
            >
              <TouchableOpacity onPress={() => this.onToggleTab(1)}>
                <View
                  style={
                    tab === 1
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/mostCommon.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Most</Text>
                  <Text style={styles.vitalsLabel}>Common</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(2)}>
                <View
                  style={
                    tab === 2
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/cardio.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Cardio/</Text>
                  <Text style={styles.vitalsLabel}>Circulatory</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(3)}>
                <View
                  style={
                    tab === 3
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/gastro.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Gastro-</Text>
                  <Text style={styles.vitalsLabel}>Intestinal</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(4)}>
                <View
                  style={
                    tab === 4
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/moodAttention.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Mood/</Text>
                  <Text style={styles.vitalsLabel}>Attention</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(5)}>
                <View
                  style={
                    tab === 5
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/oralMouth.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Oral/ Mouth</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(6)}>
                <View
                  style={
                    tab === 6
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/pain.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Pain</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(7)}>
                <View
                  style={
                    tab === 7
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/respiratory.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Respiratory</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.onToggleTab(8)}>
                <View
                  style={
                    tab === 8
                      ? styles.vitalsContainerSelected
                      : styles.vitalsContainer
                  }
                >
                  <Image
                    source={require("../assets/images/perception.png")}
                    style={styles.vitalsImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.vitalsLabel}>Visual/</Text>
                  <Text style={styles.vitalsLabel}>Perception</Text>
                </View>
              </TouchableOpacity>
            </ScrollView>

            {tab === 1 ? (
              <View>
                {categories.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 2 ? (
              <View>
                {categories2.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 3 ? (
              <View>
                {categories3.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 4 ? (
              <View>
                {categories4.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 5 ? (
              <View>
                {categories5.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 6 ? (
              <View>
                {categories6.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 7 ? (
              <View>
                {categories7.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}

            {tab === 8 ? (
              <View>
                {categories8.map((c, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      onPress={() => this.onGetCheckedValue(c.name)}
                    >
                      <View
                        style={{ flexDirection: "row", marginBottom: RF(20) }}
                      >
                        <CheckBox
                          checked={this.beActive(c.name) === "active"}
                          color="#FA4A0C"
                          onPress={() => this.onGetCheckedValue(c.name)}
                        />
                        <Image
                          style={styles.symptomsIcon}
                          source={c.image}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: RF(24),
                            fontWeight: "700",
                            color:
                              this.beActive(c.name) === "active"
                                ? "#FA4A0C"
                                : "black",
                          }}
                        >
                          {c.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
            <View style={{ paddingBottom: RF(30) }} />
          </ScrollView>
        </View>

        <Message modalVisible={this.state.message} message="Changes Saved" />
        <View
          style={{
            backgroundColor: lightTheme.orange,
            height: RF(50),
            width: RF(250),
            borderRadius: RF(10),
            justifyContent: "center",
            alignSelf: "center",
            position: "absolute",
            bottom: RF(50),
          }}
        >
          <Button
            title="SAVE CHANGES"
            color="#F2f2f2"
            onPress={() => this.showMessage()}
          />
        </View>
      </>
    );
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
    flex: 1,
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

  item: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  checkBoxTxt: {
    marginLeft: 20,
  },
});
