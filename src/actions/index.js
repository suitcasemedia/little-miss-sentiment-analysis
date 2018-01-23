import axios from 'axios'

export const GET_SENTIMENT = 'GET_SENTIMENT' ;

export function fetchData(query){
    const url = `https://twitter-happy-or-sad-b.herokuapp.com/subject-tweets/${query}`;
    const request =  axios.get(url);

    console.log('request:', request)
    return{
        type: GET_SENTIMENT,
        payload:  request
    }
}