import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput, TouchableHighlight } from 'react-native';
import React from 'react';

interface Enigme1Props {
    navigation: any;
}

export default function Enigme1(props: Enigme1Props) {

    const [commande, setCommande] = React.useState("");

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titre}>CybGame</Text>
            </View>

            <View>
                <View style={styles.barre} />
            </View>

            <View>
                <Text style={styles.texte1}>Tu vas devoir recueillir des informations importantes pour débloquer la situation, tu peux interagir avec les éléments en cliquant dessus</Text>
                <Text style={styles.texte2}>Voici le tableau de bord</Text>
                <TouchableHighlight onPress={() => props.navigation.navigate('Enigme1_2')}>
                    <Image
                        style={styles.tableaudebord}
                        source={require("../assets/tableaudebord.png")}
                    />
                </TouchableHighlight>
                <Text style={styles.texte3}>et voici la console</Text>
            </View>

            <View>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='green'
                    placeholder="Commandes"

                    onChangeText={(value) => setCommande(value)}
                    onSubmitEditing={() => {
                        if (commande == "oui") {
                            alert(`la commande est : ${commande}`);
                        }
                        else {
                            alert(`la commande n'est pas bonne`);
                        }
                        setCommande("");
                    }}
                    value={commande}

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
        marginLeft: 5,
        marginTop: 25,
        color: '#fff',
        fontSize: 14,
    },
    texte2: {
        marginLeft: 5,
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

    valider: {
        color: '#fff',
        fontSize: 14,
        marginTop: 25,
    },
});