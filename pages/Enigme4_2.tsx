import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
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

    AfficheRes = (param:string) => {
        switch (param) {
            case "fichier" : this.setState({fichier:!this.state.fichier});break;
            case "com" : this.setState({com:!this.state.com});break;
        }
    }

    render() {

        return (
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Enigme 4</Text>
                        <Text style={Styles.texte1}>Tu vas devoir modifier les valeurs à la main, les données sont stockées dans le serveur du vaisseau, tu dois les retrouver. Tu as à disposition les codes qui te permettent de faire une requête au serveur.</Text>
                        <Text style={Styles.texte2}>Les codes :</Text>
                    </View>
                    <View style={{ marginTop: 15, alignSelf: "center" }}>
                        <Text selectable={true} style={styles.liste}>1   Position check{"\n"}2   CAP check{"\n"}3   Power Check {"\n"}4   Sensors check {"\n"}</Text>
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
                            Ici tu dois acceder aux informations de la base données du vaisseau. Il s'agit de faire des injections de commandes, fréquemment utilisé sur des machines serveurs peu sécurisées.
                            {"\n"}
                            {"\n"}
                            Pour cela je te mets à disposition plusieurs commandes :
                            {"\n"}
                            {"\n"}
                        </Text>

                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numéro"; ls
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va te permettre d'afficher tout ce qui est en lien avec le numéro. Par exemple : 3;ls va afficher tous les fichiers relatifs à la puissance du vaisseau.
                            {"\n"}
                            {"\n"}
                            Ensuite il va falloir lire le contenu du fichier pour trouver les informations dont tu as besoin, la commande suivante permet de lire n'importe quel fichier dans une base de données.
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            "numero"; cat "ton fichier"
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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

    liste: {
        fontSize: 14,
        color: "lightgreen",
        marginLeft: 5,
    },
});