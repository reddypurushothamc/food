import React, {useState, useEffect } from 'react';
import {Text, View ,StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ( ) => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    // console.log(results);
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( result => {
            return result.price === price;
        });
    };

    return (

        //<View style = {{ flex: 1}}></View> can be replaced with <></>placeholder for grouping of elements

        // <View style = {{ flex: 1 }}>
        <>
            <SearchBar 
            term = {term} 
            //onTermChange = { newTerm => setTerm(newTerm)} 
            //onTermSubmit = { () => console.log("Term was submitted")}

            onTermChange = { setTerm} 
            onTermSubmit = { () => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null }
           
            <ScrollView>
            <ResultsList 
                results={filterResultsByPrice('$')}  title="Cost Effective"/>
            <ResultsList 
                results={filterResultsByPrice('$$')} title="Bit Pricier"/>
            <ResultsList  
                results={filterResultsByPrice('$$$')} title="Big Spender"/>
            </ScrollView>
      
         {/* </View> */}
         </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
