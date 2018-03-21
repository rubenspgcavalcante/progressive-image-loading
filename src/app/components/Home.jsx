import React from "react";
import ProgressiveLoading from "./ProgressiveLoading";
import Card from "./Card";

import araraPic from "assets/arara.jpg";
import araraThumb from "assets/arara.thumb.jpg";
import araraTrace from "assets/arara.trace.svg";
import araraPrimitive from "assets/arara.primitive.png";

export default () =>
  <section className="section">
    <div className="big-block container">
      <h1 className="title">Scroll down</h1>
    </div>

    <div className="container">
      <Card thumb={araraThumb} text={"Low size and blur ~900 bytes (inlined)"}>
        <ProgressiveLoading src={araraPic} thumb={araraThumb} blur={true} />
      </Card>

      <Card thumb={araraPrimitive} text={"Trace 25kb ~3% of original size"}>
        <ProgressiveLoading src={araraPic} thumb={araraTrace} />
      </Card>

      <Card thumb={araraPrimitive} text={"Primitive 80kb ~10% of original size"}>
        <ProgressiveLoading src={araraPic} thumb={araraPrimitive} />
      </Card>
    </div>
  </section>