import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from './Navigator';
import ConflictosAmbientales from '../screens/ConflictosAmbientales';
import PanelControl from '../screens/PanelControl';
import MediacionesTiempoReal from '../screens/MediacionesTiempoReal';
import E_Learning from '../screens/E_Learning';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { styles } from '../theme/apptheme';

//import { useNavigation } from '@react-navigation/native';


const Drawer = createDrawerNavigator();


export const MenuLateral = () => {

  return (
    <Drawer.Navigator 
  drawerContent={ (props) => <MenuInterno { ...props } /> }
  initialRouteName='HomeScreen'
    >
      <Drawer.Screen name="Navigator" component={Navigator} />
      <Drawer.Screen name="PanelControl"  options={{title:'Panel de Control'}} component={PanelControl} />
      <Drawer.Screen name="ConflictosAmbientales" options={{title:'Conflictos Socioambientales'}} component={ConflictosAmbientales} />
      <Drawer.Screen name="MediacionesTiempoReal" options={{title:'Mediaciones en Tiempo Real'}} component={MediacionesTiempoReal} />
      <Drawer.Screen name="E_Learning" options={{title:'E-Learning'}} component={E_Learning} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({ navigation}:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
        <View >
            <Image style = {styles.avatar}
              source={require('../recursos/images/logo.png')}
            />
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('PanelControl')}
            >
              <Text style={styles.menuTexto}>PANEL DE CONTROL</Text>
            </TouchableOpacity>
        </View>   

        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('ConflictosAmbientales')}
            >
              <Text style={styles.menuTexto}>CONFLICTOS SOCIOAMBIENTALES</Text>
            </TouchableOpacity>
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('MediacionesTiempoReal')}
            >
              <Text style={styles.menuTexto}>MEDIACIONES EN TIEMPO REAL</Text>
            </TouchableOpacity>
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('E_Learning')}
            >
              <Text style={styles.menuTexto}>E-LEARNING</Text>
            </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity
       // onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.menuTextoCerrarSesion}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </View>

      <View>
            <Image style = {styles.menuLateralgestac}
              source={require('../recursos/images/gestac.png')}
            />
        </View>
    </DrawerContentScrollView>
);

}

