import React, { AnchorHTMLAttributes } from "react";
import NextLink, { LinkProps } from "next/link";

/* eslint-disable jsx-a11y/anchor-has-content */
const LinkComponent = React.forwardRef<
  HTMLAnchorElement,
  LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
  const { href, as, scroll, ...other } = props;
  return (
    <NextLink href={href} as={as} scroll={scroll}>
      <a ref={ref} {...other} />
    </NextLink>
  );
});

export default LinkComponent;
