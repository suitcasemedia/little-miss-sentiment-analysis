import { combineReducers } from 'redux';
import SentimentReducer from './reducer_sentiment'

const rootReducer = combineReducers({
 sentiment: SentimentReducer
});

export default rootReducer;
