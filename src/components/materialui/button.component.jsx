import Button from "@material-ui/core/Button";
import React from "react";

const CustomBtn = props => {
  const { text, onClick, size, variant, color, className, type } = props;
  return (
    <Button
      style={{ color }}
      onClick={onClick}
      size={size}
      variant={variant}
      color={color}
      className={className}
      type={type}
    >
      {text}
    </Button>
  );
};

export default CustomBtn;
