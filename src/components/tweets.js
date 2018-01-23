import React from 'react';


function Tweets (props) {

        const {tweets} = props;

        if(! tweets){
            return true 
        }
        else{
            return(
                <div className="gel-c-grid-demo-section gel-wrap  gs-u-clearfix">
                    <h2 className="gel-double-pica-bold">Tweets</h2>
                    <div className="gel-layout gs-u-mt+">
                    { props.tweets.map(tweet =>(
                        <div className="gel-layout__item gs-u-mb+">
                            <div className="gel-c-grid-demo-item">  <p className="gel-pica gs-u-mb">{tweet} </p></div>
                        </div>

                    ))}
                    
                        
                        
                        
                        
                    </div>
                </div> 
            )   

        }
   
       
    
}
export default Tweets;