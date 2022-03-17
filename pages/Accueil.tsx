import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert } from 'react-native';
import React from 'react';

export default function App() {

    const accueilSuiv = () => Alert.alert("Accueilsuiv")


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>CybGame</Text>
            </View>

            <View>
                <View style={styles.barre} />
            </View>

            <View>
                <Text style={styles.accueil}>Bienvenue à bord du vaisseau JF-8801</Text>
                <Text style={styles.texte1}>Nous sommes en mission pour aller pour la première fois sur la planète
                    Mars, mais le vaisseau semble ne plus fonctionner correctement.</Text>
                <Text style={styles.texte2}>Tu as été mandaté pour enquêter sur ce qui se passe et éviter l'accident !</Text>
                <Text style={styles.texte3}>Tout au long de la mission tu seras accompagné de CybCog qui pourra t'aider
                    en cas de besoin</Text>
            </View>


            <TouchableOpacity
                onPress={accueilSuiv}>
                <Text style={styles.continuer}>Clique pour continuer</Text>
            </TouchableOpacity>

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

    barre: {
        marginTop: 25,
        width: 300,
        height: 1,
        backgroundColor: "white",

    },

    titre: {
        marginTop: 55,
        color: '#fff',
        fontSize: 32,
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

    continuer: {
        marginTop: 55,
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