import { GET_SENTIMENT} from '../actions/index';


export default function(state = [] , action){
    switch (action.type){
    case GET_SENTIMENT:
        return [action.payload.data];
    default:
        return state


    }
   
}