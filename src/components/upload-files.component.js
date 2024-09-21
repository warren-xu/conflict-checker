import React, { Component } from "react";
import UploadCSV from "../services/upload-files.service";

class UploadFiles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      file: null,
      uploading: false,
      message: "",
      progress: 0,
      fileInfos: [],
    };

    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFileChange(event) {
    this.setState({
      file: event.target.files[0],
      message: "", // Clear any previous error message
    });
  }

  async handleUpload() {
    const { file } = this.state;
    if (!file) {
      this.setState({ message: "Please select a file." });
      return;
    }

    this.setState({ uploading: true, progress: 0 }); // Set uploading state to true

    try {
      const formData = new FormData();
      formData.append("csv", file);

      await UploadCSV.upload(formData);

      const { fileInfos } = this.state;
      fileInfos.push({
        name: file.name,
        size: file.size,
        type: file.type,
      });

      this.setState({ fileInfos, message: "File uploaded successfully!" });
    } catch (error) {
      this.setState({ message: "Failed to upload file. Please try again." });
      console.error(error);
    } finally {
      this.setState({ uploading: false }); // Set uploading state back to false
    }
  }

  render() {
    const { file, uploading, message, progress, } = this.state;

    return (
      <div>
        {progress > 0 && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}

        <label className="btn btn-default">
          <input type="file" onChange={this.handleFileChange} />
        </label>

        <button
          className="btn btn-success"
          disabled={!file || uploading}
          onClick={this.handleUpload}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {message && <div className="alert alert-light">{message}</div>}
      
      </div>
    );
  }
}

export default UploadFiles;
