import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Platform,
} from 'react-native';
import {InputText} from '../components/InputText';
import {RadioButton} from 'react-native-paper';

export const RegisterScreen = () => {
  const [checked, setChecked] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Body}>
        <View>
          <Text>Formulario de Comunidad y Registro</Text>
        </View>
        <View>
          <Text>1) Informacion Basica</Text>
          <InputText titulo="Nombre" />
          <View style={styles.Fila}>
            <InputText titulo="Fecha" placeholder="DD/MM/AAAA" />
            <InputText titulo="Ubicacion del Conflicto" />
          </View>
          <InputText titulo="Nombre de junta de vecinos en caso de que pertenezca" />
          <InputText titulo="Que ocurrio" />
          <InputText titulo="Quien esta involucrado" />
          <InputText titulo="Cuando sucedio el conflicto?" />

          <View style={styles.check}>
            <Text style={styles.checkText}>Hay testigos o personas adicionales afectadas?</Text>
            <View style={styles.RadioButton}>
              <RadioButton
                value="first"
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
              />
              <Text style={styles.RadioLabel}>Si</Text>
            </View>
            <View style={styles.RadioButton}>
              <RadioButton
                value="second"
                status={checked === 'sencond' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
              />
              <Text style={styles.RadioLabel}>No</Text>
            </View>
          </View>

          <InputText titulo="Sobre que trata el conflicto?" />
          <InputText titulo="Como te afecta este conflicto personalmente?" />

          <View style={styles.check}>
            <Text style={styles.checkText}>Se ha intentado resolver este conflicto antes?</Text>
            <View style={styles.RadioButton}>
              <RadioButton
                value="third"
                status={checked === 'third' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('third')}
              />
              <Text style={styles.RadioLabel}>Si</Text>
            </View>
            <View style={styles.RadioButton}>
              <RadioButton
                value="fourth"
                status={checked === 'fourth' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('fourth')}
              />
              <Text style={styles.RadioLabel}>No</Text>
            </View>
          </View>

          <InputText titulo="Si la respuesta es si Como y Cuando?" />
          <InputText titulo="Que esperas que suceda como resultado de reportar este conflicto?" />
          <InputText titulo="Correo Electronico" />
          <View style={styles.Fila}>
            <InputText titulo="Contrasena" />
            <InputText titulo="repetir contrasena" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
  Body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Fila: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  InputText: {
    borderColor: 'blue',
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
  check: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkText: {
    
    width: '50%',
    textAlign: 'center', 
    
  }
});
