import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import router from "next/router";
import CommonCard from "src/components/common-card";
import { Seo } from "src/components/seo";
import CommonTabs from "src/components/tabs";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: NextPage = () => {
  const settings = useSettings();

  const mikeTickets = {
    disney: <img src="/assets/qr/disney/mike_disney.png" width="100%" />,
  };
  const feeTickets = {
    disney: <img src="/assets/qr/disney/fee_disney.png" width="100%" />,
  };
  const natTickets = {
    disney: <img src="/assets/qr/disney/nat_disney.png" width="100%" />,
  };
  const megTickets = {
    disney: <img src="/assets/qr/disney/meg_disney.png" width="100%" />,
  };

  return (
    <>
      <Seo title="Dashboard: Blank" />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 4,
        }}
      >
        <Container maxWidth={settings.stretch ? false : "xl"}>
          <Stack
            spacing={{
              xs: 3,
              lg: 4,
            }}
          >
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <div>
                <Button
                  startIcon={<ChevronLeftIcon />}
                  variant="outlined"
                  onClick={() => router.push("/tickets")}
                  sx={{ mb: 2 }}
                >
                  Back
                </Button>
                <Typography variant="h4">Disney SEA Tickets</Typography>
              </div>
            </Stack>
            <CommonTabs
              mikesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"Disney Ticket"}
                    subheader={"22nd Nov (Wed) - 8am"}
                  >
                    {mikeTickets.disney}
                  </CommonCard>
                </Stack>
              }
              feesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"Disney Ticket"}
                    subheader={"22nd Nov (Wed) - 8am"}
                  >
                    {feeTickets.disney}
                  </CommonCard>
                </Stack>
              }
              natsTickets={
                <CommonCard
                  title={"Disney Ticket"}
                  subheader={"22nd Nov (Wed) - 8am"}
                >
                  {natTickets.disney}
                </CommonCard>
              }
              megsTickets={
                <CommonCard
                  title={"Disney Ticket"}
                  subheader={"22nd Nov (Wed) - 8am"}
                >
                  {megTickets.disney}
                </CommonCard>
              }
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
