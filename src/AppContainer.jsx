import React, {Component} from 'react';
import App from './App';
import 'whatwg-fetch';

class AppContainer extends Component{
    constructor(){
        super();
        this.state={
            contacts: []
        };
    }

    componentDidMount(){
        fetch('./contacts.json')
            .then((response) => response.json)
            .then((responseData) => {
                this.setState({contacts: responseData});
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render(){
        return(
            <App contacts={this.state.contacts}/>
        );
    }
}

export default AppContainer;