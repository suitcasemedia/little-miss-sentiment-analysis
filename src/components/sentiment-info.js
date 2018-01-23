import React from  'react';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

function SentimentInfo(props) {
    
        const {subject, score, sentiment} = props;
        const notify = (sentiment) =>{
            switch(sentiment) {
                case 'positive':
                    NotificationManager.success( "You did it", "Hooraye! ", 2500 );
                    break;
                case 'neutral':
                    NotificationManager.warning( "Can you think of something happier ?", "Hmmm", 2500 );
                    break;
                case 'negative':
                    NotificationManager.error( "That's so sad...", "Oh dear", 2500 );
                default:
                    return
            }
        }
        if (  score ){
            return(
                <div style={{marginTop: '1em', marginLeft:'auto',marginRight:'auto', width:'80%'}}>
                    {notify(sentiment)}
                   
                    <div className="gel-layout gel-layout--center">
                        <div className="gel-layout__item gel-10/12@xxl">
                            <div className="twitter-sentiment-demo__score">
                              
                                <p className="gel-double-pica gs-u-mb">"{subject }" sentiment score: {score ?score : ''}</p>
                               
                                <h2 style={{color: 'red'}} className="gel-great-primer gs-u-mb+">{sentiment? sentiment : ''}</h2>
                                <p className=" gs-u-mb+">You can read the tweets containing <strong>{subject}</strong> below or go again</p>
                            </div>
                        </div>
                    </div>
                    <NotificationContainer/>
                </div>
                
            )
        }
        else{

            return (
                <div>
                    <h1 className="gel-layout gel-layout--center gs-u-m+">
                    Hello I'm Little Miss Sentiment Analysis
                    </h1>
                    <h2 className="gel-layout gel-layout--center gs-u-m+">Try and see if you can make me smile.</h2>
                    <p  className="gel-layout gel-layout--center gs-u-m"> Input any word or phrase below.</p>
                    <p className="gel-layout gel-layout--center gs-u-m"> I'll give a happiness score  for the last 100 tweets containing that text.</p>
                    <p className="gel-layout gel-layout--center gs-u-m"> A score below -0.5 will make me sad.</p>
                    <p className="gel-layout gel-layout--center gs-u-m">A score above 0.5 will make me smile.</p>
                   
                    <p className="gel-layout gel-layout--center gs-u-m">A score in the middle will not change my expression.</p>
                    
                </div>
            )
        }   
}

export default SentimentInfo ;