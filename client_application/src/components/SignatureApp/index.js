import React, { Component } from "react";
import CanvasDraw from "react-canvas-draw";
import PropTypes from 'prop-types';
import tools from "../../index.css";
import { Divider } from 'antd';


class SignatureApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: "#000000",
            width: this.props.canvasWidth,
            height: this.props.canvasHeight,
            showSave: this.props.showSave,
            showClear: this.props.showClear,
            signRef: this.saveableCanvas,
        };
    }

    getImageUrl() {
        var image = new Image();
        image = this.saveableCanvas.canvas.drawing.toDataURL('image/png');
        return image;
    }

    saveToLocalStorage = () => {
        console.log("reached");
        var allEntries = JSON.parse(localStorage.getItem("savedSignature")) || [];
        //allEntries.push(this.saveableCanvas.getSaveData());
        allEntries.push(this.getImageUrl());
        localStorage.setItem("savedSignature",JSON.stringify(allEntries));
    };


    clearSign = () => {
        this.saveableCanvas.clear();
    }

    componentWillMount() {

    }

render() {
    return (
      <div>
        <Divider orientation="left">Please sign here </Divider>
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.color}
          canvasWidth={this.state.width}
          canvasHeight={this.state.height}
          lazyRadius={0}
          brushRadius={1}
        />

        <div className={tools}>
          {this.state.showSave && (<button
            onClick={() => {this.saveToLocalStorage();
            }}
          >
            Save
          </button>)}


          {this.state.showClear && (<button
            onClick={() => {
              this.saveableCanvas.clear();
            }}
          >
            Clear
          </button>)}
        </div>

      </div>
    );
  }
}

SignatureApp.PropTypes = {
    saveToLocalStorage: PropTypes.func,
    signRef: PropTypes.object,
    brushColor: PropTypes.string,
    canvasWidth: PropTypes.int,
    canvasHeight: PropTypes.int,
    showSave: PropTypes.bool,
    showClear: PropTypes.bool,
};

export default SignatureApp;