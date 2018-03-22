import React from "react";
import ProgressiveLoading from "./ProgressiveLoading";
import Card from "./Card";

import original from "assets/tucano.jpg";
import thumb from "assets/tucano.thumb.jpg";
import trace from "assets/tucano.trace.svg";
import primitive from "assets/tucano.primitive.svg";

export default () =>
  <section className="section">
    <div className="container">
      <h1 className="title">Progressive Loading examples</h1>
    </div>

    <div className="container">
      <h2 className="title">Fatest option</h2>
      <Card title="Thumb + Blur" thumb={thumb}
            text={"Thumb of 64px and blur, 2 kbytes (inlined) ~0.3% of original size"}>
        <ProgressiveLoading src={original} thumb={thumb} blur={true}/>
      </Card>
      <h2 className="title">Middle term</h2>
      <Card title="Image Trace" thumb={trace} text={"Trace on a 256px version, 62kb ~8.5% of original size"}>
        <ProgressiveLoading src={original} thumb={trace}/>
      </Card>
      <h2 className="title">Visually the best option</h2>
      <Card title="Image Primitives" thumb={primitive}
            text={"500 elipses on a 512px version, 42kb ~6% of original size"}>
        <ProgressiveLoading src={original} thumb={primitive}/>
      </Card>
    </div>
  </section>