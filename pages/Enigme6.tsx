import { StyleSheet, Text, View, TouchableOpacity, TextInput, Animated, ScrollView, Image, } from 'react-native';
import { LayoutChangeEvent } from 'react-native';
import React from 'react';
import Head from '../components/head';
import Styles from '../components/styles';
import ImageZoom from 'react-native-image-pan-zoom';

interface Enigme3Props {
    navigation: any;
}

export default class Enigme3 extends React.Component<Enigme3Props> {

    aideViewInfo: null | LayoutChangeEvent = null;
    resValeurs: null | LayoutChangeEvent = null;
    solHash: null | LayoutChangeEvent = null;
    scrollViewRef: null | ScrollView = null;
    state: { aide: boolean, commande: string } = { aide: false, commande: "" }
    scale = new Animated.Value(1);

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
                        <Text style={Styles.enigme}>Enigme 6</Text>
                        <Text style={Styles.texte1}>Bravo le vaisseau est en train d'atterrir et tout se déroule à la perfection. Les astronautes te remercient pour ton aide précieuse, il reste une dernière tâche à accomplir, ouvrir la porte qui mène à l'extérieur. Sur la porte les hackers ont laissé une image, qui va certainement t'aider pour trouver le mot de passe.</Text>

                    </View>
                    <View>
                        <ImageZoom style={{ alignSelf: "center" }}

                            cropWidth={300}
                            cropHeight={250}
                            imageWidth={300}
                            imageHeight={200}
                            pinchToZoom={true}>
                            <Image style={{ ...styles.img, }}
                                source={require("../assets/ch3.png")} />
                        </ImageZoom>
                    </View>

                    <View>
                        <Text style={Styles.console}>la console</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande.toLowerCase().replace(/ /g, '') == "bravo") {
                                    this.props.navigation.navigate('Felicitation');
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
                            Observe bien et n'hesite pas à zoomer :)
                            {"\n"}
                            {"\n"}
                            Le but de cette énigme s'inspire de la stéganographie qui est une forme de dissimulation d'information dans le but de transmettre
                            un message de manière inaperçue. Dans la réalité le message se trouve dans les méta-données de l'image mais ici 
                            tu as juste besoin de parcourir l'image afin de trouver le message caché.
                        </Text>
                    </View>


                </ScrollView >
            </View >
        );
    }
}


const styles = StyleSheet.create({

    img: {
        width: 300,
        height: 200,
        marginTop: 15,
        paddingHorizontal: 8,
        alignSelf: "center",
    },
});

