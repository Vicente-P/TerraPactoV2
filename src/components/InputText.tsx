import React from 'react'
import { TextInput, Text, View } from 'react-native'


interface Props {
    titulo: string,
    placeholder?: string,
}

export const InputText = ({titulo, placeholder}: Props) => {
  return (
    <View style={{flex: 1, paddingHorizontal:10}}>
        <Text>{ titulo }</Text>
        <TextInput style={{ borderWidth: 1, borderColor: 'blue', borderRadius: 5, padding: 0, alignItems: 'center', justifyContent: 'center'}}
                placeholder= {placeholder}
                />

    </View>
  )
}
