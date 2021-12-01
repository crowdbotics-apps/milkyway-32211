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
      <View style={styles.View_29_720}>
        <Text style={styles.Text_29_720}>Terms &amp; Conditions</Text>
      </View>
      <View style={styles.View_29_721}>
        <Text style={styles.Text_29_721}>
          Welcome to our website. If you continue to browse and use this
          website, you are agreeing to comply with and be bound by the following
          terms and conditions of use, which together with our privacy policy
          govern [business name]&#39;s relationship with you in relation to this
          website. If you disagree with any part of these terms and conditions,
          please do not use our website. The term &#39;[business name]&#39; or
          &#39;us&#39; or &#39;we&#39; refers to the owner of the website whose
          registered office is [address]. Our company registration number is
          [company registration number and place of registration]. The term
          &#39;you&#39; refers to the user or viewer of our website. The use of
          this website is subject to the following terms of use: The content of
          the pages of this website is for your general information and use
          only. It is subject to change without notice. This website uses
          cookies to monitor browsing preferences. If you do allow cookies to be
          used, the following personal information may be stored by us for use
          by third parties: [insert list of information]. Neither we nor any
          third parties provide any warranty or guarantee as to the accuracy,
          timeliness, performance, completeness or suitability of the
          information and materials found or offered on this website for any
          particular purpose. You acknowledge that such information and
          materials may contain inaccuracies or errors and we expressly exclude
          liability for any such inaccuracies or errors to the fullest extent
          permitted by law. Your use of any information or materials on this
          website is entirely at your own risk, for which we shall not be
          liable. It shall be your own responsibility to ensure that any
          products, services or information available through this website meet
          your specific requirements. This website contains material which is
          owned by or licensed to us. This material includes, but is not limited
          to, the design, layout, look, appearance and graphics. Reproduction is
          prohibited other than in accordance with the copyright notice, which
          forms part of these terms and conditions. All trade marks reproduced
          in this website which are not the property of, or licensed to, the
          operator are acknowledged on the website. Unauthorised use of this
          website may give rise to a claim for damages and/or be a criminal
          offence. From time to time this website may also include links to
          other websites. These links are provided for your convenience to
          provide further information. They do not signify that we endorse the
          website(s). We have no responsibility for the content of the linked
          website(s). Your use of this website and any dispute arising out of
          such use of the website is subject to the laws of England, Northern
          Ireland, Scotland and Wales.
        </Text>
      </View>
      <View style={styles.View_29_722}>
        <View style={styles.View_29_723}>
          <TouchableOpacity
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b8ab/6d98/96ed28086be5766cc510da93ca022c02"
            }}
            style={styles.TouchableOpacity_29_724}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("24_231"))
            }
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2db2/f7c9/c0168a41d90db89b74879f3d54fca9d4"
            }}
            style={styles.ImageBackground_29_728}
          />
          <View style={styles.View_29_729}>
            <Text style={styles.Text_29_729}>Address</Text>
          </View>
        </View>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/118a/06b5/5e2cf854a5721f4c7205b3e3a7bb92eb"
          }}
          style={styles.TouchableOpacity_29_730}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("24_232"))
          }
        />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("180%") },
  View_29_720: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("17%"),
    justifyContent: "center"
  },
  Text_29_720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 29,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_721: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("138%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("40%"),
    justifyContent: "flex-start"
  },
  Text_29_721: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_722: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_29_723: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  TouchableOpacity_29_724: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_29_728: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_29_729: {
    width: wp("61%"),
    minWidth: wp("61%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_29_729: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_29_730: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
