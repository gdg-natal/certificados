import React from 'react';
import classNames from 'classnames';

class GooeyBar extends React.Component{
    constructor(){
        super();
        this.defaultColumnWidth = 40;
    }

    _randomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    _createColumns(){
        /**
         * Get the maximum number of columns for the client's screen
         * @type {number}
         */
        let columnLength = window.screen.width / this.defaultColumnWidth;
        /**
         * Get 30% of screen height for limit random sizes
         * @type {number}
         */
        let maximumHeight = window.screen.height * 0.3;

        let columns = Array.apply(null, Array(columnLength)).map(function (x, i) { return i; });

        return columns.map( (item, index) => {
            let min = this.defaultColumnWidth;
            return <div key={index} className="goo-column" style={ {height: this._randomNumber(min, maximumHeight) + 'px' } } ></div>
        });

    }

    render(){
        let ready = <div>
            <div className="up-bar"></div>
            {this._createColumns()}
        </div>;
        if(!this.props.ready){
            ready = null;
        }
        return (<div className={classNames('gooey', {'ready': this.props.ready})}>
            {ready}
        </div>);
    }

}

export default GooeyBar;