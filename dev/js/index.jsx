import React from 'react';
import classNames from 'classnames';
import {render} from 'react-dom';
import Filter from './components/filter.jsx';
import GooeyBar from './components/gooey.jsx';

class Abduct extends React.Component {
    constructor(){
        super();
        this.state = {
            appReady: false,
        };
    }

    componentDidMount(){
        console.log("Geting Ready")
        setTimeout(() => {
            this.setState({appReady: true});
            console.log("Ready");
        }, 1000);
    }

    render () {
        return <div>
            <div className={classNames('ab-header', {'ready': this.state.appReady} )} >
                <span>Abduct</span>
            </div>
            <GooeyBar ready={this.state.appReady}></GooeyBar>
            <div className={classNames('loader', {'ready': this.state.appReady} )}>Traveling over space...</div>
            <Filter/>
        </div>;
    }
}

render(<Abduct/>, document.getElementById('app'));