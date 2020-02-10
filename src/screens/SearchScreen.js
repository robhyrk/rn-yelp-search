import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errorMSg] = useResults()

    
    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }


    return <View style={styles.container}>
        <SearchBar 
        term={term} 
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)} // can just pass reference to the function instead of writing it out like above in newTerm
        />
        {errorMSg ? <Text>{errorMSg}</Text> : null}
        <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective"/>
            <ResultsList results={filterResultsByPrice('$$')} title="Pricer"/>
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"/>
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

export default SearchScreen