import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>GLASOVANJE</Text>
        </View>

        <View style={styles.jumbotron}>
          <View style={styles.leftContainer}>
            <Text style={styles.leftText}>LEFT</Text>
            <Image
              style={styles.Slikice1}
              source={{
                uri: "https://m.vecernji.hr/media/img/2f/da/a05fe71ce690eac4a17e.jpeg",
              }}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.rightText}>RIGHT</Text>

            <Image
              style={styles.Slikice1}
              source={{
                uri: "data:image/jpeg;base64,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",
              }}
            />
          </View>
        </View>

        <View>
          <Text style={styles.headerTitle}>
            KOGA BI VI ODVELI NA FESTIVAL U ČEVLJANOVIĆE?!
          </Text>

          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => Alert.alert("Mileni")}
          >
            <Text style={styles.subTitle}>ZOKI</Text>
          </TouchableOpacity>

          <Text style={styles.textStyle}>
            Zoran Milanović (Zagreb, 30. listopada 1966.) hrvatski je političar
            i pravnik, 10. predsjednik Vlade Republike Hrvatske u službi od
            prosinca 2011. do siječnja 2016. godine te 5. predsjednik Republike
            Hrvatske u službi od veljače 2020. godine. U razdoblju od lipnja
            2007. do studenog 2016. godine obnašao je dužnost predsjednika
            Socijaldemokratske partije. Početkom premijerskog mandata u
            Hrvatskoj je održan uspješan referendum o ulasku Hrvatske u Europsku
            uniju te je ona 1. srpnja 2013. postala 28. članica te zajednice.
            Kraj Milanovićevog mandata obilježen je izbjegličkom krizom koja u
            Hrvatskoj počinje početkom rujna 2015. te Hrvatska postaje glavna
            tranzitna zemlja za izbjeglice iz azijskih i afričkih zemalja koji u
            većini slučajeva nakon prolaska kroz zemlju ulaze u zonu zemalja
            potpisnica Schengenskog sporazuma.
          </Text>

          <TouchableOpacity
            style={styles.touchableContainer}
            onPress={() => Alert.alert("Mica")}
          >
            <Text style={styles.subTitle}>JACA</Text>
          </TouchableOpacity>

          <Text style={styles.textStyle}>
            Godine 1995. postala je potpredsjednica HDZ, a te je godine izabrana
            i u Hrvatski sabor. Potpredsjednicom HDZ-a bila je do 1997. godine.
            Do 2000. obnašala je dužnost potpredsjednice Sabora. Od 1999. do
            2002. predsjednica stranačke Zajednice žena "Katarina Zrinski". U
            Sabor je ponovno ušla 2000., a dvije godine kasnije izabrana je za
            zamjenicu predsjednika HDZ-a na VII. Općem saboru HDZ-a. Na
            parlamentarnim izborima 2003. godine ponovno je izabrana za
            zastupnicu u Hrvatskom saboru u I. izbornoj jedinici (Zagreb), ali
            je svoj mandat stavila u mirovanje jer je imenovana za
            potpredsjednicu Vlade Republike Hrvatske zaduženu za socijalna
            pitanja, te ministricom obitelji, branitelja i međugeneracijske
            solidarnosti. Dužnost potpredsjednice Vlade i ministrice u vladama
            premijera Sanadera obnašala je do 2009. godine. Na predsjedničkim
            izborima 2005. godine, kao kandidatkinja HDZ-a izgubila je u drugom
            krugu od Stjepana Mesića. Nakon ostavke premijera Sanadera, 3.
            srpnja 2009. Predsjednik Republike povjerio joj je mandat za
            sastavljanje Vlade. Dana 6. srpnja 2009. nova Hrvatska vlada na čelu
            s Jadrankom Kosor dobila je povjerenje većine saborskih zastupnika u
            glasovanju na kraju zasjedanja. Vlada RH na čelu s Jadrankom Kosor
            uspješno je završila pregovore za pristup EU, i pripisuje joj
            pokretanje pregovora s mrtve točke nakon dogovora o arbitraži
            pograničnog pitanja sa Slovenijom. Kosor i Borut Pahor postigli su
            dogovor koji je omogućio deblokadu hrvatskih pregovora s EU. U
            predzadnje tromjesečje vlasti Jadranke Kosor zabilježen je ekonomski
            rast. Nekoliko mjeseci nakon odlaska s mjesta predsjednice Vlade RH,
            na stranačkim izborima dana 20. svibnja 2012., u prvome je krugu
            izbora ispala treća, ispod Kujundžića i Karamarka, koji su ušli u
            drugi krug izbora za novog predsjednika HDZ-a. Prije proglašenja
            novog predsjednika, poslije ponoći 20. svibnja, napustila je dvoranu
            Vatroslava Lisinskoga u kojoj su se održavali izbori.
          </Text>
        </View>

        <View style={styles.jumbotron}>
          <View style={styles.leftBtnCon}>
            <Button
              style={styles.Dugmad}
              title="ZOKI"
              onPress={() => Alert.alert("OK izbor")}
            />
          </View>
          <View style={styles.rightBtnCon}>
            <Button
              title="JACA"
              onPress={() => Alert.alert("OK izbor")}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  leftText: {
    textAlign: "left",
    paddingBottom: 25,
    color: "white",
    fontSize: 25,
  },

  rightText: {
    textAlign: "right",
    paddingBottom: 25,
    color: "white",
    fontSize: 25,
  },

  headerTitle: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 30,
    padding: 20,
  },

  subTitle: {
    textAlign: "center",
    paddingTop: 30,
    fontSize: 20,
    padding: 20,
    color: "blue",
    textDecorationLine: "underline",
  },

  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 30,
  },

  leftContainer: {
    padding: 40,
    backgroundColor: "red",
  },
  rightContainer: {
    padding: 40,
    backgroundColor: "blue",
  },

  Slikice1: {
    width: 100,
    height: 100,
    paddingTop: 35,
  },

  // containerSlika: {
  //   flexDirection: 'row',
  //   padding: 10

  // },

  touchableContainer: {
    margin: 20,
    backgroundColor: "white",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    textAlign: "justify",
    padding: 20,
  },

  leftBtnCon: { height: "50%", width: "50%", padding: 5 },
  rightBtnCon: { height: "50%", width: "50%", padding: 5 },
});
