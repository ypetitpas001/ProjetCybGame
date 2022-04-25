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

    AfficheRes = (param:string) => {
        switch (param) {
            case "IP" : this.setState({IP:!this.state.IP});break;
            case "com" : this.setState({com:!this.state.com});break;
        }
    }

    render() {

        return (
            <View style={Styles.container}>

                <Head />
                <ScrollView ref={(ref => this.scrollViewRef = ref)}>


                    <View>
                        <Text style={Styles.enigme}>Enigme 3</Text>
                        <Text style={Styles.texte1}>Très bien, apparemment le problème viendrait d'une panne d'un capteur permettant de garder la bonne trajectoire en direction de la planète Mars, Il faut que tu corriges le bug en donnant une instruction au système</Text>
                        <Text style={Styles.texte2}>Tu as accès ici au fichier de commandes du système "command.txt"</Text>
                    </View>
                    <View style={{ justifyContent: "space-around", alignItems: "flex-start", flexDirection: "row", marginTop: 25 }}>
                        <Text selectable={true} style={styles.liste}>assoc{"\n"}at {"\n"}attrib {"\n"}bootcfg {"\n"}chdir
                            {"\n"}chkdsk {"\n"}cls{"\n"}</Text>
                        <Text selectable={true} style={styles.liste}>del {"\n"}dir {"\n"}echo {"\n"}fc {"\n"}fsutil {"\n"}ftype
                            {"\n"}getmac</Text>
                        <Text selectable={true} style={styles.liste}>goto {"\n"}move {"\n"}netsh {"\n"}setstat {"\n"}path {"\n"}pushd</Text>
                    </View>

                    <View>
                        <Text style={Styles.console}>la console</Text>
                    </View>


                    <View onLayout={(test) => this.IPViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.IP ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >IP : 192.168.1.1</Text>
                    </View>

                    <View onLayout={(test) => this.comViewInfo = test} style={{ marginTop: 14, flexDirection: "row", display: this.state.com ? 'flex' : 'none', }}>
                        <Text selectable={true} style={Styles.ip} >Mot de passe : chdir</Text>
                    </View>

                    <View>
                        <TextInput
                            style={Styles.input}
                            placeholderTextColor='lightgreen'
                            placeholder="Commandes"

                            onChangeText={(value) => this.setState({ commande: value })}
                            onSubmitEditing={() => {
                                if (this.state.commande.toLowerCase() == "nmap 127.0.0.1") {
                                    this.AfficheRes("IP");
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "nmap192.168.1.1--scriptssh-brutepassdb=command.txt") {
                                    this.AfficheRes("com");
                                }
                                else if (this.state.commande.toLowerCase().replace(/ /g, '') == "chdir") {
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
                        <TouchableOpacity style={Styles.but}
                            onPress={() => this.ChangeEtat()}>
                            <Text style={Styles.continuer}> Aide </Text>
                        </TouchableOpacity>
                    </View>

                    <View onLayout={(view) => this.aideViewInfo = view}>
                        <Text style={{ ...Styles.aide, ...{ marginTop: 50, display: this.state.aide ? 'flex' : 'none', } }}>
                            Pour cette enigme une liste de commande t'es proposée
                            mais tu ne vas pas les essayer une par une pour trouver la bonne (ou peut-être que si)
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
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            nmap "IP" --script ssh-brute passdb=command.txt
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            {"\n"}
                            {"\n"}
                            Cette commande va permettre de lire le contenu du fichier "command.txt" et tester les commandes du système les unes après les autres
                            jusqu'à ce que la bonne soit trouvée
                            {"\n"}
                            {"\n"}
                            Il faut que tu renseignes l'adresse IP du serveur sur lequel tu vas entrer ces commandes et pour cela
                            tu peux utiliser cette commande qui va te permettre de trouver toutes les adresses détéctées sur le serveur
                            {"\n"}
                            {"\n"}
                        </Text>
                        <Text selectable={true} style={{ ...Styles.aideCom, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
                            nmap 127.0.0.1
                        </Text>
                        <Text style={{ ...Styles.aide, ...{ display: this.state.aide ? 'flex' : 'none', } }}>
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


    liste: {
        fontSize: 14,
        color: "lightgreen",
        marginLeft: 5,
    },

});