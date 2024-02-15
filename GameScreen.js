import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function GameScreen({ navigation }) {
  // Les liens des captures d'écran du jeu
  const screenshots = [
    'https://s2-techtudo.glbimg.com/ZnjKzx5AoUszH-223RwAGzRsUUY=/0x0:3840x2160/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/M/p/TCZ2o4TBWReOGP9e2WCw/fc24-screenshot-ucl-4k-vinihero.jpg',
    'https://i0.wp.com/jornaldosjogos.com.br/wp-content/uploads/2023/07/null-3.png?fit=800%2C450&ssl=1',
    'https://futwithapero.com/wp-content/uploads/2023/07/fc-24-mini-group-player.jpg.webp',
    'https://i.bo3.no/image/355777/original.jpg?c=0&h=562&w=999',
    
    // Ajoutez d'autres liens d'images si nécessaire
  ];

  // Rendu d'un élément du carrousel
  const renderCarouselItem = ({ item }) => (
    <Image style={styles.carouselImage} source={{ uri: item }} />
  );

  return (
    <ScrollView style={styles.container}>
      {/* Image de fond ou capture d'écran du jeu */}
      <Image
        style={styles.gameImage}
        source={{ uri: 'https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/guide-shopping/ea-sports-fc-24-est-deja-disponible-a-prix-casse-avant-sa-sortie-sur-ce-site-incontournable-4205958/60641551-1-fre-FR/EA-SPORTS-FC-24-est-deja-disponible-a-prix-casse-avant-sa-sortie-sur-ce-site-incontournable.jpg' }}
      />

      {/* Informations sur le jeu */}
      <View style={styles.gameInfo}>
        <Text style={styles.gameTitle}>EA FC24 - Le Jeu de Football Ultime</Text>

        {/* Section Aperçu */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Aperçu</Text>
          <Text style={styles.sectionContent}>
            Plongez dans l'action palpitante de EA FC24, le dernier opus de la série. Vivez des moments
            inoubliables sur le terrain et découvrez des fonctionnalités révolutionnaires.
          </Text>
        </View>

        {/* Section Caractéristiques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Caractéristiques</Text>
          {/* Ajoutez des vignettes ou des éléments pour décrire les caractéristiques du jeu */}
          <Text style={styles.sectionContent}>- Mode Carrière</Text>
          <Text style={styles.sectionContent}>- Graphismes époustouflants</Text>
          <Text style={styles.sectionContent}>- Mode Multijoueur en ligne</Text>
        </View>

        {/* Section Captures d'écran */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Image du jeu</Text>
          {/* Carrousel d'images */}
          <Carousel
            data={screenshots}
            renderItem={renderCarouselItem}
            sliderWidth={350}
            itemWidth={300}
            layout={'default'}
            loop
            autoplay
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  gameInfo: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    marginBottom: 5,
  },
  carouselImage: {
    width: 300,
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
  },
});
