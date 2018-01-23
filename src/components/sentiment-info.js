import React from  'react';

function SentimentInfo(props) {
    
        const {subject, score, sentiment} = props;
        if (  score ){
            return(
                <div>
                   
                    <div className="gel-layout gel-layout--center">
                        <div className="gel-layout__item gel-10/12@xxl">
                            <div className="twitter-sentiment-demo__score">
                                <p className="gel-double-pica gs-u-mb">{score ?score : ''}:</p>
                               
                                <h2 style={{color: 'red'}} className="gel-great-primer gs-u-mb+">{sentiment? sentiment : ''}</h2>
                                <p className=" gs-u-mb+">You can read the tweets below or try again</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }
        else{

            return (
                <div>
                    <h1 className="gel-layout gel-layout--center gs-u-m+">
                    Twitter sentiment analyser
                    </h1>
                    <h2  className="gel-layout gel-layout--center gs-u-m+">
                        Input any word  below to find out how twitter currently feels about it
                    </h2>
                </div>
            )
        }   
}

export default SentimentInfo ;