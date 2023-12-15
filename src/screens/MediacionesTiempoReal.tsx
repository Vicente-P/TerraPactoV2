// MediacionesTiempoReal.tsx
import React from 'react';
import { Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/themeMediTiempoReal';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

const MediacionesTiempoReal = ({navigation}: Props) => {
  

  const navigateToOtraPantalla = () => {
    // Lógica para navegar a la otra pantalla

    
    console.log('Navegar a otra pantalla');
  };

  return (
    <ImageBackground
      source={require('../recursos/images/background.png')}
      style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.textMediacion}>Mediaciones en Tiempo Real</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../recursos/images/ImgMeTiempoReal.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
  <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('AgendarMediador')}
  >
    <Text style={styles.buttonText}>Agendar Mediador</Text>
  </TouchableOpacity>
</View>
      
     {/* Sección de los rectángulos */}
<View style={styles.rectangulosContainer}>
  {/* Contenedor izquierdo */}
  <View style={styles.rectangulosLeftContainer}>
    {/* Rectángulo 1 */}
    <TouchableOpacity
      style={styles.rectangulo}
      onPress={navigateToOtraPantalla}
    >
      <View style={styles.rectanguloImage}>
        <Image
          style={styles.rectanguloImageInner}
          source={require('../recursos/images/Group140.png')}
        />
      </View>
      <Text style={styles.rectanguloText}>
        Entrar a Mediación
      </Text>
    </TouchableOpacity>

    {/* Rectángulo 2 */}
    <TouchableOpacity
      style={styles.rectangulo}
      onPress={navigateToOtraPantalla}
    >
      <Image
        style={styles.rectanguloImage}
        source={require('../recursos/images/Group43.png')}
      />
      <Text style={styles.rectanguloText}>
        Avance del Caso
      </Text>
    </TouchableOpacity>

    {/* Rectángulo 3 */}
    <TouchableOpacity
      style={styles.rectangulo}
      onPress={navigateToOtraPantalla}
    >
      <Image
        style={styles.rectanguloImage}
        source={require('../recursos/images/Group45.png')}
      />
      <Text style={styles.rectanguloText}>
      Acuerdos Legales
      </Text>
    </TouchableOpacity>
  </View>

  {/* Contenedor derecho */}
  <View style={styles.rectangulosRightContainer}>
    {/* Rectángulo 4 */}
    <TouchableOpacity
      style={styles.rectangulo}
      onPress={navigateToOtraPantalla}
    >
      <Image
        style={styles.rectanguloImage}
        source={require('../recursos/images/grupo.png')}
      />
      <Text style={styles.rectanguloText}>
      Mediaciones Grabadas
      </Text>
    </TouchableOpacity>

    {/* Rectángulo 5 */}
    <TouchableOpacity
      style={styles.rectangulo}
      onPress={navigateToOtraPantalla}
    >
      <Image
        style={styles.rectanguloImage}
        source={require('../recursos/images/inteligenciaArtificial.png')}
      />
      <Text style={styles.rectanguloText}>
      Análisis Predictivo
      </Text>
    </TouchableOpacity>
  </View>
</View>

    </ImageBackground>
  );
};

export default MediacionesTiempoReal;
