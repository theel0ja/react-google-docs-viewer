import React, { Component } from 'react';

class GoogleDocsViewer extends Component {
  render() {
    let iframeSrc = "https://docs.google.com/viewer?url=" + this.props.fileUrl + "&embedded=true";

    let style = {
      width: this.props.width,
      height: this.props.height,
      border: 'none'
    };

    return (
      <div>
        <iframe src={iframeSrc}
          style={style}></iframe>
      </div>
    );
  }
}

export default GoogleDocsViewer;