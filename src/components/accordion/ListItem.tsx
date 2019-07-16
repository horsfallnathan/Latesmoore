import React from "react";
import Bullet from "assets/svg/bullet.svg";
import s from "components/accordion/Accordion.scss";

interface ListItemProps {
  children: React.ReactNode;
}

export default function ListItem({ children }: ListItemProps) {
  return (
    <div className={s.listItem}>
      <Bullet />
      <p>{children}</p>
    </div>
  );
}
