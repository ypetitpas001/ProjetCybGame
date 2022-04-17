import { StyleSheet, Text, View, Image, } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Suivant from '../components/suivant';
import Styles from '../components/styles';

interface AccueilProps {
    navigation: any;
}

export default function Accueil(props: AccueilProps) {


    return (
        <View style={styles.container}>

            <Head />

            <View style={{ marginLeft: 5, marginRight: 5, }}>
                <Text style={Styles.accueil}>Bienvenue à bord du vaisseau JF-8801</Text>
                <Text style={Styles.texte1}>Nous sommes en mission pour aller pour la première fois sur la planète
                    Mars, mais le vaisseau semble ne plus fonctionner correctement.</Text>
                <Text style={Styles.texte2}>Tu as été mandaté pour enquêter sur ce qui se passe et éviter l'accident !</Text>
                <Text style={Styles.texte3}>Tout au long de la mission tu seras accompagné de CybCog qui pourra t'aider
                    en cas de besoin</Text>
            </View>



            <Suivant navigation={props.navigation} nom="Continuer" page="Accueil2" />

            <Image
                style={styles.astronaute}
                source={require("../assets/astronaute.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    astronaute: {
        marginLeft: 38,
        marginTop: 55,
        height: 120,
        width: 82,
        paddingHorizontal: 8,
        alignSelf: "flex-start",
    }
});