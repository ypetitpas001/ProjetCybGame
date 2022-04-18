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
    resValeurs: null | LayoutChangeEvent = null;
    solHash: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, valeurs: boolean, hash: boolean, commande: string } = { aide: false, valeurs: false, hash: false, commande: "" }

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
        if (this.state.valeurs) {
            this.setState({ valeurs: false });
        }
        else {
            this.setState({ valeurs: true });
        }
    }

    ChargeCommande = () => {
        if (this.state.hash) {
            this.setState({ hash: false });
        }
        else {
            this.setState({ hash: true });
        }
    }

    render() {

        return (
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Enigme 5</Text>
                        <Text style={Styles.texte1}>Bien joué ! il ne te reste plus qu'à modifier la puissance des moteurs, pour ce faire tu dois créer un hash (une chaine de caractère) qui n'est compréhensible que par le système. Tu as juste en dessous le hash qui correspond à la vitesse nominale actuelle. Tu as à disposition les valeurs à entrer pour régler la puissance afin d'avoir la bonne vitesse d'atterrissage.</Text>
                        <Text style={Styles.texte2}>Les valeurs de puissance et de vitesse :</Text>
                    </View>

                    <View style={{ marginTop: 15, alignSelf: "center" }}>
                        <Text selectable={true} style={styles.liste}>Landing{"\n"}{"\n"}Nominal speed : 250{"\n"}Power : 1500{"\n"}</Text>
                    </View>

                    <View>
                        <Text style={Styles.console}>la console</Text>
                    </View>


                    <View style={{ marginTop: 14, }}>
                        <Text selectable={true} style={Styles.ip} >e3d182270702a605bd4054c922b66b87</Text>
                    </View>

                    <View onLayout={(test) => this.resValeurs = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.valeurs ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >Resultats : 1700:455.2</Text>
                    </View>

                    <View onLayout={(test) => this.solHash = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.hash ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >21110e3321f952361f93f513e9d4e131</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande.toLowerCase().replace(/ /g, '') == "reversemd5e3d182270702a605bd4054c922b66b87") {
                                    this.ChargeFichier();
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "md5sum1500:250") {
                                    this.ChargeCommande();
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "21110e3321f952361f93f513e9d4e131") {
                                    this.props.navigation.navigate('Enigme6');
                                }
                                else {
                                    alert(`la commande n'est pas bonne `);
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
                            Pour cette enigme il va falloir donner une inscrution au vaisseau avec les nouvelles valeurs en modifiant le hash car c'est le seul moyen que le système comprenne.
                            {"\n"}
                            {"\n"}
                            Le hash correspondant aux valeurs actuelles t'es donné mais pour pouvoir modifier les valeurs il faut que tu le décodes. Mais juste avant il faut comprendre comment fonctionne un hash.
                            {"\n"}
                            {"\n"}
                            Dans les bases de données les mots de passe sont stockées sous forme de chaine de caractères incompréhensibles afin d'éviter des hacks. Le mot de passe avant d'être stocké est transformé est "haché" avec un certain algorithme. Il en existe plusieurs et ici on va utiliser le "md5sum".
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            ReverseMd5 "le hash"
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va te permettre de décoder tous les mots de passe encodés en "md5sum". Par exemple : ReverseMd5 098f6bcd4621d373cade4e832627b4f6 va décoder et renvoyer "test".
                            {"\n"}
                            {"\n"}
                            Ensuite il va falloir modifier les valeurs à entrer dans le vaisseau, la commande suivante permet d'encoder n'importe quelle chaine de caractères en "md5sum"
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            md5sum "les valeurs"
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Par exemple : md5sum test va encoder "test" sous la forme de ce hash : 098f6bcd4621d373cade4e832627b4f6
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