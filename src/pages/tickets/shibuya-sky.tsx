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
    sky: (
      <img
        src="/assets/qr/sky/mike_sky.png"
        width="100%"
      />
    ),
  };
  const feeTickets = {
    sky: (
      <img
        src="/assets/qr/sky/fee_sky.png"
        width="100%"
      />
    ),
  };
  const natTickets = {
    sky: (
      <img
        src="/assets/qr/sky/nat_sky.png"
        width="100%"
      />
    ),
  };
  const megTickets = {
    sky: (
      <img
        src="/assets/qr/sky/meg_sky.png"
        width="100%"
      />
    ),
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
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <div>
                <Button
                  startIcon={<ChevronLeftIcon />}
                  variant="outlined"
                  onClick={() => router.push("/tickets")}
                  sx={{ mb: 2 }}
                >
                  Back
                </Button>
                <Typography variant="h4">Shibuya Sky Tickets</Typography>
              </div>
            </Stack>
            <CommonTabs
              mikesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"Shibuya sky Ticket"}
                    subheader={"21st Nov (Tue) - 4:40 ~ 5:00"}
                  >
                    {mikeTickets.sky}
                  </CommonCard>
                </Stack>
              }
              feesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"Shibuya sky Ticket"}
                    subheader={"21st Nov (Tue) - 4:40 ~ 5:00"}
                  >
                    {feeTickets.sky}
                  </CommonCard>
                </Stack>
              }
              natsTickets={
                <CommonCard
                  title={"Shibuya sky Ticket"}
                  subheader={"21st Nov (Tue) - 4:40 ~ 5:00"}
                >
                  {natTickets.sky}
                </CommonCard>
              }
              megsTickets={
                <CommonCard
                  title={"Shibuya sky Ticket"}
                  subheader={"21st Nov (Tue) - 4:40 ~ 5:00"}
                >
                  {megTickets.sky}
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
