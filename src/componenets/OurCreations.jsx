import React, { useEffect, useRef } from "react";
import data from "../assets/creations.json";
import { animateCreations } from "../animations/creationsAnimations";

export default function OurCreations() {
  const itemRefs = useRef([]);

  useEffect(() => {
    // just real element will sent to animation
    animateCreations(itemRefs.current.filter(Boolean));
  }, []);

  return (
    <section className="creations-section">
      <h2>Our Creations</h2>
      <div className="creation-container">
        {data.map((creation, index) => (
          <div
            key={creation.id}
            id={creation.id}
            className="creation-box"
            ref={(el) => (itemRefs.current[index] = el)}
            style={{
              "--mobile-img": `url(${creation.img.mobile})`,
              "--desktop-img": `url(${creation.img.desktop})`,
            }}
          >
            <h3>
              {creation.text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>
          </div>
        ))}
      </div>
      <button className="see-all-btn">see all</button>
    </section>
  );
}
