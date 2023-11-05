import type { FC } from "react";
import PropTypes from "prop-types";
import Menu01Icon from "@untitled-ui/icons-react/build/esm/Menu01";
import { alpha } from "@mui/system/colorManipulator";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material/styles/createTheme";

import { AccountButton } from "../account-button";
import { ContactsButton } from "../contacts-button";
import { LanguageSwitch } from "../language-switch";
import { NotificationsButton } from "../notifications-button";
import { SearchButton } from "../search-button";
import { SettingsButton } from "src/components/settings/settings-button";
import { Button } from "@mui/material";

const TOP_NAV_HEIGHT: number = 64;
const SIDE_NAV_WIDTH: number = 280;

interface TopNavProps {
  onMobileNavOpen?: () => void;
}

const navItems = [
  {
    title: "Trip Overview",
    path: "/",
    icon: <img src="/assets/japan/icons8-asia.svg" width={"30"} />,
  },
  {
    title: "Schedule",
    path: "/schedule",
    icon: <img src="/assets/japan/icons8-schedule.svg" width={"30"} />,
  },
  {
    title: "Todos",
    path: "/todos",
    icon: <img src="/assets/japan/icons8-task-completed.svg" width={"30"} />,
  },
  {
    title: "Tickets",
    path: "/tickets",
    icon: <img src="/assets/japan/icons8-train-ticket.svg" width={"30"} />,
  },
];

export const TopNav: FC<TopNavProps> = (props) => {
  const { onMobileNavOpen, ...other } = props;
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up("lg"));

  return (
    <Box
      component="header"
      sx={{
        backdropFilter: "blur(6px)",
        backgroundColor: (theme) =>
          alpha(theme.palette.background.default, 0.8),
        position: "sticky",
        left: {
          lg: `${SIDE_NAV_WIDTH}px`,
        },
        bottom: 0,
        width: {
          lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
        },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
      {...other}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{
          minHeight: TOP_NAV_HEIGHT,
          px: 2,
        }}
      >
        <Stack alignItems="center" direction="row" spacing={2}>
          {!lgUp && (
            <IconButton onClick={onMobileNavOpen}>
              <SvgIcon>
                <Menu01Icon />
              </SvgIcon>
            </IconButton>
          )}
        </Stack>
        <Stack
          sx={{ display: { lg: "none", sm: "flex" } }}
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {navItems.map((items, index) => {
            return (
              <Button key={index} href={items.path}>
                {items.icon}
              </Button>
            );
          })}
        </Stack>
        <Stack alignItems="center" direction="row" spacing={2}>
          <ContactsButton />

          {/* <AccountButton /> */}
        </Stack>
      </Stack>
    </Box>
  );
};

TopNav.propTypes = {
  onMobileNavOpen: PropTypes.func,
};
