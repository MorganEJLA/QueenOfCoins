import React, { ReactElement } from "react";
import Svg, { Circle, Line, Path, Polygon, Rect } from "react-native-svg";
import { Colors } from "../constants/Colors";

const g = Colors.gold;

function getIcon(id: number, size: number): ReactElement | null {
  const props = { width: size, height: size, viewBox: "0 0 64 64" };
  const map: Record<number, ReactElement> = {
    0: (
      <Svg {...props}>
        <Circle cx="12" cy="12" r="3" stroke={g} strokeWidth="1" fill="none" />
        <Line
          x1="12"
          y1="12"
          x2="52"
          y2="52"
          stroke={g}
          strokeWidth="1"
          opacity="0.35"
        />
        <Circle cx="52" cy="52" r="9" stroke={g} strokeWidth="1" fill="none" />
        <Line
          x1="30"
          y1="20"
          x2="42"
          y2="20"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="36"
          y1="14"
          x2="36"
          y2="26"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
      </Svg>
    ),
    1: (
      <Svg {...props}>
        <Circle cx="32" cy="32" r="2" fill={g} />
        <Polygon
          points="32,10 28,18 36,18"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Rect
          x="44"
          y="28"
          width="8"
          height="8"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Circle cx="32" cy="54" r="4" stroke={g} strokeWidth="1" fill="none" />
        <Polygon
          points="10,32 14,28 18,32 14,36"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Line
          x1="32"
          y1="18"
          x2="32"
          y2="30"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
        <Line
          x1="44"
          y1="32"
          x2="34"
          y2="32"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
        <Line
          x1="32"
          y1="50"
          x2="32"
          y2="34"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
        <Line
          x1="18"
          y1="32"
          x2="30"
          y2="32"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
      </Svg>
    ),
    2: (
      <Svg {...props}>
        <Line x1="20" y1="12" x2="20" y2="52" stroke={g} strokeWidth="1" />
        <Line x1="44" y1="12" x2="44" y2="52" stroke={g} strokeWidth="1" />
        <Line
          x1="20"
          y1="32"
          x2="44"
          y2="32"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line x1="16" y1="12" x2="24" y2="12" stroke={g} strokeWidth="1" />
        <Line x1="40" y1="12" x2="48" y2="12" stroke={g} strokeWidth="1" />
      </Svg>
    ),
    3: (
      <Svg {...props}>
        <Polygon
          points="32,52 10,16 54,16"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Circle cx="32" cy="34" r="5" stroke={g} strokeWidth="1" fill="none" />
      </Svg>
    ),
    4: (
      <Svg {...props}>
        <Rect
          x="10"
          y="10"
          width="44"
          height="44"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Polygon
          points="32,16 48,32 32,48 16,32"
          stroke={g}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </Svg>
    ),
    5: (
      <Svg {...props}>
        <Line x1="10" y1="20" x2="54" y2="20" stroke={g} strokeWidth="1" />
        <Line
          x1="16"
          y1="32"
          x2="48"
          y2="32"
          stroke={g}
          strokeWidth="1"
          opacity="0.7"
        />
        <Line
          x1="22"
          y1="44"
          x2="42"
          y2="44"
          stroke={g}
          strokeWidth="1"
          opacity="0.4"
        />
      </Svg>
    ),
    6: (
      <Svg {...props}>
        <Circle cx="24" cy="32" r="16" stroke={g} strokeWidth="1" fill="none" />
        <Circle
          cx="40"
          cy="32"
          r="16"
          stroke={g}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </Svg>
    ),
    7: (
      <Svg {...props}>
        <Line x1="10" y1="14" x2="54" y2="32" stroke={g} strokeWidth="1" />
        <Line
          x1="10"
          y1="50"
          x2="54"
          y2="32"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="54"
          y1="32"
          x2="46"
          y2="26"
          stroke={g}
          strokeWidth="1"
          opacity="0.4"
        />
        <Line
          x1="54"
          y1="32"
          x2="46"
          y2="38"
          stroke={g}
          strokeWidth="1"
          opacity="0.4"
        />
      </Svg>
    ),
    8: (
      <Svg {...props}>
        <Path
          d="M 32 32 C 32 20 14 20 14 32 C 14 44 32 44 32 32 C 32 20 50 20 50 32 C 50 44 32 44 32 32 Z"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
      </Svg>
    ),
    9: (
      <Svg {...props}>
        <Circle cx="32" cy="14" r="6" stroke={g} strokeWidth="1" fill="none" />
        <Line x1="32" y1="20" x2="32" y2="56" stroke={g} strokeWidth="1" />
      </Svg>
    ),
    10: (
      <Svg {...props}>
        <Circle cx="32" cy="32" r="22" stroke={g} strokeWidth="1" fill="none" />
        <Line
          x1="16"
          y1="16"
          x2="48"
          y2="48"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line
          x1="48"
          y1="16"
          x2="16"
          y2="48"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Circle cx="32" cy="32" r="2" fill={g} />
      </Svg>
    ),
    11: (
      <Svg {...props}>
        <Line x1="32" y1="10" x2="32" y2="54" stroke={g} strokeWidth="1" />
        <Line x1="10" y1="24" x2="54" y2="24" stroke={g} strokeWidth="1" />
        <Line
          x1="16"
          y1="24"
          x2="16"
          y2="44"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="48"
          y1="24"
          x2="48"
          y2="44"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="10"
          y1="44"
          x2="22"
          y2="44"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="42"
          y1="44"
          x2="54"
          y2="44"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
      </Svg>
    ),
    12: (
      <Svg {...props}>
        <Line x1="16" y1="14" x2="48" y2="14" stroke={g} strokeWidth="1" />
        <Line x1="32" y1="14" x2="32" y2="40" stroke={g} strokeWidth="1" />
        <Circle cx="32" cy="50" r="8" stroke={g} strokeWidth="1" fill="none" />
      </Svg>
    ),
    13: (
      <Svg {...props}>
        <Line x1="32" y1="10" x2="32" y2="28" stroke={g} strokeWidth="1" />
        <Line
          x1="32"
          y1="36"
          x2="32"
          y2="54"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line
          x1="28"
          y1="28"
          x2="36"
          y2="28"
          stroke={g}
          strokeWidth="1"
          opacity="0.6"
        />
        <Line
          x1="28"
          y1="36"
          x2="36"
          y2="36"
          stroke={g}
          strokeWidth="1"
          opacity="0.3"
        />
      </Svg>
    ),
    14: (
      <Svg {...props}>
        <Polygon
          points="10,20 10,44 28,32"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Polygon
          points="54,20 54,44 36,32"
          stroke={g}
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
      </Svg>
    ),
    15: (
      <Svg {...props}>
        <Polygon
          points="32,52 10,16 54,16"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Line
          x1="10"
          y1="34"
          x2="54"
          y2="34"
          stroke={g}
          strokeWidth="1"
          opacity="0.7"
        />
      </Svg>
    ),
    16: (
      <Svg {...props}>
        <Line x1="22" y1="54" x2="22" y2="14" stroke={g} strokeWidth="1" />
        <Line x1="22" y1="54" x2="42" y2="54" stroke={g} strokeWidth="1" />
        <Line x1="42" y1="54" x2="42" y2="14" stroke={g} strokeWidth="1" />
        <Line
          x1="42"
          y1="20"
          x2="56"
          y2="10"
          stroke={g}
          strokeWidth="1"
          opacity="0.7"
        />
        <Line
          x1="50"
          y1="10"
          x2="56"
          y2="16"
          stroke={g}
          strokeWidth="1"
          opacity="0.4"
        />
      </Svg>
    ),
    17: (
      <Svg {...props}>
        <Rect
          x="16"
          y="16"
          width="32"
          height="32"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Polygon
          points="32,10 54,32 32,54 10,32"
          stroke={g}
          strokeWidth="1"
          fill="none"
          opacity="0.55"
        />
      </Svg>
    ),
    18: (
      <Svg {...props}>
        <Path
          d="M 18 52 A 24 24 0 1 1 46 52"
          stroke={g}
          strokeWidth="1"
          fill="none"
        />
        <Path
          d="M 24 48 A 14 14 0 1 1 40 48"
          stroke={g}
          strokeWidth="1"
          fill="none"
          opacity="0.45"
        />
        <Line
          x1="32"
          y1="52"
          x2="32"
          y2="60"
          stroke={g}
          strokeWidth="1"
          opacity="0.35"
        />
        <Line
          x1="24"
          y1="48"
          x2="24"
          y2="56"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
        <Line
          x1="40"
          y1="48"
          x2="40"
          y2="56"
          stroke={g}
          strokeWidth="1"
          opacity="0.2"
        />
      </Svg>
    ),
    19: (
      <Svg {...props}>
        <Circle cx="32" cy="32" r="10" stroke={g} strokeWidth="1" fill="none" />
        <Line x1="32" y1="18" x2="32" y2="10" stroke={g} strokeWidth="1" />
        <Line
          x1="46"
          y1="22"
          x2="52"
          y2="16"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line x1="50" y1="32" x2="58" y2="32" stroke={g} strokeWidth="1" />
        <Line
          x1="46"
          y1="42"
          x2="52"
          y2="48"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line x1="32" y1="46" x2="32" y2="54" stroke={g} strokeWidth="1" />
        <Line
          x1="18"
          y1="42"
          x2="12"
          y2="48"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
        <Line x1="14" y1="32" x2="6" y2="32" stroke={g} strokeWidth="1" />
        <Line
          x1="18"
          y1="22"
          x2="12"
          y2="16"
          stroke={g}
          strokeWidth="1"
          opacity="0.5"
        />
      </Svg>
    ),
    20: (
      <Svg {...props}>
        <Circle cx="32" cy="46" r="10" stroke={g} strokeWidth="1" fill="none" />
        <Line x1="32" y1="36" x2="32" y2="10" stroke={g} strokeWidth="1" />
        <Line x1="24" y1="10" x2="40" y2="10" stroke={g} strokeWidth="1" />
      </Svg>
    ),
    21: (
      <Svg {...props}>
        <Circle cx="32" cy="32" r="22" stroke={g} strokeWidth="1" fill="none" />
        <Circle cx="32" cy="32" r="2" fill={g} />
      </Svg>
    ),
    // Wands — ids 22–35
    ...Array.from({ length: 14 }, (_, i) => i + 22).reduce(
      (acc, id) => ({
        ...acc,
        [id]: (
          <Svg {...props}>
            <Line
              x1="32"
              y1="10"
              x2="32"
              y2="54"
              stroke={g}
              strokeWidth="1.5"
            />
            <Line
              x1="22"
              y1="20"
              x2="42"
              y2="20"
              stroke={g}
              strokeWidth="1"
              opacity="0.7"
            />
            <Line
              x1="18"
              y1="30"
              x2="46"
              y2="30"
              stroke={g}
              strokeWidth="1"
              opacity="0.5"
            />
            <Line
              x1="24"
              y1="40"
              x2="40"
              y2="40"
              stroke={g}
              strokeWidth="1"
              opacity="0.3"
            />
          </Svg>
        ),
      }),
      {},
    ),

    // Cups — ids 36–49
    ...Array.from({ length: 14 }, (_, i) => i + 36).reduce(
      (acc, id) => ({
        ...acc,
        [id]: (
          <Svg {...props}>
            <Path
              d="M 18 20 Q 18 46 32 50 Q 46 46 46 20 Z"
              stroke={g}
              strokeWidth="1.5"
              fill="none"
            />
            <Line x1="24" y1="50" x2="40" y2="50" stroke={g} strokeWidth="1" />
            <Line
              x1="28"
              y1="54"
              x2="36"
              y2="54"
              stroke={g}
              strokeWidth="1"
              opacity="0.6"
            />
          </Svg>
        ),
      }),
      {},
    ),

    // Swords — ids 50–63
    ...Array.from({ length: 14 }, (_, i) => i + 50).reduce(
      (acc, id) => ({
        ...acc,
        [id]: (
          <Svg {...props}>
            <Line x1="32" y1="8" x2="32" y2="48" stroke={g} strokeWidth="1.5" />
            <Polygon
              points="32,8 28,18 36,18"
              stroke={g}
              strokeWidth="1"
              fill="none"
            />
            <Line x1="22" y1="40" x2="42" y2="40" stroke={g} strokeWidth="1" />
            <Line
              x1="28"
              y1="48"
              x2="36"
              y2="56"
              stroke={g}
              strokeWidth="1"
              opacity="0.5"
            />
          </Svg>
        ),
      }),
      {},
    ),

    // Pentacles — ids 64–77
    ...Array.from({ length: 14 }, (_, i) => i + 64).reduce(
      (acc, id) => ({
        ...acc,
        [id]: (
          <Svg {...props}>
            <Circle
              cx="32"
              cy="32"
              r="20"
              stroke={g}
              strokeWidth="1.5"
              fill="none"
            />
            <Polygon
              points="32,14 36,26 50,26 39,34 43,46 32,38 21,46 25,34 14,26 28,26"
              stroke={g}
              strokeWidth="1"
              fill="none"
              opacity="0.8"
            />
          </Svg>
        ),
      }),
      {},
    ),
  };
  return map[id] ?? null;
}

type Props = { id: number; size?: number };

export default function CardIcon({ id, size = 72 }: Props) {
  return getIcon(id, size);
}
