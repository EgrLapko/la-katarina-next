import React, { memo, useCallback, useEffect, useState } from "react";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface IProps {
  sections: any[];
  className?: string;
}

const useStyles = makeStyles((theme) => ({}));

const line = 152;

const getHash = (id) => `#${id}`;

const SmoothNavigationMenu: React.FC<IProps> = ({
  sections = [],
  className,
  ...props
}) => {
  const [currentHash, setCurrentHash] = useState("");

  const handleScroll = useCallback(() => {
    sections.some(({ id }) => {
      const hash = getHash(id);
      if (currentHash === hash) {
        return false;
      }

      const anchor = document.getElementById(id);
      const { top, bottom } = anchor.getBoundingClientRect();

      const match = line > top && line < bottom;
      if (match) {
        setCurrentHash(hash);
      }

      return match;
    });
  }, [sections, currentHash]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setCurrentHash(window.location.hash);
    const id = window.location.hash.substring(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div>
      {sections.map(({ id, text }) => {
        const hash = getHash(id);
        const selected = hash === currentHash;

        return (
          <ListItem
            button
            key={id}
            selected={selected}
            href={hash}
            component={Link}
            underline="none"
          >
            <ListItemText primary={text} />
          </ListItem>
        );
      })}
    </div>
  );
};

export default memo(SmoothNavigationMenu);
