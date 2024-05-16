import { Link } from "@radix-ui/themes";
import React from "react";

type BackButtonProps = {
  label: string;
  href: string;
};

export const BackButton = (props: BackButtonProps) => {
  const { label, href } = props;

  return (
    <Link href={href} size="2" className="pt-1">
      {label}
    </Link>
  );
};
