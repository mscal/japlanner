import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, useState } from "react";

export default function CommonTabs({
  mikesTickets,
  feesTickets,
  natsTickets,
  megsTickets,
}: {
  mikesTickets: ReactNode;
  feesTickets: ReactNode;
  natsTickets: ReactNode;
  megsTickets: ReactNode;
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Mike" {...a11yProps(0)} />
          <Tab label="Fee" {...a11yProps(1)} />
          <Tab label="Nat" {...a11yProps(2)} />
          <Tab label="Meg" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography variant="h6" mb={2}>
          {"Mike's Tickets"}
        </Typography>
        {mikesTickets}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Typography variant="h6" mb={2}>
          {"Fee's Tickets"}
        </Typography>
        {feesTickets}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Typography variant="h6" mb={2}>
          {"Nat's Tickets"}
        </Typography>
        {natsTickets}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Typography variant="h6" mb={2}>
          {"Meg's Tickets"}
        </Typography>
        {megsTickets}
      </CustomTabPanel>
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
