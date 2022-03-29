import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import Head from '../components/head';

interface Enigme1Props {
    navigation: any;
}

export default function Enigme1_2(props: Enigme1Props) {

    const [commande, setCommande] = React.useState("");

    return (
        <View style={styles.container}>
            <Head />

            <View>
                <Text style={styles.texte1}>Pour pouvoir actionner des boutons du tableau de bord il faut que tu te connecte en mode administrateur, voici les informations dont tu disposes pour trouver le mot de passe</Text>
                <Text style={styles.texte2}>ID card :</Text>
                <Image
                    style={styles.tableaudebord}
                    source={require("../assets/idcard.jpg")}
                />
                <Text style={styles.texte3}>la console</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='green'
                    placeholder="Commandes"

                    onChangeText={(value) => setCommande(value)}
                    onSubmitEditing={() => {
                        if (commande == "oui") {
                            props.navigation.navigate('Enigme2');
                        }
                        else {
                            alert(`la commande n'est pas bonne`);
                        }
                        setCommande("");
                    }}
                    value={commande}

                />
            </View>
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
        backgroundColor: "black",
        height: 100,
        width: 325,
        borderWidth: 2,
        borderColor: "#fff",
    },

    but: {
        alignSelf: "flex-end",
        marginRight: 25,
    },
});