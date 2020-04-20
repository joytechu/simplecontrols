import React, { Component } from "react";
import PropTypes from "prop-types";

class Drawboard extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
    this.state = {
      strokeWidth: 5,
      linecCap: "round",
      strokeStyle: "#c0392b",
      pos: {
        x: 0,
        y: 0,
      },
    };
    this.draw = this.draw.bind(this);
    this.resize = this.resize.bind(this);
    this.setPosition = this.setPosition.bind(this);
  }

  // change code below this line
  componentDidMount() {
    window.addEventListener("resize", this.resize);
    document.addEventListener("mousemove", this.draw);
    document.addEventListener("mousedown", this.setPosition);
    document.addEventListener("mouseenter", this.setPosition);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
    document.removeEventListener("mousemove", this.draw);
    document.removeEventListener("mousedown", this.setPosition);
    document.removeEventListener("mouseenter", this.setPosition);
  }

  // new position from mouse event
  setPosition(e) {
    this.setState({
      pos: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  }

  // resize canvas
  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  draw(e) {
    var ctx = document.querySelector("canvas").getContext("2d");
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#c0392b";

    ctx.moveTo(this.state.pos.x, this.state.pos.y); // from
    this.setPosition(e);
    ctx.lineTo(this.state.pos.x, this.state.pos.y); // to

    ctx.stroke();
  }

  render() {
    return (
      <div className="canvas">
        <canvas ref={this.canvas} width="100vw" height="100vh"></canvas>
      </div>
    );
  }
}

Drawboard.propTypes = {};
export default Drawboard;
