import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { FileUploader } from "react-bootstrap-fileuploader";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this._onChange = this._onChange.bind(this);
  }

  _onChange(files) {
    const file = files[0];
    this.setState({ file });
  }

  render() {
    const { file } = this.state;
    return (
      <div className="react-content">
        <div className="container-fluid">
          <div className="col-xs-12">
            <div className="page-header">
              <h1>react-bootstrap-fileuploader</h1>
            </div>
            <div className="form-group col-xs-4">
              <label htmlFor="fileName">ファイル名</label>
              <input
                type="text"
                value={file ? file.name : ""}
                className="form-control"
                readOnly
              />
            </div>
          </div>
          <div className="col-xs-12">
            <div className="page-header">
              <h3>Choice File</h3>
            </div>
            <FileUploader
              name="choiceFile"
              htmlFor="choiceFile"
              file={file}
              onChange={files => this._onChange(files)}
            />
            <div className="page-header">
              <h3>Drop & Drag</h3>
            </div>
            <FileUploader
              name="dropAndDrag"
              isDrop
              htmlFor="dropAndDrag"
              accept={["image/*"]}
              file={file}
              onChange={files => this._onChange(files)}
            />
          </div>
        </div>
      </div>
    );
  }
}
