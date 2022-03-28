import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Suivant from '../components/suivant';

interface AccueilProps {
    navigation: any;
}

export default function Accueil(props: AccueilProps) {


    return (
        <View style={styles.container}>

            <Head />

            <View style={{ marginLeft: 5, marginRight: 5, }}>
                <Text style={styles.accueil}>Bienvenue à bord du vaisseau JF-8801</Text>
                <Text style={styles.texte1}>Nous sommes en mission pour aller pour la première fois sur la planète
                    Mars, mais le vaisseau semble ne plus fonctionner correctement.</Text>
                <Text style={styles.texte2}>Tu as été mandaté pour enquêter sur ce qui se passe et éviter l'accident !</Text>
                <Text style={styles.texte3}>Tout au long de la mission tu seras accompagné de CybCog qui pourra t'aider
                    en cas de besoin</Text>
            </View>



            <Suivant navigation page="Accueil2" />

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


    accueil: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
        alignSelf: "center",
    },
    texte1: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },
    texte2: {
        marginTop: 35,
        color: '#fff',
        fontSize: 14,
    },

    texte3: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    but: {
        alignItems: "center",
        height: 40,
        width: 80,
        marginTop: 55,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
    },

    continuer: {
        marginTop: 7,
        color: '#fff',
        fontSize: 14,
    },

    astronaute: {
        marginLeft: 20,
        marginTop: 55,
        height: 120,
        width: 82,
        paddingHorizontal: 8,
        alignSelf: "flex-start",
    }
});