import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import React from 'react';

export default function Enigme1_2() {


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>CybGame</Text>
            </View>

            <View>
                <View style={styles.barre} />
            </View>

            <View>
                <Text style={styles.texte1}>Pour pouvoir actionner des boutons du tableau de bord il faut que tu te connecte en mode administrateur, voici les informations dont tu disposes pour trouver le mot de passe</Text>
                <Text style={styles.texte2}>ID card :</Text>
                <Image
                    style={styles.tableaudebord}
                    source={require("../assets/idcard.jpg")}
                />
                <Text style={styles.texte3}>et voici la console</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    value={'essai : '}
                    placeholder="Commandes"
                />
            </View>


            <TouchableOpacity style={styles.but}>
                <Text style={styles.valider}>Valider</Text>
            </TouchableOpacity>
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


    tableaudebord: {
        marginTop: 15,
        height: 200,
        width: 300,
        paddingHorizontal: 8,
        alignSelf: "center",
    },

    texte3: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    input: {
        backgroundColor: "white",
        height: 100,
        width: 350,
    },

    but: {
        alignSelf: "flex-end",
        marginRight: 25,
    },

    valider: {
        color: '#fff',
        fontSize: 14,
        marginTop: 25,
    },
});