import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  _View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const App = () => {
  return (
    <View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerContainer}>
          <Image
            source={require("./assets/logo-imdb-transparent-blanc.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.heroContainer}>
          <Text style={[styles.text, styles.container1]}>Interstellar</Text>
          <Text style={[styles.fadedText, styles.container3]}>
            2014 PG-13 2h 49min Adventure, Drama, Sci-Fi
          </Text>
        </View>

        <View style={styles.coverContainer}>
          <Image
            source={require("./assets/film.jpg")}
            style={[styles.cover, styles.container2]}
            resizeMode="cover"
          />
          <View>
            <Text style={[styles.text, styles.container4]}>
              A team of explorers travel through a wormhole in space in an
              attempt to ensure humanity's survival.
            </Text>
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.8}
              onPress={() => {
                console.log("pressed !");
              }}
            >
              <Text style={styles.btnText}>+ ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.iconsContainer}>
          <View style={[styles.iconContainer, styles.marginDefault]}>
            <FontAwesome name="star" size={24} color="gold" />
            <Text style={[styles.rate, styles.topSpace]}>
              8.6<Text style={styles.rateEnd}>/10</Text>
            </Text>

            <Text style={styles.fadedText}>1.1M</Text>
          </View>

          <View style={[styles.iconContainer, styles.marginDefault]}>
            <FontAwesome name="star-o" size={24} color="white" />
            <Text style={[styles.text, styles.bold, styles.topSpace2]}>
              RATE THIS
            </Text>
          </View>

          <View style={styles.iconContainer}>
            <Text style={[styles.text, styles.metascore]}>74</Text>
            <Text style={[styles.text, styles.topSpace]}>Metascore</Text>
            <Text style={styles.fadedText}>46 critic reviews</Text>
          </View>
        </View>

        <View style={{ height: 20, backgroundColor: "black" }}></View>

        <View style={styles.actorsContainer}>
          <Text style={[styles.text, styles.container1]}>Top Billed Cast</Text>
          <Text style={styles.textLink}>SEE ALL</Text>
        </View>

        <View style={styles.actorsContainer}>
          <ScrollView horizontal={true} style={styles.gallery}>
            <View>
              <Image
                source={require("./assets/matthew.jpg")}
                style={styles.actorCard}
                resizeMode="cover"
              />
              <Text style={[styles.text, styles.limit]} numberOfLines={1}>
                Matthew McConaughey
              </Text>
              <Text style={styles.fadedText}>Cooper</Text>
            </View>

            <View>
              <Image
                source={require("./assets/anne.jpg")}
                style={styles.actorCard}
                resizeMode="cover"
              />
              <Text style={[styles.text, styles.limit]} numberOfLines={1}>
                Anne Hathaway
              </Text>
              <Text style={styles.fadedText}>Brand</Text>
            </View>

            <View>
              <Image
                source={require("./assets/jessica.jpg")}
                style={styles.actorCard}
                resizeMode="cover"
              />
              <Text style={[styles.text, styles.limit]} numberOfLines={1}>
                Jessica Chastain
              </Text>
              <Text style={styles.fadedText}>Murph</Text>
            </View>

            <View>
              <Image
                source={require("./assets/mackenzie.jpg")}
                style={styles.actorCard}
                resizeMode="cover"
              />
              <Text style={[styles.text, styles.limit]} numberOfLines={1}>
                Mackenzie Foy
              </Text>
              <Text style={styles.fadedText}>Young Murph</Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles.creditsContainer}>
          <Text style={styles.text}>Director</Text>
          <Text style={styles.fadedText}>Christopher Nolan</Text>
          <Text style={[styles.text, styles.topSpace3]}>Writers</Text>
          <Text style={[styles.fadedText, styles.botSpace]}>
            Jonathan Nolan (written by) and Christopher Nolan (written by)
          </Text>
        </View>
      </ScrollView>

      {/* <View style={styles.container}> */}
      <StatusBar style="light" backgroundColor="black" />
      {/* </View> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: Constants.statusBarHeight,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 80,
    width: 80,
    marginLeft: 20,
  },
  text: {
    color: "#fff",
  },
  headerContainer: {
    height: 80,
    backgroundColor: "#5C5C5C",
  },
  cover: {
    height: 150,
    width: 90,
    marginRight: 20,
  },
  coverContainer: {
    backgroundColor: "#212121",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  heroContainer: {
    backgroundColor: "#212121",
  },
  container1: {
    marginLeft: 20,
    marginBottom: 5,
    // marginTop: 20,
    fontSize: 30,
  },
  container2: {
    margin: 20,
  },
  container3: {
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 5,
  },
  container4: {
    marginTop: 20,
    paddingRight: 150,
  },
  btn: {
    backgroundColor: "#0277BD",
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    width: 240,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
  },
  iconsContainer: {
    backgroundColor: "#212121",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: "center",
  },
  marginDefault: {
    marginLeft: 20,
  },
  metascore: {
    backgroundColor: "#63C650",
    padding: 3,
  },
  fadedText: {
    color: "#AFAFAF",
  },
  bold: {
    fontWeight: "bold",
  },
  rate: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
  rateEnd: {
    color: "#AFAFAF",
    fontSize: 14,
  },
  topSpace: {
    marginTop: 5,
  },
  topSpace2: {
    marginTop: 7,
  },
  topSpace3: {
    marginTop: 15,
  },
  botSpace: {
    marginBottom: 50,
  },
  textLink: {
    color: "#0277BD",
    fontSize: 15,
    marginTop: 20,
    marginRight: 15,
    fontWeight: "bold",
  },
  actorsContainer: {
    backgroundColor: "#212121",
    flexDirection: "row",
    paddingBottom: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  actorCard: {
    height: 200,
    width: 120,
    marginRight: 10,
    backgroundColor: "#2A2A2A",
  },
  gallery: {
    flexDirection: "row",
    width: 110,
    paddingLeft: 20,
  },
  limit: {
    width: 115,
  },
  creditsContainer: {
    backgroundColor: "#212121",
    paddingTop: 20,
    paddingLeft: 20,
  },
});
