import React from 'react';
import classNames from 'classnames';

class AbInput extends React.Component{
    constructor(){
        super();
        this.state = {
            active: false,
        }
    }

    componentDidMount(){
        this._input.addEventListener("focus", () => {
            this.setState({active: true});
        });
        this._input.addEventListener("blur", () => {
            if(this._input.value === ""){
                this.setState({active: false});
            }
        });
    }
    onChangeEvent(){
        this.value = this._input.value;
        if(this.props.onChange){
            this.props.onChange(this.value);
        }
    }
    render(){
        return <div className={classNames('ab-input', this.props.className, {'active': this.state.active})}>
            <input onChange={this.onChangeEvent.bind(this)} className={classNames('ab-input-receiver', {'active': this.state.active})} placeholder={this.props.placeholder}
                   defaultValue={this.props.defaultValue}
                   ref={(input) => { this._input = input; }}
            />
        </div>
    }
}

export default AbInput;