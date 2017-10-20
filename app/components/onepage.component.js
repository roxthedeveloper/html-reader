import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'

class OnePage extends React.Component {
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: this.props.htmlData}}></div>
                <hr/>
            </div>
        )
    }
}

export default OnePage