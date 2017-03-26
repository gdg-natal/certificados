import React from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import AbButton from './form/ab.button.jsx';
import AbDownload from './form/ab.download.jsx';
class Certificate extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.height = 1772;
        this.width = 2480;
        this.state = {
          href: null
        };
    }
    componentDidMount() {
      var context = ReactDOM.findDOMNode(this.refs.canvas).getContext('2d');
      this.paint(context);
    }

    getBase(callback) {
      let image = document.createElement('img');
      image.src = 'static/images/base.jpg';
      image.onload = callback.bind(this, image);
    }
    drawImage(context, image) {
      let scale = image.height / this.height;
      let width = image.width / scale;
      let height = image.height / scale;
      let paddingLeft = (this.width - width) / 2;
      let paddindTop = (this.height - height) / 2;

      context.drawImage(image, paddingLeft, paddindTop, width, height);
    }
    drawName(context) {
      context.font = '116px product-sans';
      context.fillStyle = '#fff';
      let textSize = context.measureText(this.name);
      let xPos = (this.width - textSize.width - 100) / 2;
      context.fillText(this.name, xPos, 930);
    }
    paint(context) {

      this.getBase((image) => {
        context.save();
        this.drawImage(context, image);
        this.drawName(context);
        context.restore();
      })

    }
    download() {
      this.setState({
        href: ReactDOM.findDOMNode(this.refs.canvas).toDataURL("image/png")
      });
    }
    render() {
      let downloadButton = <AbButton onClick={this.download.bind(this)}
          position='center'
          font='20px'
          width='200px'
          className="animation-at-1 ab-entrance"> Gerar Certificado </AbButton>;

      if (this.state.href) {
        downloadButton = <AbDownload href={this.state.href} download="Certificado"
            position='center'
            font='20px'
            width='200px'
            className="animation-at-1 ab-entrance"> Gerar Certificado </AbDownload>
      }

      return <div>
        <canvas ref="canvas"
          style={{ width: window.innerWidth * 0.6,
                   hight: window.innerHeight * 0.6,
                   display: 'block',
                   margin: '0 auto'
                 }}
          width={2480} height={1772} />
        <br/>
        {downloadButton}
      </div>;
    }

}

export default Certificate;
