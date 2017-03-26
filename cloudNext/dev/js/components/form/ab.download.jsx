import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class AbDownload extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        console.log(props.context);
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
        return <a href={this.props.href}
            target="_BLANK"
            style={this.style}
            className={classNames('ab-button', this.props.className)}>
            {this.props.children}
        </a>

    }
}

export default AbDownload;
