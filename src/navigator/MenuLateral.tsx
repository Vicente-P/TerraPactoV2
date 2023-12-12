import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Navigator from './Navigator';
import ConflictosAmbientales from '../screens/ConflictosAmbientales';
import PanelControl from '../screens/PanelControl';
import MediacionesTiempoReal from '../screens/MediacionesTiempoReal';
import E_Learning from '../screens/E_Learning';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import React from 'react';
import { styles } from '../theme/apptheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width} = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={ {
      drawerType: width >= 768 ? 'slide' : 'slide',
  } }
  drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Navigator" component={Navigator} />
      <Drawer.Screen name="PanelControl" options={{ title: 'PANEL DE CONTROL'}}  component={PanelControl} />
      <Drawer.Screen name="ConflictosAmbientales" options={{ title: 'CONFLICTOS SOCIOAMBIENTALES'}} component={ConflictosAmbientales} />
      <Drawer.Screen name="MediacionesTiempoReal" options={{ title: 'MEDIACIONES EN TIEMPO REAL'}} component={MediacionesTiempoReal} />
      <Drawer.Screen name="E_Learning" options={{ title: 'E-LEARNING'}} component={E_Learning} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
        <View >
            <Image style = {styles.avatar}
              source={require('../recursos/images/logo.png')}
            />
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>PANEL DE CONTROL</Text>
            </TouchableOpacity>
        </View>   

        <View style={ styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>CONFLICTOS SOCIOAMBIENTALES</Text>
            </TouchableOpacity>
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>MEDIACIONES EN TIEMPO REAL</Text>
            </TouchableOpacity>
        </View>

        <View style={ styles.menuContainer}>
            <TouchableOpacity>
              <Text style={styles.menuTexto}>E-LEARNING</Text>
            </TouchableOpacity>
        </View>

        <View>
        <TouchableOpacity>
          <Text style={styles.menuTextoCerrarSesion}>CERRAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
);

}

