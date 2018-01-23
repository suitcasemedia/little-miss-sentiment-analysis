import React from 'react' ;
import Happy from './happy' ;
import Sad from './sad' ;
import Neutral from './neutral';

function SvgFace(props){
    const sentiment = props.sentiment;

    if( sentiment === 'Negative'){
        return(
            <Sad />    
        )
    }
    else if( sentiment === 'Positive'){
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

