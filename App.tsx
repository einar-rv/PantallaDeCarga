import React, { useState, useEffect, useRef } from 'react';
import {StyleSheet, Text, View, Image, ImageBackground, Animated} from 'react-native';

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Valor inicial para la animación

  // Efecto para la animación de la imagen
  // Intento de una animación de fade in y fade out
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    isLoading ? 
    <View style={styles.loadingContainer}>
      <Animated.Image
       style={styles.loadingImage} source={require('./assets/img/logo.png')} />
      <Text style={styles.loadingText}>Preparando los mejores juegos</Text>
    </View> 
    : 
    <ImageBackground source={require('./assets/img/blueFondo.jpg')} style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.homeText}>Bienvenido</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 40, 201, 1)',
  },
  loadingImage: {
    width: 200,
    height: 200,
  },
  loadingText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeText: {
    fontSize: 30,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    fontWeight: 'bold',
  }
});

export default App;