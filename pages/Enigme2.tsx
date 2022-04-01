import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';

interface Enigme1Props {
    navigation: any;
}

export default function Enigme1(props: Enigme1Props) {

    const [commande, setCommande] = React.useState("");

    const [aide, setState] = React.useState(false);

    const ChangeEtat = () => {
        if (aide) {
            setState(false);
        }
        else {
            setState(true);
        }
    }

    return (
        <View style={styles.container}>

            <Head />
            <ScrollView>

            
            <View>
            <Text style={styles.enigme}>Enigme 2</Text>
                <Text style={styles.texte1}>Bien joué ! tu as désormais accès au tableau de bord, il semblerait qu'il y ait un bouton qui clignote en rouge.</Text>
                <Text style={styles.texte2}>le tableau de bord</Text>
                <TouchableHighlight onPress={() => props.navigation.navigate('Enigme1_2')}>
                    <Image
                        style={styles.tableaudebord}
                        source={require("../assets/SpaceJF_Red.png")}
                    />
                </TouchableHighlight>
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

            <View>
                    <TouchableOpacity style={styles.but}
                        onPress={() => ChangeEtat()}>
                        <Text style={styles.continuer}> Aide </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {/* <Collapsible collapsed={aide} style={styles.collapse}> */}
                    <Text style={{...styles.aide,...{ display:aide? 'flex':'none',}}}>
                            Pour valider les enigmes il faut que tu trouves un mot de passe et le rentre dans la console.
                            {"\n"}
                            {"\n"}
                            Pour la première enigme il faut que tu te bases sur les informations du commandant de bord du vaisseau
                            que tu retrouveras en cliquant sur l'ordinateur de bord.

                            {"\n"}
                            {"\n"}
                            Souvent les mots de passes sont constitués d'un prénom accompagné d'une série de chiffre (année de naissance par exemple),
                            d'une majuscule et d'un caractère spécial à la fin (par exemple John234*).
                            {"\n"}
                            {"\n"}
                            Bon courage !
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                        </Text>
                    {/* </Collapsible> */}

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

    enigme:{
        alignSelf:'center',
        marginTop:10,
        color:'#fff',
        fontSize:14,
        fontWeight:'bold',
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
        marginTop: 5,
        backgroundColor: "black",
        height: 100,
        width: 325,
        borderWidth: 2,
        borderColor: "#fff",
        color:"green",
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
        marginTop:50,
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },
});