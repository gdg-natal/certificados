import React from 'react';
import classNames from 'classnames';
import {render} from 'react-dom';
import Filter from './components/filter.jsx';
import GooeyBar from './components/gooey.jsx';
import AbInput from './components/form/ab.input.jsx';
import AbButton from './components/form/ab.button.jsx';

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
                <span className="animation-at-4">Abduct</span>
                <AbInput className="animation-at-3 ab-entrance" placeholder="Github User"/>
                <AbButton className="animation-at-2 ab-entrance" > Abduct this user </AbButton>
            </div>
            <GooeyBar ready={this.state.appReady}></GooeyBar>
            <div className={classNames('loader', {'ready': this.state.appReady} )}>Traveling over space...</div>
            <Filter/>
        </div>;
    }
}

render(<Abduct/>, document.getElementById('app'));