import React from 'react';
import logo from '../logo.svg'

const TopBar = ()=>{

    return(

<header role="banner" className="gel-c-demo-header">
	    <div className="gel-c-demo-header__banner">
            <div className=" gs-u-clearfix">

				<div className="gel-c-demo-header__brand" style={{paddingLeft:'16px'}}>
                    <a className="gel-c-demo-header__brand-logo" href="http://www.bbc.co.uk/gel">
                        <svg aria-label="BBC GEL Logo" width="164" height="39">
                            <title>BBC GEL Logo</title>
                            <image  href="./bbc-gel-logo.svg" src="./bbc-gel-logo.png" width="100%" height="100%"></image>
                        </svg>
					</a>
                    <i className="gel-c-demo-header__brand-beta gel-minion-bold">Beta</i>
                </div>
                
                
               
                <a className="gel-c-demo-header__banner-button gel-o-button gel-long-primer-bold gel-o-button--clear " href="http://www.bbc.co.uk/gel/guidelines/typography">
					How it works
				</a>
				<a className="gel-c-demo-header__banner-button gel-o-button gel-long-primer-bold" href="http://www.bbc.co.uk/gel/guidelines/typography">
					Other data
				</a>
            </div>
        </div>
        

        
       
	</header>
    )

}
export default TopBar;
