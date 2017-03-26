import React from 'react';
import classNames from 'classnames';
import {render} from 'react-dom';
import AbInput from './components/form/ab.input.jsx';
import AbButton from './components/form/ab.button.jsx';
import Participants from './components/participants';
import Certificate from './components/certificate.jsx';
import _ from 'lodash';

class Abduct extends React.Component {
    constructor(){
        super();
        this.state = {
            appReady: true,
            error: false,
            proceed: false,
            name: '',
            names: []
        };
    }

    setParticipant(name){
        this.setState({error: false, proceed:true, name});
    }

    getAutoComplete() {
      let searchArgument = this._email.value;
      let names = []
      if (searchArgument.length > 3) {
        names =  Participants.filterParticipants(searchArgument);
      }
      this.setState({names});
    }

    renderAutoComplete() {
      let names = [];
      _.forEach(this.state.names, (participant, index) => {
        names.push(<li key={index} onClick={this.setParticipant.bind(this, participant.member.name)}>{participant.member.name}</li>)
      });
      return <ul>{names}</ul>
    }

    getIdleForm(errorEl) {
      return <div className={classNames('ab-header', {'ready': this.state.appReady} )} >
                <span className="animation-at-3"> Google Cloud Next 17 </span>
                {errorEl}
                <AbInput
                  ref={(abInput) => {this._email = abInput}}
                  onChange={this.getAutoComplete.bind(this)}
                  className='animation-at-2 ab-entrance'
                  placeholder="Email"/>

                <div className='auto-complete'>
                  <div className='content'>
                    {this.renderAutoComplete()}
                  </div>
                </div>
              </div>;
    }
    render () {
      let errorEl, proceedEl;
      if (this.state.error) {
        errorEl = <p className="animation-at-1 ab-entrance"> Email não encontrado, por favor verifique o email e tente novamente </p>;
      }
      if (this.state.proceed) {
        proceedEl = <div> <Certificate name={this.state.name}></Certificate> </div>;
      } else {
        proceedEl = this.getIdleForm(errorEl);
      }
      return proceedEl;
    }
}

render(<Abduct/>, document.getElementById('app'));
