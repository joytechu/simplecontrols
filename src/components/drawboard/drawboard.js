import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

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
      palette: [
        "#c0392b",
        "#47F95B",
        "#F9E147",
        "#47D6F9",
        "#C047F9",
        "#F947EC",
        "#F9475F",
      ],
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
    var element = this.canvas.current.getBoundingClientRect();
    this.setState({
      pos: {
        x: e.clientX,
        y: e.clientY - element.top,
      },
    });
  }

  // resize canvas
  resize() {
    console.log(this.canvas.width);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  draw(e) {
    var ctx = document.querySelector("canvas").getContext("2d");
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = this.state.strokeWidth;
    ctx.lineCap = "round";
    ctx.strokeStyle = this.state.strokeStyle;

    ctx.moveTo(this.state.pos.x, this.state.pos.y); // from
    this.setPosition(e);
    ctx.lineTo(this.state.pos.x, this.state.pos.y); // to

    ctx.stroke();
  }

  render() {
    const changeStroke = (color) => {
      this.setState(
        {
          strokeStyle: color,
        },
        () => {
          if (this.props.onChangeStroke) this.props.onChangeStroke(color);
        }
      );
    };

    return (
      <div className="drawboard">
        <canvas
          className="canvas"
          width="100%"
          height="100%"
          ref={this.canvas}
        ></canvas>
        <div className="palette">
          {this.state.palette.map((item, idx) => {
            return (
              <span
                key={idx}
                className="palette__color"
                onClick={() => changeStroke(item)}
                style={{ backgroundColor: item }}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}

Drawboard.propTypes = {
  onChangeStroke: PropTypes.func,
};
export default Drawboard;
