import React from 'react';
import classNames from 'classnames';

class AbButton extends React.Component{
    constructor(){
        super();
    }
    onClickEvent(e){
        if(this.props.onClick){
            this.props.onClick();
        }
    }
    render(){
        return <div onClick={this.onClickEvent.bind(this)} className={classNames('ab-button', this.props.className)}>
            {this.props.children}
        </div>

    }
}

export default AbButton;