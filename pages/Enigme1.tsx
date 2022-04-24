import { Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import { LayoutChangeEvent } from 'react-native';
import Styles from '../components/styles';


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
            <View style={Styles.container}>
                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>
                    <View>
                        <Text style={Styles.enigme}>Enigme 1</Text>
                        <Text style={Styles.texte1}>Tu vas devoir recueillir des informations importantes pour débloquer la situation, tu peux interagir avec les éléments en cliquant dessus.</Text>
                        <Text style={Styles.texte2}>Voici le tableau de bord</Text>
                        <TouchableHighlight onPress={() => this.props.navigation.navigate('Enigme1_2')}>
                            <Image
                                style={Styles.tableaudebord}
                                source={require("../assets/SpaceJF.png")}
                            />
                        </TouchableHighlight>
                        <Text style={Styles.console}>et voici la console</Text>
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
                                else if (this.state.commande == "JF-8801") {
                                    this.props.navigation.navigate('Enigme5');
                                }

                                else {
                                    alert(`Le mot de passe n'est pas correct`);
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

                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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

                    </View>

                </ScrollView>
            </View>
        );
    }
}