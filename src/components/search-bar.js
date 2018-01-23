import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchData} from '../actions/index'
 

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    onInputChange(event){
        console.log(event.target.value)
        this.setState({term: event.target.value})


    }
    onFormSubmit(event){
        event.preventDefault();

        // we need to get and fetch data
        this.props.fetchData(this.state.term, ()=>{
            //call back function goes here
        })
        this.setState({term: ''});
    }
    render(){
        return(
            <div className="gel-wrap  gs-u-clearfix gs-u-mt+ gs-u-pt++" style={{background:'#ccc'}}>
                <div role="search" >
                
                    <form onSubmit={this.onFormSubmit} method="get" id="search-form">
                            <input 
                                type="text" 
                                required="required" 
                                size="15" 
                                id="s"
                                value={this.state.term}
                                onChange={this.onInputChange}
                            />
                            <label htmlFor="s">Any name or word</label>
                            <input type="submit" id="go" value="»"/>
                    </form>
                    
                </div>
            </div>
    
        )


    }
   
}
function mapDispatchToProps(dispatch){
    
        return bindActionCreators({fetchData}, dispatch)
    }
    
    export default connect(null, mapDispatchToProps)(SearchBar)