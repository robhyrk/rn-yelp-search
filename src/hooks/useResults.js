import React, {useState, useEffect} from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMSg, setErrorMsg] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'toronto'
                }
        })
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMsg('Something went wrong')
        }
    }

    useEffect(()=> {
        searchApi('pasta')
    }, [])

    return[searchApi, results, errorMSg]
}
