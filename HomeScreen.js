import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Ajoutez cette ligne

export default function HomeScreen() {
  const navigation = useNavigation(); // Ajoutez cette ligne
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez ici la logique de connexion avec les identifiants fournis
    console.log('Username:', username);
    console.log('Password:', password);

    // Naviguer vers la nouvelle page (dans cet exemple, "DetailsScreen")
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={{ uri: 'https://w.forfun.com/fetch/67/67aa858c6a6e77e8f2c52b85c05e6802.jpeg' }}
      />
      <Image
        style={styles.logo}
        source={{ uri: 'https://cdn2.unrealengine.com/egs-easportsfc24standardedition-eacanada-ic1-400x400-f23cc222aa82.png?h=270&quality=medium&resize=1&w=480' }}
      />

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nom d'utilisateur"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Mot de passe"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Connexion</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
      },
      logo: {
        width: 150,
        height: 150,
        marginBottom: 40,
      },
      inputView: {
        width: '80%',
        backgroundColor: '#BFBFBF',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
      },
      inputText: {
        height: 50,
        color: 'black',
      },
      loginBtn: {
        width: '80%',
        backgroundColor: '#3C3C3C',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10,
      },
      loginText: {
        color: 'white',
      },
});
