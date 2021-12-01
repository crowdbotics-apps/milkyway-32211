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
        style={styles.ImageBackground_18_53}
      />
      <View style={styles.View_18_54}>
        <Text style={styles.Text_18_54}>Dawar Latif</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_20_62}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_229"))
        }
      >
        <Text style={styles.Text_20_62}>settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_20_66}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_230"))
        }
      >
        <Text style={styles.Text_20_66}>terms &amp; conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_20_67}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("13_32"))
        }
      >
        <Text style={styles.Text_20_67}>log out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_55}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_137"))
        }
      >
        <Text style={styles.Text_19_55}>contracts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_56}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("14_138"))
        }
      >
        <Text style={styles.Text_19_56}>current order</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.TouchableOpacity_19_58}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("24_228"))
        }
      >
        <Text style={styles.Text_19_58}>History</Text>
      </TouchableOpacity>
      <View style={styles.View_19_59}>
        <Text style={styles.Text_19_59}>help</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/594e/7bfafa6198199a8583099c895adef4bc"
        }}
        style={styles.ImageBackground_20_68}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e29/594e/7bfafa6198199a8583099c895adef4bc"
        }}
        style={styles.ImageBackground_20_69}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_18_53: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%")
  },
  View_18_54: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("16%"),
    justifyContent: "flex-end"
  },
  Text_18_54: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_20_62: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("79%"),
    justifyContent: "flex-end"
  },
  Text_20_62: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_20_66: {
    width: wp("46%"),
    minWidth: wp("46%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("85%"),
    justifyContent: "flex-end"
  },
  Text_20_66: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_20_67: {
    width: wp("63%"),
    minWidth: wp("63%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("88%"),
    justifyContent: "flex-end"
  },
  Text_20_67: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_55: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_19_55: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_56: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("37%"),
    justifyContent: "center"
  },
  Text_19_56: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_19_58: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_19_58: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_59: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("56%"),
    justifyContent: "center"
  },
  Text_19_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_20_68: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("25%")
  },
  ImageBackground_20_69: {
    width: wp("86%"),
    minWidth: wp("86%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
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
