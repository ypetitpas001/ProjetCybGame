import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TouchableOpacityComponent } from 'react-native';
import React from 'react';

interface Accueil2Props {
    navigation: any;
}

export default function Accueil2(props: Accueil2Props) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>CybGame</Text>
            </View>

            <View>
                <View style={styles.barre} />
            </View>

            <View>
                <Text style={styles.texte1}>Maintenant que tu connais le contexte, il s'agit de passer à l'action !</Text>
                <Text style={styles.texte2}>Tu vas devoir recueillir des informations importantes pour débloquer la situation</Text>
                <Text style={styles.texte3}>Tu auras accès au tableau de bord du vaisseau. Une console sera également à ta disposition lorsque tu devras entrer des lignes de commandes.
                    N'hésite pas à me solliciter si tu as besoin d'aide !</Text>
            </View>


            <TouchableOpacity
                onPress={() => props.navigation.navigate('Enigme1')}>
                <Text style={styles.continuer}>C'est parti !</Text>
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
        marginTop: 10,
        color: '#fff',
        fontSize: 32,
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