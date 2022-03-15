import { StyleSheet, Text, View, TouchableOpacity, TouchableOpacityBase } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>CybGame</Text>
      <View style={styles.barre} />
      <Text style={styles.accueil}>Bienvenue à bord du vaisseau JF-8801</Text>
      <Text style={styles.texte1}>Nous sommes en mission pour aller pour la première fois sur la planète
        Mars, mais le vaisseau semble ne plus fonctionner correctement.</Text>
      <Text style={styles.texte2}>Tu as été mandaté pour enquêter sur ce qui se passe et éviter l'accident !</Text>
      <Text style={styles.texte3}>Tout au long de la mission tu seras accompagné de CybCog qui pourra t'aider
        en cas de besoin.</Text>


      <TouchableOpacity>
        <Text style={styles.continuer}>Clique pour continuer</Text>
      </TouchableOpacity>

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
    display: 'flex',
    position: 'absolute', top: '18%',
    width: 300,
    height: 1,
    backgroundColor: "white",
  },

  titre: {
    position: 'absolute', top: '5%',
    color: '#fff',
    fontSize: 32,
  },


  accueil: {
    position: 'absolute', top: '20%',
    color: '#fff',
    fontSize: 14,
  },
  texte1: {
    position: 'absolute', top: '30%',
    color: '#fff',
    fontSize: 14,
  },
  texte2: {
    position: 'absolute', top: '40%',
    color: '#fff',
    fontSize: 14,
  },

  texte3: {
    position: 'absolute', top: '50%',
    color: '#fff',
    fontSize: 14,
  },

  continuer: {
    position: 'absolute', top: '70%',
    color: '#fff',
    fontSize: 14,
  },

  bouton: {
    height: 45,
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
});
