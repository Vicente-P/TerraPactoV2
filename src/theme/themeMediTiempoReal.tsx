// theme/themeMediTiempoReal.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textMediacion: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: 'contain',
  },
  buttonContainer: {
    justifyContent: 'flex-end',  // Alinea el botón en la parte inferior del contenedor
    marginBottom: 20,  // Ajusta la separación entre la imagen y el botón
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 70,
    alignItems: 'center',  // Añadido para centrar el contenido horizontalmente
    justifyContent: 'center',  // Añadido para centrar el contenido verticalmente
  },
  buttonText: {
    color: '#3AAA35',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    width: '100%',  // Cambiado a '100%' para que el texto ocupe todo el ancho disponible
    textAlign: 'center',
    overflow: 'hidden',  // Añadido para cortar el texto si es demasiado largo
  },

  rectangulosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,  // Ajusta según sea necesario
    backgroundColor: 'lightblue',  // Añadido para hacer el fondo del contenedor de color celeste
    padding: 10,  // Añadido para dar un poco de espacio alrededor de los rectángulos
    borderRadius: 10,  // Añadido para hacer los bordes del contenedor redondos
  },
  rectangulo: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,  // Ajusta según sea necesario

  },
  rectanguloImage: {
    width: 150,  // Ajusta el ancho del cuadrado blanco según sea necesario
    height: 150,  // Ajusta el alto del cuadrado blanco según sea necesario
    backgroundColor: 'white',  // Agrega un fondo blanco al cuadrado
    justifyContent: 'center',  // Centra la imagen verticalmente
    alignItems: 'center',  // Centra la imagen horizontalmente
    borderRadius: 16,  // Bordes redondos para el cuadro blanco
    padding: 20,  // Ajusta el tamaño del cuadro blanco
  },
  rectanguloImageInner: {
    width: 80,  // Ajusta el ancho de la imagen según sea necesario
    height: 80,  // Ajusta el alto de la imagen según sea necesario
    resizeMode: 'cover',  // Ajusta según la necesidad de la imagen
    borderRadius: 8,  // Bordes redondos para la imagen
  },
  rectanguloText: {
    marginTop: 5,  // Ajusta según sea necesario
  },
  
});
