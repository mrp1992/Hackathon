import React, { Component } from 'react';
//import Safe from 'react-safe';
//import Iframe from 'react-iframe';
import CanvasDraw from "react-canvas-draw";
import tools from "../../index.css";


class SignatureApp extends Component {

    state = {
        color: "#000000",
        width: 350,
        height: 150
    };

    defaultProps = {
        loadTimeOffset: 5,
        lazyRadius: 0,
        brushRadius: 2,
        brushColor: "#000000",
        catenaryColor: "#0a0302",
        gridColor: "rgba(150,150,150,0.17)",
        hideGrid: false,
        canvasWidth: 400,
        canvasHeight: 200,
        disabled: false,
        imgSrc: ""
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
            onClick={() => {
              localStorage.setItem(
                "savedDrawing",
                this.saveableCanvas.getSaveData()
              );
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

export default SignatureApp;