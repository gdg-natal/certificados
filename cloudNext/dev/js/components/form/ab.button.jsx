import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class AbButton extends React.Component{
    constructor(props){
        super(props);
        this.positions = {
          'center': { display: 'block', margin: '0 auto'}
        }
        let style = _.assign({}, this.positions[props.position]);
        style = _.assign(style, {fontSize: props.font});
        style = _.assign(style, {width: props.width});
        this.style = style;
    }
    onClickEvent(e){
        if(this.props.onClick){
            this.props.onClick();
        }
    }
    render(){
        return <div onClick={this.onClickEvent.bind(this)}
            style={this.style}
            className={classNames('ab-button', this.props.className)}>
            {this.props.children}
        </div>

    }
}

export default AbButton;
