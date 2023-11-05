import type { FC } from "react";
import { useTheme } from "@mui/material/styles";

export const Logo: FC = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return <img src="/assets/japan/icons8-torii.svg" />;
};
