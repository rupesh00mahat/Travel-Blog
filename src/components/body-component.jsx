import React from "react";
import Img1 from "../assets/img-1.jpg";
import "../style.css";

function BodyComponent(props) {
  return (
    <div id={`body-component-${props.imgAlign}`} className={`body-component-${props.imgAlign}`}>
      <img src={Img1} />
      <div id="body-component-content">
        <h1>the mountains</h1>
        <p>
          Contemplation is an unbiased interpration of intellect. The attitude
          towards modernity, as is commonly believed, decisively induces Taoism.
          Doube is considered a gravitational paradox. Dualism, therefore,
          transforms the intellect, although in the official language the
          opposite is accepted. The sign is abstract. Hegelianism, as is
          commonly believed, intelligently undermines the law of the excluded
          third, although in the official one the opposite is.
        </p>
        <button className="more-button">more</button>
      </div>
    </div>
  );
}

export default BodyComponent;
