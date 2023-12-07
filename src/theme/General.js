export { StyleSheet } from 'react-native'
import { StyleSheet } from 'react-native'
import Colors from './Colors'

const imageBackgroundStyle = StyleSheet.create({
    iamge: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alingnItems: 'center',
        backgroundColor: Colors.WHITE
    }
})

export { imageBackgroundStyle }