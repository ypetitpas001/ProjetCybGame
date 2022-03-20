import { StyleSheet, Text, View, TouchableOpacity, Image, Button, Alert, TextInput } from 'react-native';
import React from 'react';
import AppNavigator from './pages/app.navigator';

export default function App() {

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titre}>CybGame</Text>
      </View>

      <View>
        <View style={styles.barre} />
      </View>

      <View>
        <Text style={styles.texte1}>Tu vas devoir recueillir des informations importantes pour débloquer la situation, tu peux interagir avec les éléments en cliquant dessus</Text>
        <Text style={styles.texte2}>Voici le tableau de bord</Text>
        <Image
          style={styles.tableaudebord}
          source={require("./assets/tableaudebord.png")}
        />
        <Text style={styles.texte3}>et voici la console</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          value={'commandes'}
          placeholder="Commandes"
        />
      </View>


      <TouchableOpacity style={styles.but}>
        <Text style={styles.valider}>Valider</Text>
      </TouchableOpacity>

      <Image
        style={styles.astronaute}
        source={require("./assets/astronaute.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },

  barre: {
    marginTop: 25,
    width: 300,
    height: 1,
    backgroundColor: "white",

  },

  titre: {
    marginTop: 10,
    color: '#fff',
    fontSize: 32,
  },

  texte1: {
    marginTop: 25,
    color: '#fff',
    fontSize: 14,
  },
  texte2: {
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
    backgroundColor: "white",
    height: 100,
  },

  but: {
    alignSelf: "flex-end",
    marginRight: 25,
  },

  valider: {
    color: '#fff',
    fontSize: 14,
  },

  astronaute: {
    marginLeft: 20,
    marginTop: 55,
    height: 120,
    width: 82,
    paddingHorizontal: 8,
    alignSelf: "flex-start",
  }
});
