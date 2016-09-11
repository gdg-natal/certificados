import React from 'react';
import classNames from 'classnames';
import {render} from 'react-dom';
import Filter from './components/filter.jsx';
import GooeyBar from './components/gooey.jsx';
import AbInput from './components/form/ab.input.jsx';
import AbButton from './components/form/ab.button.jsx';
import AbductCore from './api/abductCore.jsx';
class Abduct extends React.Component {
    constructor(){
        super();
        this.state = {
            appReady: true,
        };
    }

    abductUser(){
        let username = this.usernameElement.value;
        this.core = new AbductCore(username);
        this.core.analyze();
    }

    render () {
        return <div>
            <div className={classNames('ab-header', {'ready': this.state.appReady} )} >
                <span className="animation-at-4">Abduct</span>
                <AbInput ref={(abInput) => {this.usernameElement = abInput}} className="animation-at-3 ab-entrance" placeholder="Github User"/>
                <AbButton onClick={this.abductUser.bind(this)} className="animation-at-2 ab-entrance" > Abduct this user </AbButton>
            </div>
            <GooeyBar ready={this.state.appReady}></GooeyBar>
            <div className={classNames('loader', {'ready': this.state.appReady} )}>Traveling over space...</div>
            <Filter/>
        </div>;
    }
}

render(<Abduct/>, document.getElementById('app'));