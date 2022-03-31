import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Suivant from '../components/suivant';


interface Accueil2Props {
    navigation: any;
}

export default function Accueil2(props: Accueil2Props) {

    return (
        <View style={styles.container}>
            <Head />

            <View>
                <Text style={styles.texte1}>Maintenant que tu connais le contexte, il s'agit de passer à l'action !</Text>
                <Text style={styles.texte2}>Tu vas devoir recueillir des informations importantes pour débloquer la situation</Text>
                <Text style={styles.texte3}>Tu auras accès au tableau de bord du vaisseau. Une console sera également à ta disposition lorsque tu devras entrer des lignes de commandes.
                    N'hésite pas à me solliciter si tu as besoin d'aide !</Text>
            </View>


            <Suivant navigation={props.navigation} nom="C'est parti !" page="Enigme1" />

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

    texte1: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },
    texte2: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 35,
        color: '#fff',
        fontSize: 14,
    },

    texte3: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    but: {
        alignItems: "center",
        height: 40,
        width: 85,
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