// ES6 Component
// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

import Axios from 'axios'

import OnePage from '../components/onepage.component'

// Reader component created as a class
class AppContainer extends React.Component {
    constructor() {
        super();

        this.url = 'URL';

        this.index = 1;

        this.pageStart = 1;

        this.pageEnd = 10;

        this.state = {
            sections: [
                {
                    id: 0,
                    section: ''
                }
            ]
        }

        this.getMyHTMLContent = this.getMyHTMLContent.bind(this);
    }

    // render method is most important
    // render method returns JSX template
    render() {
        return (
          <div>
            {this.state.sections.map(page =><OnePage key={page.id} pageInedx={page.id} htmlData={page.section} />)}
            <button onClick={this.getMyHTMLContent}>GO!</button>
          </div>
        );
    }

    getMyHTMLContent() {
        let _this = this;
        var $ = require('jquery')

        for(var i=this.pageStart; i>=this.pageEnd; i--){
            Axios.get(`${this.url}/${i}.html`)
            .then(function(response) {
                //console.log(response.data);

                //var elements = $(response.data);
                var found = $(response.data).filter('#maincontent').html();
                console.log("Page["+_this.index+"] "+i);
                //console.log(found);

                _this.setState({sections: [..._this.state.sections, {id: _this.index, section: found}]});
                _this.index += 1;
            })
            .catch(function(err) {
                console.log(err);
            })
        }
    }
}

export default AppContainer