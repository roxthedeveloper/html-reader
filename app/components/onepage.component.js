import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'

class OnePage extends React.Component {
    render() {
        return (
            <div>
                <span>--start of page {this.props.pageInedx}--</span>
                <div dangerouslySetInnerHTML={{__html: this.props.htmlData}}></div>
                <span>--end of page {this.props.pageInedx}--</span>
                <br />
            </div>
        )
    }
}

export default OnePage