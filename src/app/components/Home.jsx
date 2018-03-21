import React from "react";
import ProgressiveLoading from "./ProgressiveLoading";
import Card from "./Card";

import araraPic from "assets/arara.jpg";
import araraThumb from "assets/arara.thumb.jpg";
import araraTrace from "assets/arara.trace.svg";
import araraPrimitive from "assets/arara.primitive.svg";

export default () =>
  <section className="section">
    <div className="container">
      <h1 className="title">Progressive Loading examples</h1>
    </div>

    <div className="container">
      <h2 className="title">Fatest option</h2>
      <Card title="Thumb + Blur" thumb={araraThumb} text={"Thumb of 64px and blur, ~900 bytes (inlined)"}>
        <ProgressiveLoading src={araraPic} thumb={araraThumb} blur={true} />
      </Card>
      <h2 className="title">Middle term</h2>
      <Card title="Image Trace" thumb={araraPrimitive} text={"Trace on a 256px version, 25kb ~3% of original size"}>
        <ProgressiveLoading src={araraPic} thumb={araraTrace} />
      </Card>
      <h2 className="title">Visually best option</h2>
      <Card title="Image Primitives" thumb={araraPrimitive} text={"500 elipses on a 512px version, 41kb ~5% of original size"}>
        <ProgressiveLoading src={araraPic} thumb={araraPrimitive} />
      </Card>
    </div>
  </section>