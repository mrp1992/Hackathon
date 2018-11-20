import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import PropTypes from 'prop-types';
import tools from "../../index.css";


class SignatureApp extends Component {

    state = {
        color: "#000000",
        width: 350,
        height: 150
    };

    saveToLocalStorage = () => {
        var allEntries = JSON.parse(localStorage.getItem("savedSignature")) || [];
        allEntries.push(this.saveableCanvas.getSaveData());
        localStorage.setItem("savedSignature",JSON.stringify(allEntries));
    };

    componentDidMount() {

    }

render() {
    return (
      <div>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          lazyRadius={0}
          brushRadius={1}
        />

        <div className={tools}>
          <button
            onClick={() => {this.saveToLocalStorage();
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo();
            }}
          >
            Undo
          </button>

        </div>

      </div>
    );
  }
}

SignatureApp.PropTypes = {
    saveCallBack: PropTypes.func,
    brushColor: PropTypes.string,
    canvasWidth: PropTypes.int,
    canvasHeight: PropTypes.int
};

export default SignatureApp;