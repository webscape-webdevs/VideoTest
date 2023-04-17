import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./VideoPlayer";

function mount(container, props) {
  ReactDOM.render(<VideoPlayer {...props} />, container);
}

export { mount };
