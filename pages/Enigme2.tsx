import {Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import { LayoutChangeEvent } from 'react-native';
import Styles from '../components/styles';

interface Enigme2Props {
    navigation: any;
}

export default class Enigme2 extends React.Component<Enigme2Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    messageViewInfo: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, panne : boolean,message: boolean, commande: string } = { aide: false,panne: false, message: false, commande: "" }

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
            case "message" : this.setState({message:!this.state.message});break;
            case "panne" : this.setState({panne:!this.state.panne});break;
        }
    }

    render() {

        return (
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Enigme 2</Text>
                        <Text style={Styles.texte1}>Bien joué ! tu as désormais accès au tableau de bord, il semblerait qu'il y ait un bouton qui clignote en rouge.</Text>
                        <Text style={Styles.texte2}>le tableau de bord</Text>
                        <TouchableHighlight onPress={() => this.AfficheRes("message")}>
                            <Image
                                style={Styles.tableaudebord}
                                source={require("../assets/SpaceJF_Red.png")}
                            />
                        </TouchableHighlight>
                        <Text style={Styles.console}>la console</Text>
                    </View>

                    <View onLayout={(test) => this.messageViewInfo = test}>
                        <Text selectable={true} style={{ fontSize: 14, color: "lightgreen", marginTop: 15, display: this.state.message ? 'flex' : 'none', }}>
                            70%61%6E%6E%65%63%61%70%74%65%75%72</Text>
                    </View>
                    <View onLayout={(test) => this.messageViewInfo = test}>
                        <Text selectable={true} style={{ fontSize: 14, color: "lightgreen", marginTop: 15, display: this.state.panne ? 'flex' : 'none', }}>
                            Mot de passe : pannecapteur</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande.toLowerCase().replace(/ /g, '') == "pannecapteur") {
                                    this.props.navigation.navigate('Enigme3');
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "unescape(70%61%6e%6e%65%63%61%70%74%65%75%72)") {
                                    this.AfficheRes("panne");
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

                            Pour la deuxième enigme il faut que tu décodes la chaine de caractères en après avoir cliqué sur le bouton rouge.
                            {"\n"}
                            {"\n"}
                            Il existe plusieurs façon de décoder des messages mais ici tu peux remarquer que chaque nombre est entrecoupé
                            de pourcentages (%), les nombres correspondent à des valeurs hexadécimales.
                            {"\n"}
                            {"\n"}
                            Pour décoder le message, tu peux
                            aller sur un site web qui décode des chaines hexadécimales ou bien taper dans la console la commande suivante :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            unescape("le message à decoder")
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            Cette commande permet de décoder n'importe quelle chaine de caractère hexadécimale
                            {"\n"}
                            {"\n"}
                            {"\n"}
                            {"\n"}
                        </Text>
                    </View>


                </ScrollView>
            </View>
        );
    }
}
