import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {RadioButton} from 'react-native-paper';

interface Props extends NativeStackScreenProps<any, any> {}

const LoginScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [checked, setChecked] = React.useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../recursos/images/background.png')}
        style={styles.background}>
        <View>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <View style={styles.LoginContainer}>
            <View style={styles.LoginForm}>
              <View style={styles.RadioButton}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text style={styles.RadioLabel}>EMPRESA / MUNICIPALIDAD</Text>
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
              <View>
                <TextInput
                  placeholder="tu correo"
                  keyboardType="email-address"
                  underlineColorAndroid="black"
                  value={email}
                  onChangeText={text => setEmail(text)}
                />
              </View>

              <Text style={styles.HeaderText}>Contraseña</Text>
              <View>
                <TextInput
                  placeholder="tu contraseña"
                  underlineColorAndroid="black"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  secureTextEntry
                />
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.buttonText}>CREAR ACCESO</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.LoginButton}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.TextLoginButton}>ENTRAR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Logo}>
            <Image source={require('../recursos/images/logo.png')} />
          </View>
        </View>
      </ImageBackground>

      <View>
        <Image
          style={styles.Image}
          source={require('../recursos/images/gestac.png')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    resizeMode: 'cover',
  },
  LoginContainer: {
    top: Dimensions.get('window').height * 0.08,
  },
  LoginForm: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 50,
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width * 0.85,
  },
  HeaderText: {
    fontSize: 16,
    color: '#333',
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
    padding: 30,
  },
  buttonText: {
    color: 'green',
    textAlign: 'center',
  },
  LoginButton: {
    backgroundColor: '#2196F3',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    top: -10,
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  TextLoginButton: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  Image: {
    position: 'absolute',
    bottom: 40,
  },
  Logo: {
    alignItems: 'center',
    top: -Dimensions.get('window').height * 0.45,
  },
});
