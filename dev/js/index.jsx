import React from 'react';
import classNames from 'classnames';
import {render} from 'react-dom';
import AbInput from './components/form/ab.input.jsx';
import AbButton from './components/form/ab.button.jsx';
import getParticipants from './components/participants';
import Certificate from './components/certificate.jsx';

class Abduct extends React.Component {
    constructor(){
        super();
        this.state = {
            appReady: true,
            error: false,
            proceed: false,
            name: ''
        };
    }

    request(){
        let participant = getParticipants(this._email.value);
        let proceed = false;
        let error = _.isUndefined(participant) ? true : false;
        if (participant) {
          proceed = true;
        }

        this.setState({error, proceed, name: participant});
    }

    getIdleForm(errorEl) {
      return <div className={classNames('ab-header', {'ready': this.state.appReady} )} >
                <span className="animation-at-3"> Evento X </span>
                {errorEl}
                <AbInput
                  ref={(abInput) => {this._email = abInput}}
                  className='animation-at-2 ab-entrance'
                  placeholder="Email"/>

                <AbButton onClick={this.request.bind(this)}
                  className="animation-at-1 ab-entrance"> Solicitar Certificado </AbButton>
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
