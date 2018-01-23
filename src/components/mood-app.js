import React, { Component } from 'react';
import Happy from './happy';
import Neutral from './neutral';
import Sad from './sad';
import TopBar from './top-bar';
import Tweets from './tweets';
import SearchBar from './search-bar'
import SentimentInfo from './sentiment-info';
import SvgFace from './svg-face' ;
import {connect} from 'react-redux';

class MoodApp extends Component {
  componentWillUpdate(){
   
    
    
  }
   getSVG(sentiment) {
    if(sentiment ==='happy'){
      return <Happy/>
    }
    else if(sentiment === 'neutral'){
      return <Neutral />
    }
    else if(sentiment === 'sad'){
      return <Sad/>
    }
    else {
      return <Neutral />
    }
  }
    
    render() {
      const {score, subject, sentiment , tweets} = this.props;
      console.log('the props are ', this.props)
      return (
        <div>
          <SentimentInfo
             score={score} 
             subject={subject}
             sentiment={sentiment}
          />
          <div style={{margin:'auto',height: '200px'}} >
            <SvgFace sentiment={sentiment} />    
          </div>
          <SearchBar/>
          <Tweets
            tweets={tweets}/>
        </div>
      );
    }
  }
  
function mapStateToProps(state){

  console.log("the state is ", state.sentiment[0])
  return state.sentiment[0] ;

}

export default connect(mapStateToProps)(MoodApp);
  
  
  
  
