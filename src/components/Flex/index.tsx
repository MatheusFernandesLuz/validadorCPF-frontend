import React from "react";
import "./styles.css";

interface FlexProps {
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  justify?: "center" | "flex-start" | "flex-end";
  align?: "center" | "flex-start" | "flex-end";
}

const Flex: React.FC<FlexProps> = (props) => {
  const { children, ...flexProps } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: flexProps.direction || "row",
        justifyContent: flexProps.justify || "center",
        alignItems: flexProps.align || "center",
      }}
    >
      {children}
    </div>
  );
};

export { Flex };
