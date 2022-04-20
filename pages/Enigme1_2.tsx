import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import { LayoutChangeEvent } from 'react-native';
import Styles from '../components/styles';

interface Enigme1_2Props {
    navigation: any;
}

export default class Enigme2 extends React.Component<Enigme1_2Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, message: boolean, commande: string } = { aide: false, message: false, commande: "" }

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
            <View style={Styles.container}>
                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>
                    <View>
                        <Text style={Styles.enigme}>Enigme 1</Text>
                        <Text style={Styles.texte1}>Pour pouvoir actionner des boutons du tableau de bord il faut que tu te connectes en mode administrateur, voici les informations dont tu disposes pour trouver le mot de passe</Text>
                        <Text style={Styles.texte2}>ID card :</Text>
                        <Image
                            style={styles.carte}
                            source={require("../assets/info.png")}
                        />
                        <Text style={Styles.console}>la console</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande == "Henry85*") {
                                    this.props.navigation.navigate('Enigme2');
                                }
                                else {
                                    alert(`Le mot de passe n'est pas correct`);
                                }
                                this.setState({ commande: "" });
                            }}
                            value={this.state.commande}

                        />
                    </View>


                    <View >
                        <TouchableOpacity style={Styles.but}
                            onPress={() => this.ChangeEtat()}>
                            <Text style={Styles.continuer}> Aide </Text>
                        </TouchableOpacity>
                    </View>
                    <View onLayout={(view) => this.aideViewInfo = view}>
                        {/* <Collapsible collapsed={aide} style={styles.collapse}> */}
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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
}

const styles = StyleSheet.create({

    carte: {
        marginTop: 15,
        height: 150,
        width: 330,
        paddingHorizontal: 8,
        alignSelf: "center",
    },
});