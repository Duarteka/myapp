import "../styles.css";

import React, { useState } from "react";
import { a, useTrail } from "react-spring";

interface HelloProps {
  open?: any;
  children?: JSX.Element | null | any;
  props?: any;
  onClick?: () => void;
}

function Trail({ open, children, ...props }: HelloProps) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });
  return (
    <div className="trails-main" {...props}>
      <div
        style={{
          transform: "translateY(-35rem)",
        }}
      >
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

export default function Hello() {
  const [open, set] = useState(true);
  return (
    <Trail open={open} onClick={() => set((state) => !state)}>
      <span className="secctionHeader">Projects</span>
    </Trail>
  );
}
