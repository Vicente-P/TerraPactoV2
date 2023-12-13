import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    avatar: {
        width: 200,
        height: 200,      
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    menuContainer: {
        backgroundColor: '#58C3F0',
        marginVertical: 3,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },

    menuTexto: {

        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginVertical:20,
        marginHorizontal: 0,
        alignSelf: 'flex-end'

    },

    menuTextoCerrarSesion: {
        fontSize: 15,
        fontWeight: 'bold',        // Negrita
        color: '#009FE3',         // Color del texto
        marginVertical: 60,      // Margen vertical (espacio arriba y abajo)
        marginHorizontal: 5,     // Margen horizontal (espacio a los lados)
        alignSelf: 'flex-end'     // Posicionamiento propio en el extremo derecho
    },

    menuLateralgestac: {
        width: 180,
        height: 100,      
        alignSelf: 'center',
        resizeMode: 'contain'
    }
    
    
    
    
    
});


