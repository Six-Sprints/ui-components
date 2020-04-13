import React, { Component } from "react";
import moment from "moment";
import fileDownload from "js-file-download";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: props.isLoading };
  }

  handleChange = evt => {
    const { onUpload, url, isMultiple } = this.props;
    this.setState({ isLoading: true });
    let fileArray = Object.values(evt.target.files);

    let formData = new FormData();
    if (isMultiple) {
      fileArray.forEach((item, index) => {
        formData.append("files", item);
      });
    } else {
      formData.append("file", fileArray[0]);
    }
  };
  render() {
    const { isLoading } = this.state;
    const { text, className, isMultiple } = this.props;

    if (isLoading) {
      return "";
    }
    return (
      <div
        className={className}
        onClick={() => {
          this.refs.file.click();
        }}
      >
        {isMultiple ? (
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            ref="file"
            onChange={this.handleChange}
          />
        ) : (
          <input
            type="file"
            style={{ display: "none" }}
            ref="file"
            onChange={this.handleChange}
          />
        )}

        {text}
      </div>
    );
  }
}

export default FileUpload;
