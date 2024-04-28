import { Heading } from "@radix-ui/themes";
import React from "react";

type HeaderProps = {
  label: string;
};
export const Header = (props: HeaderProps) => {
  const { label } = props;
  return <Heading as="h3">{label}</Heading>;
};
