import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Collapsible from 'react-native-collapsible';

interface Enigme1Props {
    navigation: any;
}

export default function Enigme1_2(props: Enigme1Props) {

    const [aide, setState] = React.useState(true);

    const ChangeEtat = () => {
        if (aide) {
            setState(false);
        }
        else {
            setState(true);
        }
    }

    const [commande, setCommande] = React.useState("");

    return (
        <View style={styles.container}>
            <Head />
            <ScrollView>
                <View>
                    <Text style={styles.texte1}>Pour pouvoir actionner des boutons du tableau de bord il faut que tu te connecte en mode administrateur, voici les informations dont tu disposes pour trouver le mot de passe</Text>
                    <Text style={styles.texte2}>ID card :</Text>
                    <Image
                        style={styles.tableaudebord}
                        source={require("../assets/info.png")}
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


                <View>
                    <TouchableOpacity style={styles.but}
                        onPress={() => ChangeEtat()}>
                        <Text style={styles.continuer}> Aide </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Collapsible collapsed={aide} style={styles.collapse}>
                        <Text style={styles.aide}>
                            Tout d'abord pour valider l'énigme il faut que tu trouves un mot de passe
                            Pour valider les enigmes il te suffit de rentrer le mot de passe dans la console.

                            Pour l'énigme 1 il faut que tu te bases sur les informations du commandant de bord du vaisseau
                            Que tu retrouveras en cliquant sur l'ordinateur de bord.
                            Souvent les mots de passes sont constitués d'un prénom accompagné d'une série de chiffre (année de naissance par exemple),
                            d'une majuscule et d'un caractère spécial à la fin (par exemple John234*).
                        </Text>
                    </Collapsible>

                </View>
            </ScrollView>
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
        height: 150,
        width: 330,
        paddingHorizontal: 8,
        alignSelf: "center",
    },

    texte3: {
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },

    input: {
        alignSelf: "center",
        marginTop: 7,
        backgroundColor: "black",
        height: 100,
        width: 325,
        borderWidth: 2,
        borderColor: "#fff",
    },

    but: {
        alignSelf: "center",
        height: 40,
        width: 80,
        marginTop: 35,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff",
    },

    continuer: {
        alignSelf: "center",
        marginTop: 7,
        color: '#fff',
        fontSize: 14,
    },

    collapse: {
        marginTop: 7,
    },

    aide: {
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },
});