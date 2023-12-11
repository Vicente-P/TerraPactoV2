import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
//necesito colocar imagen

    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('LoginScreen');
        }, 3000);
    }, [navigation]);
    
    return (
        <View style={styles.container}>
        <Image
            style={styles.imagenFondo}
            source={require('../recursos/images/Sreen1.jpg')}
        />
        
        </View>
    );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    imagenFondo: {
        flex: 1,
        width: '100%',
        resizeMode: 'contain',
        alignSelf: 'center',

    },

   
});

export default SplashScreen;
