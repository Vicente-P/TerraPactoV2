// theme/themeMediTiempoReal.tsx
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    flexDirection: 'row',  // Alinea los contenedores izquierdo y derecho en una fila
    marginTop: 10,  // Ajusta la separación entre el botón y los rectángulos
    padding: 50,
  },
  
  rectangulosLeftContainer: {
    marginRight: 10,
  },
  
  rectangulosRightContainer: {
    marginLeft: 10,
  },
  rectangulo: {
    flexDirection: 'row',
    margin: 2,
    backgroundColor: '#009FE3',
    padding: 5,
    width: 150,
  },
  rectanguloImage: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectanguloImageInner: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  rectanguloText: {
    flex: 1,
    marginTop: 5,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'left',
  },
});
