// PreorderScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function PreorderScreen({ navigation }) {
  const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60); // 30 jours en secondes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleConfirmPreorder = (offerType) => {
    // Ajoutez ici la logique pour confirmer la précommande
    console.log(`Précommande confirmée pour l'offre ${offerType}`);
  };

  return (
    <View style={styles.container}>
      {/* Logo du jeu */}
      <Image
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/EA_Sports_monochrome_logo.svg/1200px-EA_Sports_monochrome_logo.svg.png' }}
      />

      {/* Vignette offre standard */}
      <View style={styles.offerContainer}>
        <Image
          style={styles.offerImage}
          source={{ uri: 'https://www.techwar.gr/wp-content/uploads/2023/10/EA-Sports-FC-24-Review-FIFAs-Promised-Rebirth-Remains-a.png' }}
        />
        <Text style={styles.offerText}>Offre Standard</Text>
        <Text style={styles.offerPrice}>79,99€</Text>
        <Text style={styles.offerDescription}>
          Points :
          {"\n"}- Contenu standard
          {"\n"}- Bonus exclusifs
        </Text>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirmPreorder('standard')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Précommander</Text>
        </TouchableOpacity>
      </View>

      {/* Vignette offre ultime */}
      <View style={styles.offerContainer}>
        <Image
          style={styles.offerImage}
          source={{ uri: 'https://store-images.s-microsoft.com/image/apps.51675.13539298811255076.b51d851a-fe7c-45e9-b1c3-339f25573fec.3ccb385f-b421-450c-a1a2-f0538def3772?mode=scale&q=90&h=720&w=1280&format=jpg' }}
        />
        <Text style={styles.offerText}>Offre Ultime</Text>
        <Text style={styles.offerPrice}>99,99€</Text>
        <Text style={styles.offerDescription}>
          Points forts :
          {"\n"}- Contenu ultime
          {"\n"}- Avantages exclusifs
          {"\n"}- Bonus spéciaux
        </Text>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => handleConfirmPreorder('ultimate')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Précommander</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  offerContainer: {
    marginVertical: 20,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  offerImage: {
    width: 200,
    height: 100,
    marginBottom: 10,
    borderRadius: 10, // Bordure arrondie
  },
  offerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  offerPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  offerDescription: {
    textAlign: 'center',
    marginBottom: 10,
  },
  confirmButton: {
    backgroundColor: '#3C3C3C',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  countdownText: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
  },
});
