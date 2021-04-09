import { Component } from "react";
import "../styles/Footer.scss";

type FooterProps = {
  reset: () => void;
  start: () => void;
};

class Footer extends Component<FooterProps> {
  render() {
    const { reset, start } = this.props;

    return (
      <footer>
        <div className="controls">
          <button onClick={reset}>New set</button>
          <button onClick={start}>Start</button>
        </div>
        <p className="status">Not solved | Paused | Solved</p>
      </footer>
    );
  }
}

export default Footer;
