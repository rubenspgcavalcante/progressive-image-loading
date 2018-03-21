import React, { PureComponent } from "react";
import { registerScrollArea } from "../utils/intersection";

export default function withIntersectionObserver(Component) {
  return class extends PureComponent {
    constructor(props) {
      super(props);
      this.state = { intersecting: null };
      this._subscriber = registerScrollArea();
      this._mounted = false;
      this._intersection$ = null;
      this._wrapper = null;
    }

    componentDidMount() {
      this._mounted = true;
      this._intersection$ = this._subscriber(this._wrapper);
      this._intersection$
        .subscribe(({ entry }) =>
          this._mounted && this.setState({ intersecting: entry[0].isIntersecting })
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
