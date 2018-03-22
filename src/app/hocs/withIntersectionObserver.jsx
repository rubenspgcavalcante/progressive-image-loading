import React, { PureComponent } from "react";
import { registerScrollArea } from "../utils/intersection";

export default function withIntersectionObserver(Component) {
  const subscriber = registerScrollArea();

  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { intersecting: null };
      this._mounted = false;
      this._wrapper = null;
    }

    componentDidMount() {
      this._mounted = true;
      subscriber(this._wrapper)
        .subscribe(intersecting =>
          this._mounted && this.setState({ intersecting })
        );
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    render() {
      return (
        <div className="intersection-obs" ref={wrapper => this._wrapper = wrapper}>
          <Component intersecting={this.state.intersecting} {...this.props} />
        </div>
      );
    }
  }
}
