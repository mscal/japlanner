import type { ReactNode } from "react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { SvgIcon } from "@mui/material";

import File01Icon from "src/icons/untitled-ui/duocolor/file-01";
import HomeSmileIcon from "src/icons/untitled-ui/duocolor/home-smile";
import { tokens } from "src/locales/tokens";
import { paths } from "src/paths";

export interface Item {
  disabled?: boolean;
  external?: boolean;
  icon?: ReactNode;
  items?: Item[];
  label?: ReactNode;
  path?: string;
  title: string;
}

export interface Section {
  items: Item[];
  subheader?: string;
}

export const useSections = () => {
  const { t } = useTranslation();

  return useMemo(() => {
    return [
      {
        items: [
          {
            title: "Trip Overview",
            path: paths.index,
            icon: (
              <SvgIcon fontSize="small">
                <HomeSmileIcon />
              </SvgIcon>
            ),
          },
          {
            title: "Schedule",
            path: paths.schedule,
            icon: (
              <SvgIcon fontSize="small">
                <File01Icon />
              </SvgIcon>
            ),
          },
          {
            title: "Todos",
            path: paths.todos,
            icon: (
              <SvgIcon fontSize="small">
                <File01Icon />
              </SvgIcon>
            ),
          },
          {
            title: "Tickets",
            path: paths.tickets,
            icon: (
              <SvgIcon fontSize="small">
                <File01Icon />
              </SvgIcon>
            ),
          },
        ],
      },
    ];
  }, [t]);
};
