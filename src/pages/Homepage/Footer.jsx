import React from 'react';
import './Footer.css';

class SineWave extends React.Component {
  canvas = React.createRef();
  ctx = null;
  animationFrameId = null;

  componentDidMount() {
    const { height, fill, stroke, strokeWidth } = this.props;
    this.ctx = this.canvas.current.getContext("2d");
    const lg = this.ctx.createLinearGradient(0, 0, 0, height);
    lg.addColorStop(0, "#3d29f500");
    lg.addColorStop(1, "#3d29f5aa");

    this.ctx.fillStyle = fill;
    this.ctx.strokeStyle = strokeWidth === 0 ? 'transparent' : stroke;
    this.ctx.lineWidth = strokeWidth;

    this.animateWave();
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameId);
  }

  animateWave = () => {
    this.draw();
    this.animationFrameId = window.requestAnimationFrame(this.animateWave);
  }

  draw = () => {
    const { start, width, height, amplitude, frequency } = this.props;
    this.ctx.clearRect(0, 0, width, height);
    const mid = height / 2;
    const y = x => amplitude * Math.sin((Math.PI / 180) * (frequency * x + start));
    this.ctx.beginPath();
    for (let x = 0; x <= width; x += 1) {
      this.ctx.lineTo(x, mid + y(start + x));
    }
    this.ctx.stroke();
    this.ctx.lineTo(width, height);
    this.ctx.lineTo(0, height);
    this.ctx.fill();
  }

  render() {
    const { width, height } = this.props;
    return <canvas ref={this.canvas} id="wave" width={width} height={height} />;
  }
}

class AnimatedSineWave extends React.Component {
  state = {
    start: 0
  }

  componentDidMount() {
    const { speed, frequency } = this.props;
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        start: prevState.start + speed
    }));
    }, 16);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { start } = this.state;
    return <SineWave start={start} {...this.props} />;
  }
}

const config = {
  width: window.innerWidth,
  height: 100,
  amplitude: 5,
  frequency: 0.8,
  fill: '#4779f7',
  stroke: 'transparent',
  strokeWidth: 0
};

const Footer = () => {
  return (
    <footer className="footer-container">
      <AnimatedSineWave speed={1} {...config} />
      <AnimatedSineWave speed={3} {...config} frequency={0.5} />
      <p id="content_footer_logotext">
        Built and designed by Farnaz Zinnah. All rights reserved. ©
      </p>
    </footer>
  );
}

export default Footer;
