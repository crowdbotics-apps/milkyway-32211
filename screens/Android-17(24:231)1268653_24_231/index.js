import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09f3/3c5a/bf183b0a72b4fd91e7edef64275a55f4"
        }}
        style={styles.ImageBackground_27_454}
      />
      <View style={styles.View_27_455}>
        <Text style={styles.Text_27_455}>Dawar Latif</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_27_456}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_516"))
        }
      >
        <Text style={styles.Text_27_456}>settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_27_457}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_517"))
        }
      >
        <Text style={styles.Text_27_457}>terms &amp; conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_27_458}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("13_32"))
        }
      >
        <Text style={styles.Text_27_458}>log out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_27_459}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_513"))
        }
      >
        <Text style={styles.Text_27_459}>job contracts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_27_461}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("29_515"))
        }
      >
        <Text style={styles.Text_27_461}>job History</Text>
      </TouchableOpacity>
      <View style={styles.View_27_462}>
        <Text style={styles.Text_27_462}>help</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/594e/7bfafa6198199a8583099c895adef4bc"
        }}
        style={styles.ImageBackground_27_464}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/594e/7bfafa6198199a8583099c895adef4bc"
        }}
        style={styles.ImageBackground_27_465}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_27_454: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("3%")
  },
  View_27_455: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("16%"),
    justifyContent: "flex-end"
  },
  Text_27_455: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_27_456: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("80%"),
    justifyContent: "flex-end"
  },
  Text_27_456: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_27_457: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("86%"),
    justifyContent: "flex-end"
  },
  Text_27_457: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_27_458: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("89%"),
    justifyContent: "flex-end"
  },
  Text_27_458: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_27_459: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_27_459: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_27_461: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_27_461: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_462: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_27_462: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_27_464: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("26%")
  },
  ImageBackground_27_465: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("76%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
