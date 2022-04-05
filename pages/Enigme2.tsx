import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import React from 'react';
import Head from '../components/head';
import { LayoutChangeEvent } from 'react-native';

interface Enigme2Props {
    navigation: any;
}

export default class Enigme2 extends React.Component<Enigme2Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    messageViewInfo: null | LayoutChangeEvent = null;
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

    ChargeMessage = () => {
        if (this.state.message) {
            this.setState({ message: false });
        }
        else {
            this.setState({ message: true });
        }
    }

    render() {

        return (
            <View style={styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={styles.enigme}>Enigme 2</Text>
                        <Text style={styles.texte1}>Bien joué ! tu as désormais accès au tableau de bord, il semblerait qu'il y ait un bouton qui clignote en rouge.</Text>
                        <Text style={styles.texte2}>le tableau de bord</Text>
                        <TouchableHighlight onPress={() => this.ChargeMessage()}>
                            <Image
                                style={styles.tableaudebord}
                                source={require("../assets/SpaceJF_Red.png")}
                            />
                        </TouchableHighlight>
                        <Text style={styles.texte3}>la console</Text>
                    </View>

                    <View onLayout={(test) => this.messageViewInfo = test}>
                        <Text selectable={true} style={{ fontSize: 14, color: "lightgreen", marginTop: 15, display: this.state.message ? 'flex' : 'none', }}>
                            70%61%6E%6E%65%63%61%70%74%65%75%72</Text>
                    </View>

                    <View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande == "pannecapteur") {
                                    this.props.navigation.navigate('Enigme3');
                                }
                                else if (this.state.commande == "unescape('70%61%6E%6E%65%63%61%70%74%65%75%72')") {
                                    alert(`pannecapteur`);
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

                            Pour la deuxième enigme il faut que tu décodes la chaine de caractères en après avoir cliqué sur le bouton rouge.
                            {"\n"}
                            {"\n"}
                            Il existe plusieurs façon de décoder des messages mais ici tu peux remarquer que chaque nombre est entrecoupé
                            de pourcentages (%) les nombres correspondent à des valeurs hexadécimales.
                            {"\n"}
                            {"\n"}
                            Pour décoder le message, tu peux
                            aller sur un site web qui décode des chaines hexadécimales ou bien taper dans la console la commande suivante :
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={{ ...styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            unescape('le message à decoder')
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text style={{ ...styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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
        alignSelf: 'center',
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