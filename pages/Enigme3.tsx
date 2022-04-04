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
    state: { aide: boolean, IP: boolean, com: boolean, commande: string } = { aide: false, IP: false, com: false, commande: "" }

    ChangeEtat = () => {
        if (this.state.aide) {
            this.setState({ aide: false });

        }
        else {
            this.setState({ aide: true });
            this.scrollViewRef?.scrollTo({ y: (this.aideViewInfo?.nativeEvent as any).pageY })
        }
    }

    ChargeIP = () => {
        if (this.state.IP) {
            this.setState({ IP: false });
        }
        else {
            this.setState({ IP: true });
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
                        <Text style={styles.enigme}>Enigme 3</Text>
                        <Text style={styles.texte1}>Très bien, apparemment le problème viendrait d'une panne d'un capteur permettant de garder la bonne trajectoire en direction de la planète Mars, Il faut que tu corriges le bug en donnant une instruction au système</Text>
                        <Text style={styles.texte2}>Tu as accès ici au fichier de commandes du système "command.txt"</Text>
                    </View>
                    <View style={{ justifyContent: "space-around", alignItems: "flex-start", flexDirection: "row", marginTop: 25 }}>
                        <Text selectable={true} style={styles.liste}>assoc{"\n"}at {"\n"}attrib {"\n"}bootcfg {"\n"}chdir
                            {"\n"}chkdsk {"\n"}cls{"\n"}</Text>
                        <Text selectable={true} style={styles.liste}>del {"\n"}dir {"\n"}echo {"\n"}fc {"\n"}fsutil {"\n"}ftype
                            {"\n"}getmac</Text>
                        <Text selectable={true} style={styles.liste}>goto {"\n"}move {"\n"}netsh {"\n"}setstat {"\n"}path {"\n"}pushd</Text>
                    </View>

                    <View>
                        <Text style={styles.texte3}>la console</Text>
                    </View>


                    <View onLayout={(test) => this.IPViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.IP ? 'flex' : 'none', }}>
                        <Text selectable={true} style={styles.ip} >IP : 192.168.1.1</Text>
                    </View>

                    <View onLayout={(test) => this.comViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.com ? 'flex' : 'none', }}>
                        <Text selectable={true} style={styles.ip} >chdir</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande == "nmap 127.0.0.1") {
                                    this.ChargeIP();
                                }
                                else if (this.state.commande == "nmap 192.168.1.1 --script ssh-brute passdb=command.txt") {
                                    this.ChargeCommande();
                                }
                                else if (this.state.commande == "chdir") {
                                    this.props.navigation.navigate('Enigme4');
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
                            Pour cette enigme une liste de commande t'es proposée
                            mais tu ne vas les essayer une par une pour dans le but de trouver la bonne (ou peut-être que si)
                            {"\n"}
                            {"\n"}
                            Sinon tu peux automatiser le processus pour tester les commandes les unes après les autres
                            Cette méthode s'appelle "brute force", par définition on teste les commandes de manière brute sans tri préalable
                            {"\n"}
                            {"\n"}
                            Pour ce faire tu peux utiliser la commande :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            nmap "IP" --script ssh-brute passdb=command.txt
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va permettre de lire le contenu du fichier "command.txt" et tester les commandes du système les unes après les autres
                            jusqu'à ce que la bonne soit trouvée
                            {"\n"}
                            {"\n"}
                            Il faut que tu renseigne l'adresse IP du serveur sur lequel tu vas entrer ces commandes et pour cela
                            tu peux utiliser cette commande qui va te permettre de trouver toutes les adresses détéctées sur le serveur
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            nmap 127.0.0.1
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            A noter que dans les cas d'usages réels cela peut prendre beaucoup de temps puisque les mots de passes comportent beaucoup de caractères
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
        marginLeft: 5,
        marginRight: 5,
        color: "lightgreen",
    },
});