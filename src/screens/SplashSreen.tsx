import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {

    useEffect(() => {
        setTimeout(() => {
        navigation.navigate('LoginScreen');
        }, 3000);
    }, [navigation]);
    
    return (
        <View style={styles.container}>
        <Image
            style={styles.imagenFondo}
            source={require('../recursos/images/Portada.jpg')}
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
        position:'relative',
        width: '100%',
        resizeMode:'cover',
    },
});

export default SplashScreen;