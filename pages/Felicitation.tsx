import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated, ScrollView, Image } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Styles from '../components/styles';
import Suivant from '../components/suivant';

interface Enigme3Props {
    navigation: any;
}

export default class Enigme3 extends React.Component<Enigme3Props> {


    scrollViewRef: null | ScrollView = null;
    state: { commande: string } = { commande: "" }


    render() {

        return (
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Félicitation</Text>
                        <Text style={Styles.texte1}>Bravo grâce à toi les astronautes ont pu se poser sur Mars sans encombre. Mais les hackers n'ont pas dit leur dernier mot, dans le prochaine chapitre l'expédition sur Mars risque d'être tourmentée.</Text>
                        <Text style={{ ...Styles.texte2, ...{ alignSelf: "center" } }}>Merci d'avoir joué !</Text>
                    </View>
                    <View>
                        <Image
                            style={{ ...styles.astronaute, ...{ alignSelf: "center" } }}
                            source={require("../assets/astronaute.png")}
                        />

                    </View>


                    <Suivant navigation={this.props.navigation} nom="Accueil" page="Accueil" />


                </ScrollView >
            </View >
        );
    }
}


const styles = StyleSheet.create({

    astronaute: {
        marginLeft: 38,
        marginTop: 55,
        height: 120,
        width: 82,
        paddingHorizontal: 8,
        alignSelf: "flex-start",
    }
});