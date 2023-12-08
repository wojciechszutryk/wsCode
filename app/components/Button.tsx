import React, { PropsWithChildren } from "react";
import {
  Button as RadixButton,
  GetPropDefTypes,
  buttonPropDefs,
} from "@radix-ui/themes";

const Button = (
  props: GetPropDefTypes<typeof buttonPropDefs> &
    PropsWithChildren &
    React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <RadixButton className="hover:cursor-pointer" {...props}>
      {props.children}
    </RadixButton>
  );
};

export default Button;
