"use client";
import { FC } from "react";
import { Button, ButtonProps } from "@mui/material";

const CustomButton: FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

export default CustomButton;
