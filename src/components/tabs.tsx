import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function CommonTabs({
  mikesTickets,
  feesTickets,
  natsTickets,
  megsTickets,
  tabLabels = ["Mike", "Fee", "Nat", "Meg"],
}: {
  mikesTickets: ReactNode;
  feesTickets: ReactNode;
  natsTickets: ReactNode;
  megsTickets?: ReactNode;
  tabLabels?: string[];
}) {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label={tabLabels[0]} value={"1"} />
            <Tab label={tabLabels[1]} value={"2"} />
            <Tab label={tabLabels[2]} value={"3"} />
            <Tab label={tabLabels[3]} value={"4"} />
          </Tabs>
        </Box>
        <TabPanel value="1" sx={{ paddingX: 0 }}>
          <Typography variant="h6" mb={2}>
            {tabLabels[0] !== "Tokyo" ? `Mike's Tickets` : ""}
          </Typography>
          {mikesTickets}
        </TabPanel>
        <TabPanel value="2" sx={{ paddingX: 0 }}>
          <Typography variant="h6" mb={2}>
            {tabLabels[1] !== "Kyoto" ? `Fee's Tickets` : ""}
          </Typography>
          {feesTickets}
        </TabPanel>
        <TabPanel value="3" sx={{ paddingX: 0 }}>
          <Typography variant="h6" mb={2}>
            {tabLabels[2] !== "Osaka" ? `Nat's Tickets` : ""}
          </Typography>
          {natsTickets}
        </TabPanel>
        <TabPanel value="4" sx={{ paddingX: 0 }}>
          <Typography variant="h6" mb={2}>
            {"Meg's Tickets"}
          </Typography>
          {megsTickets}
        </TabPanel>
      </TabContext>
    </Box>
  );
}
