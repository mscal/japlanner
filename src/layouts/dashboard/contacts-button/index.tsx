import type { FC } from "react";
import { subHours, subMinutes } from "date-fns";
import Users03Icon from "@untitled-ui/icons-react/build/esm/Users03";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import Tooltip from "@mui/material/Tooltip";

import { usePopover } from "src/hooks/use-popover";

import { ContactsPopover } from "./contacts-popover";

const now = new Date();

interface Contact {
  id: string;
  avatar: string;
  isActive: boolean;
  lastActivity?: number;
  name: string;
}

const useContacts = (): Contact[] => {
  return [
    {
      id: "5e8891ab188cd2855e6029b7",
      avatar: "/assets/avatars/mike.png",
      isActive: true,
      lastActivity: now.getTime(),
      name: "Mike",
    },
    {
      id: "5e887a62195cc5aef7e8ca5d",
      avatar: "/assets/avatars/fee.png",
      isActive: false,
      lastActivity: now.getTime(),
      name: "Fee",
    },
    {
      id: "5e887b209c28ac3dd97f6db5",
      avatar: "/assets/avatars/nat.png",
      isActive: true,
      lastActivity: now.getTime(),
      name: "Nat",
    },
    {
      id: "5e887b7602bdbc4dbb234b27",
      avatar: "/assets/avatars/meg.png",
      isActive: true,
      lastActivity: now.getTime(),
      name: "Meg",
    },
  ];
};

export const ContactsButton: FC = () => {
  const popover = usePopover<HTMLButtonElement>();
  const contacts = useContacts();

  return (
    <>
      <Tooltip title="Contacts">
        <IconButton onClick={popover.handleOpen} ref={popover.anchorRef}>
          <SvgIcon>
            <Users03Icon />
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <ContactsPopover
        anchorEl={popover.anchorRef.current}
        contacts={contacts}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
