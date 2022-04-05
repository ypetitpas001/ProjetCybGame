import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import { LayoutChangeEvent } from 'react-native';



interface Enigme1Props {
    navigation: any;
}

export default class Enigme1 extends React.Component<Enigme1Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, commande: string } = { aide: false, commande: "" }

    ChangeEtat = () => {
        if (this.state.aide) {
            this.setState({ aide: false });

        }
        else {
            this.setState({ aide: true });
            this.scrollViewRef?.scrollTo({ y: (this.aideViewInfo?.nativeEvent as any).pageY })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>
                    <View>
                        <Text style={styles.enigme}>Enigme 1</Text>
                        <Text style={styles.texte1}>Tu vas devoir recueillir des informations importantes pour débloquer la situation, tu peux interagir avec les éléments en cliquant dessus</Text>
                        <Text style={styles.texte2}>Voici le tableau de bord</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Enigme1_2')}>
                            <Image
                                style={styles.tableaudebord}
                                source={require("../assets/SpaceJF.png")}
                            />
                        </TouchableHighlight>
                        <Text style={styles.texte3}>et voici la console</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande == "Henry85*") {
                                    this.props.navigation.navigate('Enigme2');
                                }
                                else {
                                    alert(`la commande n'est pas bonne`);
                                }
                                this.setState({ commande: "" });
                            }}
                            value={this.state.commande}
                        />


                    </View>

                    <View>
                        <TouchableOpacity style={styles.but}
                            onPress={() => this.ChangeEtat()}>
                            <Text style={styles.continuer}> Aide </Text>
                        </TouchableOpacity>
                    </View>
                    <View onLayout={(view) => this.aideViewInfo = view}>
                        {/* <Collapsible collapsed={this.state.aide} style={styles.collapse}> */}
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            Pour valider les enigmes il faut que tu trouves un mot de passe et le rentre dans la console.
                            {"\n"}
                            {"\n"}
                            Pour la première enigme il faut que tu te bases sur les informations du commandant de bord du vaisseau
                            que tu retrouveras en cliquant sur l'ordinateur de bord.

                            {"\n"}
                            {"\n"}
                            Souvent les mots de passes sont constitués d'un prénom accompagné d'une série de chiffre (année de naissance par exemple),
                            d'une majuscule et d'un caractère spécial à la fin (par exemple John1978*).
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
    },

    enigme: {
        alignSelf: 'center',
        marginTop: 10,
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
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
        paddingLeft: 8,
        paddingRight: 8,
        alignSelf: "center",
        marginTop: 7,
        backgroundColor: "black",
        height: 65,
        width: 325,
        borderWidth: 2,
        borderColor: "#fff",
        color: "lightgreen",
        fontSize: 20,
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
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },
});