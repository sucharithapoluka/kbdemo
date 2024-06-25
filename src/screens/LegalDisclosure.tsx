import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonStyles } from "../styles/Common";
import Button from "../components/Button";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppTheme } from "../styles/AppTheme";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../models/RootStackParam';

export const LegalDisclosure = () => {
  const navigation: StackNavigationProp<RootStackParamList> = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('legalDisclosureAgreed')
      .then(value => {
        if (value !== null && value === 'true') {
          setIsAgreed(true);
          navigation.navigate('AppAcknowledgement');
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error reading AsyncStorage:', error);
        setIsLoading(false);
      });
  }, []);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleContinue = () => {
    if (isChecked) {
      AsyncStorage.setItem('legalDisclosureAgreed', 'true')
        .then(() => {
          setIsAgreed(true);
          navigation.navigate('AppAcknowledgement');
        })
        .catch(error => {
          console.error('Error storing AsyncStorage:', error);
          setIsLoading(false);
        });
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={AppTheme.colors.surface} />
      </View>
    );
  }

  if (isAgreed) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
        <SafeAreaView style={[CommonStyles.safeContainerStyle]}>
          <Text style={CommonStyles.text}>Legal Disclosure</Text>
        </SafeAreaView>
        <ScrollView contentContainerStyle={{ padding: 8 }}>
          <Text style={styles.formContent}>
            Lorom psu dolor ame. consectetur adipiscing oi sod do lusmod lermpor
            nckddunt i labore of doors Magna alu Vestoulu sed cr non 0c eulmod oa
            of aul fs Viverta Vie congue eu consequat Fron fermentum lo vel orl
            poria non pulvinar Scolersaue varus mobi enim rnc faucibus
            pellentesque i Suspendise ulfces gravida dictum fusce ut placer oct.
            €4 mogris ci parksient mores naicehs fidlulus mus. Eumod lac af ul sus
            Actor eque vow ermpus um polleniesaue nec nom aliquam sem Sem Fngila
            ul mori ncicunt, Mi if amet mous commodo quis mpercel. Cum socls
            naloque penalbus o Locks prin bh nil condimentum, Cros semper auctor
            neque wae fempus quam pellentesque nec. Sed clomentum fomous egestas
            sed Bland curs ss of uivicos mi fompus Amel pus grave aul bland rps
            cursus in Dul uf more lchus sf ame es placer In egestas. Semper iver
            nom 01 uso loots sh omot cursus Non auiom lacus suspondise faucibus.
          </Text>
          <Text style={styles.formContents}>
            ‘Non diam phaselus vestibulum lorem sed risus ulricies fstique: ka,
            Dicum af fmpor commodo ulamcorper Eusmod qu ior nibh 10 pulvinar malts
            nunc. Vonanalscios sod ols oget. Nullam veNicuta Ipsum a aru cursus
            vie, If dul iste. Soliciucin bh 8 ame commodo, Eu sem inlager vias
            uso, Ege! unc aborts malts lua faucibus. Som of forlor conseaqual ota
            bh onan cos Vstbulum orem so sus ulilos uo nulla aku enim, 1d alkuot
            ius fougil in ano metus cum cf Non arcu ius quis varus quom. Nis hous
            malts honeys una neque Wena uso nec. Pelnlesaus dignissim orm amet
            venenatis,
          </Text>
          <Text style={styles.formContents}>
            Via furpis massa sac slemantum tempus. Venenatl cra sed fel 5981 Vio
            suscipit lus mous a nim ou rps sgesios prof Omaro quam ver orc sags ou
            vofpal. Null portlor massa neque akquom vestbulum Vos slementum
            curabius ioe un. En st cre venanc me cursus get run eslariaue (Cros
            ncidunt lobortis feugiat Vivamus of Befend donee prafum Wipulale
            sapien ne sogi aliquam molesuoda bibendum. Pollnfosaue si omat porior
            aget dolor marti non. Cursus ioe ‘congue mais honcus oanean vel at
            scelerisque mauris Voiulpot sed ras omare arcu dul vvamus arcu In
            massa fempr noc ougiot nis. Eu pis egestas proflam aonean Fougil
            vamos. af augue eget arcu dictum varius.
          </Text>
          <Text style={styles.formContents}>
            St amet porttitor eget dolor mori non arcu fieus. St amet masa hao
            tortor condimentum acini cs vol Maeconos accumsan Iocus vel facilis
            volpat Dignissm sspendisse i os ae In nb mats cursus. U risque of
            egesias quis Ips. Ut sem vera ot og0t st amet Commo sed egestas 090s
            Hing Phasellus, Uomeorper cus vestbum sed arcu Toor of auctor ua nun
            id curs mals alum, Rhoncus denean vel ot scelerisque maurs palentesque
            puinor palentesque. Vice iio lo integer molassoca nunc vol sus Uinices
            tincidunt arcu non sodoles neque sodales ul fam. ul rune malts enim
            ufos clomortum sogi. Vike purus ousious omare sispencse sed ri cus.
            tices aique mula ole anim foror of Vl pretium techs quom id.
          </Text>
        </ScrollView>

        <View style={styles.checkBox}>
          {isChecked ? (
            <TouchableOpacity onPress={handleCheckboxToggle}>
              <MaterialCommunityIcons style={[styles.checkIcon, { color: AppTheme.colors.checked_state }]} name="checkbox-marked" size={30} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleCheckboxToggle}>
              <MaterialCommunityIcons style={styles.checkIcon} name="checkbox-blank-outline" size={30} />
            </TouchableOpacity>
          )}
          <Text style={styles.consentText}>
            I agree fo Lorem ipsum dolor sit amet, consectetur
            adipiscing eli, sed do eiusmod fempor incididunt ut labore
            ef dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </Text>
        </View>

        <View style={CommonStyles.signOutSafeContainerStyle}>
          <Button
            title='Continue'
            onPress={handleContinue}
            disabled={!isChecked}
          >
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: AppTheme.colors.surface
  },
  formContent: {
    fontSize: 14,
    color: AppTheme.colors.black
  },
  formContents: {
    fontSize: 14,
    marginTop: 20,
    color: AppTheme.colors.black
  },
  checkBox: {
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 50
  },
  checkIcon: {
    color: AppTheme.colors.black,
    marginRight: 10,
  },
  consentText: {
    fontSize: 14,
    color: AppTheme.colors.black
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
})