// src/screens/LoginScreen.tsx
import React, {useState} from 'react';
import { Image, View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Dimensions} from 'react-native';
import {RadioButton} from 'react-native-paper';



const LoginScreen = ({navigation}: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí deberías realizar la lógica de autenticación
    // Puedes usar servicios como Axios para hacer solicitudes HTTP
    // y almacenar el token de autenticación en AsyncStorage o Redux
    // Luego, navegar a la pantalla principal si la autenticación es exitosa.
    navigation.navigate('Home');
  };

  const [checked, setChecked] = React.useState('');

  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#fff' barStyle="dark-content"/>

      <View style={styles.LoginContainer}>
        <View style={styles.LoginForm}>
          <View style={styles.RadioButton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text  style={styles.RadioLabel}>EMPRESA / MUNICIPALIDAD</Text>
          </View>

          <View style={styles.RadioButton}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text style={styles.RadioLabel}>PERSONA / COMUNIDAD</Text>
          </View>

          <Text style={styles.HeaderText}>Email</Text>
          <View style = {styles.action}>
            <TextInput
              placeholder="tu correo"
              style={styles.textInput}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          
          <Text style={styles.HeaderText}>Contraseña</Text>
          <View style = {styles.action}>
            <TextInput
              style={styles.textInput}
              placeholder="tu contraseña"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>CREAR ACCESO</Text>
          </TouchableOpacity>

        </View>

        <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
            <Text style={styles.TextLoginButton}>ENTRAR</Text>
        </TouchableOpacity>
      </View>
      

      <Image style={styles.Image} source={require('../recursos/images/gestac.jpg')} />

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },
  LoginContainer:{
    top: -Dimensions.get('window').height * 0.08
  },
  LoginForm: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 50,
    height: Dimensions.get('window').height * 0.4 ,
    width: Dimensions.get('window').width * 0.85,
  },
  HeaderText: {
    fontSize: 16,
    color: '#333'
  },
  RadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  RadioLabel: {
    marginLeft: 4,
    fontSize: 10,
    color: '#333',
  },
  button: {
    position: 'absolute',
    bottom: 0,
    right: 0.5,
    left: 0.5,
    padding: 30

  },
  buttonText: {
    color: 'green',
    textAlign: 'center',
  },
  textInput: {
    paddingTop:0,
    paddingBottom:0,
    color: '#05375a',
  },
  action: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginBottom: 10
  },
  LoginButton: {
    backgroundColor: '#2196F3',
    alignContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    top: -10,
    alignSelf: 'center',
    paddingHorizontal: 40
  }, 
  TextLoginButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  }, 
  Image: {
    position: 'absolute',
    bottom: 40
  }
  

});
