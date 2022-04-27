import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { LayoutChangeEvent } from 'react-native';
import React from 'react';
import Head from '../components/head';

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

    AfficheRes = (param:string) => {
        switch (param) {
            case "fichier" : this.setState({fichier:!this.state.fichier});break;
            case "com" : this.setState({com:!this.state.com});break;
        }
    }

    render() {

        return (
            <View style={styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={styles.enigme}>Enigme 4</Text>
                        <Text style={styles.texte1}>Parfait tu as trouvé la bonne commande, le vaisseau suit actuellement la bonne trajectoire. Il va falloir que tu assistes les astronautes dans leur phase d'atterrissage. Pour t'aider le bouton de gauche te permet d'effectuer une rotation pour que le vaisseau se positionne bien pour atterrir.</Text>
                        <Text style={styles.texte2}>Le tableau de bord :</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Enigme4_2')}>
                            <Image
                                style={styles.tableaudebord}
                                source={require("../assets/SpaceJF.png")}
                            />
                        </TouchableHighlight>
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
                                if (this.state.commande.toLowerCase().replace(/ /g, '') == "1;ls") {
                                    this.AfficheRes("fichier");
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "1;catvaleurs.txt") {
                                    this.AfficheRes("com");
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "455.2") {
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

                    <View onLayout={(view) => this.aideViewInfo = view}>
                        <Text style={{ ...styles.aide, ...{ marginTop: 50, display: this.state.aide ? 'flex' : 'none', } }}>
                            Après avoir cliqué sur le bouton, 4 codes apparaissent et l'un d'entre eux va te permettre de positionner le vaisseau pour l'atterissage
                            {"\n"}
                            {"\n"}
                            Ici tu dois acceder aux informations de la base données du vaisseau. Il s'agit de faire des injections de commandes, fréquemment utilisé sur des machines serveurs peu sécurisées.
                            {"\n"}
                            {"\n"}
                            Pour cela je te mets à disposition plusieurs commandes :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numero";ls
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va te permettre d'afficher tout ce qui est en lien avec le numéro. Par exemple : 3;ls va afficher tous les fichiers relatifs à la puissance du vaisseau.
                            {"\n"}
                            {"\n"}
                            Ensuite il va falloir lire le contenu du fichier pour trouver les informations dont tu as besoin, la commande suivante permet de lire n'importe quel fichier dans une base de données.
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numero";cat "ton fichier"
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Par exemple : 3;cat fichier.txt va lire le contenu du fichier "fichier.txt".
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