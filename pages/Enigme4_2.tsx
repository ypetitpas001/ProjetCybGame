import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { LayoutChangeEvent } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Aide from '../components/aide';

interface Enigme3Props {
    navigation: any;
}

export default class Enigme3 extends React.Component<Enigme3Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    IPViewInfo: null | LayoutChangeEvent = null;
    comViewInfo: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, fichier: boolean, com: boolean, commande: string } = { aide: false, fichier: false, com: false, commande: "" }

    ChangeEtat = () => {
        if (this.state.aide) {
            this.setState({ aide: false });

        }
        else {
            this.setState({ aide: true });
            this.scrollViewRef?.scrollTo({ y: (this.aideViewInfo?.nativeEvent as any).pageY })
        }
    }

    ChargeFichier = () => {
        if (this.state.fichier) {
            this.setState({ fichier: false });
        }
        else {
            this.setState({ fichier: true });
        }
    }

    ChargeCommande = () => {
        if (this.state.com) {
            this.setState({ com: false });
        }
        else {
            this.setState({ com: true });
        }
    }

    render() {

        return (
            <View style={styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={styles.enigme}>Enigme 4</Text>
                        <Text style={styles.texte1}>Tu vas devoir modifier les valeurs à la main, les données sont stockées dans le serveur du vaisseau, tu dois les retrouver. Tu as à disposition les codes qui te permettent de faire une requête au serveur.</Text>
                        <Text style={styles.texte2}>Les codes :</Text>
                    </View>
                    <View style={{ marginTop: 15, alignSelf: "center" }}>
                        <Text selectable={true} style={styles.liste}>1   Position check{"\n"}2   CAP check{"\n"}3   Power Check {"\n"}4   Sensors check {"\n"}</Text>
                    </View>

                    <View>
                        <Text style={styles.texte3}>la console</Text>
                    </View>


                    <View onLayout={(test) => this.IPViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.fichier ? 'flex' : 'none', }}>
                        <Text selectable={true} style={styles.ip} >fichier : valeurs.txt</Text>
                    </View>

                    <View onLayout={(test) => this.comViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.com ? 'flex' : 'none', }}>
                        <Text selectable={true} style={styles.ip} >valeur : 455.2</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande == "1; ls" || this.state.commande == "1;ls") {
                                    this.ChargeFichier();
                                }
                                else if (this.state.commande == "1;cat valeurs.txt" || this.state.commande == "1; cat valeurs.txt") {
                                    this.ChargeCommande();
                                }
                                else if (this.state.commande == "455.2") {
                                    this.props.navigation.navigate('Enigme5');
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
                    {/*
                        <Aide texte={`Pour valider les enigmes il faut que tu trouves un mot de passe et le rentre dans la console.
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
                            {"\n"}`} />
                        */}
                    <View onLayout={(view) => this.aideViewInfo = view}>
                        <Text style={{ ...styles.aide, ...{ marginTop: 50, display: this.state.aide ? 'flex' : 'none', } }}>
                            Après avoir cliqué sur le bouton, 4 codes apparaissent et l'un d'entre eux va te permettre de positionner le vaisseau pour l'atterissage
                            {"\n"}
                            {"\n"}
                            Ici tu dois acceder aux informations de la base données du vaisseau. Il s'agit de faire des injections de commandes, fréquemment utilisé sur des machines serveurs peu sécurisées.
                            {"\n"}
                            {"\n"}
                            Pour cela je te mets à dispositions plusieurs commandes :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numéro";ls
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va te permettre d'afficher tout ce qui est en lien avec le numéro. Par exemple : 3, ls va afficher tous les fichiers relatifs à la puissance du vaisseau.
                            {"\n"}
                            {"\n"}
                            Ensuite il va falloir lire le contenu du fichier pour trouver les informations dont tu as besoin, la commande suivante permet de lire n'importe quel fichier dans une base de données
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numero";cat "ton fichier"
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Par exemple : 3; cat fichier.txt va lire le contenu du fichier "fichier.txt".
                            {"\n"}
                            {"\n"}
                        </Text>
                    </View>


                </ScrollView >
            </View >
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

    liste: {
        fontSize: 14,
        color: "lightgreen",
        marginLeft: 5,
    },

    ip: {
        fontSize: 14,
        color: "lightgreen",
    },

    input: {
        alignSelf: "center",
        paddingLeft: 8,
        paddingRight: 8,
        marginTop: 5,
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
        marginLeft: 5,
        marginRight: 5,
        color: "#fff",
    },
    aideCom: {
        alignSelf: "center",
        marginLeft: 5,
        marginRight: 5,
        color: "lightgreen",
    },
});