import type { NextPage } from "next";
import { addDays, subDays, subHours, subMinutes } from "date-fns";
import PlusIcon from "@untitled-ui/icons-react/build/esm/Plus";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";

import { Seo } from "src/components/seo";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";
import { OverviewBanner } from "src/sections/dashboard/overview/overview-banner";
import { DashboardCards } from "src/sections/dashboard/overview/dashboard-cards";
import { OverviewEvents } from "src/sections/dashboard/overview/overview-events";
import { OverviewInbox } from "src/sections/dashboard/overview/overview-inbox";
import { OverviewTransactions } from "src/sections/dashboard/overview/overview-transactions";
import { OverviewPendingIssues } from "src/sections/dashboard/overview/overview-pending-issues";
import { OverviewSubscriptionUsage } from "src/sections/dashboard/overview/overview-subscription-usage";
import { OverviewHelp } from "src/sections/dashboard/overview/overview-help";
import { OverviewJobs } from "src/sections/dashboard/overview/overview-jobs";
import { OverviewOpenTickets } from "src/sections/dashboard/overview/overview-open-tickets";
import { OverviewTips } from "src/sections/dashboard/overview/overview-tips";

const now = new Date();

const Page: NextPage = () => {
  const settings = useSettings();

  return (
    <>
      <Seo title="Dashboard: Overview" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
          <Grid
            container
            disableEqualOverflow
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Grid xs={12}>
              <Stack direction="row" justifyContent="space-between" spacing={4}>
                <div>
                  <Typography variant="h4">Overview</Typography>
                </div>
              </Stack>
            </Grid>
            <Grid xs={12} md={4}>
              <DashboardCards
                title={"Depature"}
                main={"17th Nov - 6am"}
                link={""}
                icon={<img src="/assets/japan/icons8-plane.svg" width={48} />}
              />
            </Grid>
            <Grid xs={12} md={4}>
              <DashboardCards
                title={"Arrival"}
                main={"17th Nov - 8pm"}
                link={""}
                icon={
                  <img src="/assets/japan/icons8-plane-land.svg" width={48} />
                }
              />
            </Grid>

            <Grid>
              {/* <CryptoWallet
                chartColor={theme.palette.primary.main}
                chartSeries={[
                  {
                    name: "JPY",
                    data: [
                      56, 61, 64, 60, 63, 61, 60, 68, 66, 64, 77, 60, 65, 51,
                      72, 80, 74, 67, 77, 83, 94, 95, 89, 100, 94, 104, 101,
                      105, 104, 103, 107, 120,
                    ],
                  },
                ]}
                coinAmount={0.97}
                currency="JPY"
                rate={0.56}
                sx={{ flexBasis: "50%" }}
                usdValue={16213.2}
              /> */}
            </Grid>

            <Grid xs={12} md={5}>
              <OverviewEvents
                events={[
                  {
                    id: "3bfa0bc6cbc99bf747c94d51",
                    createdAt: addDays(now, 10),
                    description: "3:00pm check-in 11:00am check-out",
                    title: "OMO5 Otsuka - Tokyo",
                    location:
                      "https://www.google.com/maps/place/Hoshino+Resorts+OMO5+Tokyo+Otsuka/@35.7329647,139.7266452,17z/data=!3m1!4b1!4m9!3m8!1s0x60188d76fc6b74f7:0xea65478e0423732f!5m2!4m1!1i2!8m2!3d35.7329647!4d139.7292201!16s%2Fg%2F11f_c0crzw?entry=ttu",
                  },
                  {
                    id: "dd6c8ce8655ac222b01f24f9",
                    createdAt: addDays(now, 20),
                    description: "3:00pm check-in 10:00am check-out",
                    title: "Konansou - Fujikawaguchiko",
                    location:
                      "https://www.google.com/maps/place/Fuji+Kawaguchiko+Onsen+Hotel+Konansou/@35.5036357,138.7658362,17z/data=!3m1!4b1!4m9!3m8!1s0x60195e289404b781:0x22e46e1e53498e87!5m2!4m1!1i2!8m2!3d35.5036357!4d138.7684111!16s%2Fg%2F1hc5dnckf?entry=ttu",
                  },
                  {
                    id: "f274902e2bf226865b3cf947",
                    createdAt: addDays(now, 21),
                    description: "3:00pm check-in 11:00am check-out",
                    title: "Hotel Resol Trinity - Osaka",
                    location:
                      "https://www.google.com/maps/place/HOTEL+RESOL+TRINITY+OSAKA/@34.6896168,135.5013837,17z/data=!3m1!5s0x6000e6e12a31ce99:0xa41c0c78cbb3103d!4m20!1m10!3m9!1s0x6000e72190eccd47:0xbe81402a21214ce7!2sHOTEL+RESOL+TRINITY+OSAKA!5m2!4m1!1i2!8m2!3d34.6896168!4d135.5039586!16s%2Fg%2F11fs_8n5t6!3m8!1s0x6000e72190eccd47:0xbe81402a21214ce7!5m2!4m1!1i2!8m2!3d34.6896168!4d135.5039586!16s%2Fg%2F11fs_8n5t6?entry=ttu",
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
