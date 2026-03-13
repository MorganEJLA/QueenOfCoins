import React from "react";
import Svg, { Circle, Line, Rect } from "react-native-svg";

type Props = {
  name: "today" | "ritual" | "history" | "settings";
  color: string;
  size?: number;
};

export default function TabIcon({ name, color, size = 20 }: Props) {
  const props = { width: size, height: size, viewBox: "0 0 24 24" };

  switch (name) {
    case "today":
      return (
        <Svg {...props}>
          <Circle
            cx="12"
            cy="12"
            r="9"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <Circle cx="12" cy="12" r="2" fill={color} />
        </Svg>
      );
    case "ritual":
      return (
        <Svg {...props}>
          <Line x1="4" y1="7" x2="20" y2="7" stroke={color} strokeWidth="1" />
          <Line x1="6" y1="12" x2="18" y2="12" stroke={color} strokeWidth="1" />
          <Line x1="9" y1="17" x2="15" y2="17" stroke={color} strokeWidth="1" />
        </Svg>
      );
    case "history":
      return (
        <Svg {...props}>
          <Rect
            x="3"
            y="3"
            width="7"
            height="7"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <Rect
            x="14"
            y="3"
            width="7"
            height="7"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <Rect
            x="3"
            y="14"
            width="7"
            height="7"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <Rect
            x="14"
            y="14"
            width="7"
            height="7"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
        </Svg>
      );
    case "settings":
      return (
        <Svg {...props}>
          <Circle
            cx="12"
            cy="12"
            r="9"
            stroke={color}
            strokeWidth="1"
            fill="none"
          />
          <Line x1="4" y1="9" x2="20" y2="9" stroke={color} strokeWidth="1" />
          <Line x1="4" y1="15" x2="20" y2="15" stroke={color} strokeWidth="1" />
        </Svg>
      );
  }
}
