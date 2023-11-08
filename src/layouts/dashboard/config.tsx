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
            icon: <img src="/assets/japan/icons8-asia.svg" width={"40"} />,
          },
          {
            title: "Schedule",
            path: paths.schedule,
            icon: <img src="/assets/japan/icons8-schedule.svg" width={"40"} />,
          },
          {
            title: "Food",
            path: paths.food,
            icon: (
              <img
                src="/assets/japan/icons8-kawaii-french-fries.svg"
                width={"40"}
              />
            ),
          },

          {
            title: "Tickets",
            path: paths.tickets,
            icon: (
              <img src="/assets/japan/icons8-train-ticket.svg" width={"40"} />
            ),
          },
          {
            title: "Todos",
            path: paths.todos,
            icon: (
              <img src="/assets/japan/icons8-task-completed.svg" width={"40"} />
            ),
          },
        ],
      },
    ];
  }, [t]);
};
