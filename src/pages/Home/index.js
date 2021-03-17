import React from 'react';
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Conditions from '../../components/Conditions';
import Forecast from '../../components/Forecast';

const myList =  [
    {
      "date": "03-17",
      "weekday": "Wed",
      "max": 28,
      "min": 17,
      "description": "Thunderstorms",
      "condition": "clear-day"
    },
    {
      "date": "03-18",
      "weekday": "Thu",
      "max": 26,
      "min": 19,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-19",
      "weekday": "Fri",
      "max": 25,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-20",
      "weekday": "Sat",
      "max": 27,
      "min": 16,
      "description": "Isolated thundershowers",
      "condition": "storm"
    },
    {
      "date": "03-21",
      "weekday": "Sun",
      "max": 28,
      "min": 17,
      "description": "Fair day",
      "condition": "cloudly_day"
    },
    {
      "date": "03-22",
      "weekday": "Mon",
      "max": 28,
      "min": 18,
      "description": "Thunderstorms",
      "condition": "storm"
    },
    {
      "date": "03-23",
      "weekday": "Tue",
      "max": 28,
      "min": 17,
      "description": "Isolated thundershowers",
      "condition": "storm"
    },
    {
      "date": "03-24",
      "weekday": "Wed",
      "max": 28,
      "min": 18,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
    },
    {
      "date": "03-25",
      "weekday": "Thu",
      "max": 25,
      "min": 19,
      "description": "Isolated thundershowers",
      "condition": "storm"
    },
    {
      "date": "03-26",
      "weekday": "Fri",
      "max": 25,
      "min": 17,
      "description": "Day partly cloudy",
      "condition": "cloudly_day"
    }
  ];

export default function Home(){
    return(
        <SafeAreaView style={styles.container}>
            <Menu/>

            <Header/>

            <Conditions/>

            <FlatList 
                horizontal={true}
                contentContainerStyle={{ paddingBottom: '5%' }}
                style={styles.list}
                data={myList}
                keyExtractor={ item => item.date }
                renderItem={ ({item}) => <Forecast data={item}/> }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f0ff',
        paddingTop: '5%',
    },
    list:{
        marginTop: 10,
        marginLeft: 10,
    }

});