import React from 'react' ;
import Happy from './happy' ;
import Sad from './sad' ;
import Neutral from './neutral';

function SvgFace(props){
    const sentiment = props.sentiment;

    if( sentiment === 'negative'){
        return(
            <Sad />    
        )
    }
    else if( sentiment === 'positive'){
        return(
            <Happy />
        )
    }
    else{
        return (
            <Neutral />
        )
    } 
}

export default SvgFace ;

