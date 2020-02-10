import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <MaterialIcons name='search' style={styles.iconStyle}/>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false} 
        onChangeText={onTermChange}
        value={term} 
        placeholder="Search" 
        style={styles.inputStyle}
        onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 10
    },
    inputStyle: {
        flex: 1

    },
    iconStyle: {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal: 15
    }
})

export default SearchBar