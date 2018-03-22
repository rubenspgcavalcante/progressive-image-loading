import React, { PureComponent } from "react";
import withIntersectionObserver from "../hocs/withIntersectionObserver"
import classNames from "classnames";
import { bool, string } from "prop-types";

class ProgresiveImageLoading extends PureComponent {
  static propTypes = {
    src: string.isRequired,
    thumb: string.isRequired,
    blur: bool
  };

  state = { ready: false };
  _triggered = false;
  _mounted = false;

  componentWillMount() {
    this._mounted = true;
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  componentWillReceiveProps({ intersecting }) {
    if (intersecting && !this._triggered) {
      this._triggered = true;
      const buffer = new Image();
      buffer.onload = () => this._mounted && this.setState({ ready: true });
      buffer.src = this.props.src;
    }
  }

  render() {
    const { src, thumb, blur } = this.props;
    const { ready } = this.state;

    return (
      <div className="progressive-loading">
        <div className="progressive-loading-wrapper">
          {ready ? <img className="original" src={src}/> : null}
          <img src={thumb} className={classNames("thumb", { blur, hide: ready })}/>
        </div>
      </div>
    )
  }
}

export default withIntersectionObserver(ProgresiveImageLoading);