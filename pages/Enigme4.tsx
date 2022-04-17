import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { LayoutChangeEvent } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Styles from '../components/styles';

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
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Enigme 4</Text>
                        <Text style={Styles.texte1}>Parfait tu as trouvé la bonne commande, le vaisseau suit actuellement la bonne trajectoire. Il va falloir que tu assistes les astronautes dans leur phase d'atterrissage. Pour t'aider le bouton de gauche te permet d'effectuer une rotation permettant au vaisseau de bien se positionner pour atterrir.</Text>
                        <Text style={Styles.texte2}>Le tableau de bord :</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Enigme4_2')}>
                            <Image
                                style={Styles.tableaudebord}
                                source={require("../assets/SpaceJF.png")}
                            />
                        </TouchableHighlight>
                    </View>

                    <View>
                        <Text style={Styles.console}>la console</Text>
                    </View>


                    <View onLayout={(test) => this.IPViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.fichier ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >fichier : valeurs.txt</Text>
                    </View>

                    <View onLayout={(test) => this.comViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.com ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >valeur : 455.2</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
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
                        <TouchableOpacity style={Styles.but}
                            onPress={() => this.ChangeEtat()}>
                            <Text style={Styles.continuer}> Aide </Text>
                        </TouchableOpacity>
                    </View>

                    <View onLayout={(view) => this.aideViewInfo = view}>
                        <Text style={{ ...Styles.aide, ...{ marginTop: 50, display: this.state.aide ? 'flex' : 'none', } }}>
                            Après avoir cliqué sur le bouton, 4 codes apparaissent et l'un d'entre eux va te permettre de positionner le vaisseau pour l'atterissage
                            {"\n"}
                            {"\n"}
                            Ici tu dois acceder aux informations de la base de données du vaisseau. Il s'agit de faire des injections de commandes, fréquemment utilisé sur des machines serveurs peu sécurisées.
                            {"\n"}
                            {"\n"}
                            Pour cela je te mets à disposition plusieurs commandes :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numéro";ls
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va te permettre d'afficher tout ce qui est en lien avec le numéro. Par exemple : 3, ls va afficher tous les fichiers relatifs à la puissance du vaisseau.
                            {"\n"}
                            {"\n"}
                            Ensuite il va falloir lire le contenu du fichier pour trouver les informations dont tu as besoin, la commande suivante permet de lire n'importe quel fichier dans une base de données
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numero";cat "ton fichier"
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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