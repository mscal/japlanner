import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import router from "next/router";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CommonCard from "src/components/common-card";
import CommonTabs from "src/components/tabs";
import { useSettings } from "src/hooks/use-settings";
import { Layout as DashboardLayout } from "src/layouts/dashboard";

const Page: NextPage = () => {
  const settings = useSettings();

  const mikeTickets = {
    entrance: (
      <img
        src="/assets/qr/gundam/mike_entrance.png"
        width="100%"
      />
    ),
    entranceNumber: "428616",
    entranceUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=Y5kjaMdE2InhNOqsNtrXhq3XxBnhnZtTfEBgpv9J_ZkR8JLWs8iZEKvusdqSu3RsbBXLmuzmsNtUVTNaP_shnGeEAmhGpfuGtnruOfYnUrTPcvyBciIly9QtNt_bS2efIYhDhvcvtZZY3YtoAwLXSWulP1yt18xDHnp_BGgAFiCRJ9ehmg2gpLHKVFShgQusDJWPspMqyvs3_oDqOr4yG1IMx5bej4VSkW98UFNrMvFvYvnDTQfa3_6b91a9119619eb59c050c9a51b247b7dc0cc80c4&C=code-192112-6534b976dbac2",
    dock: (
      <img
        src="/assets/qr/gundam/mike_dock.png"
        width="100%"
      />
    ),
    dockNumber: "610576",
    dockUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=nAj0XAfMgFhHSClAfbh4rsag11iBduliywhtjuh8_F2fgt1N7X5oqXlPxmZtMmXIEexznBi0NjQjWwS7X_FHZ3qFNwZzxBjclWay6ONl1bTsaOPjHMywlhITmo_Vk7p7EzDSvxIIx2C1N2QMxnmVmoSKfLZzGrmV4gy_Ojr2tomAra6Ukla1GK3owuGgHYsqwPVOSVT1JzLV_fNHPrQxY5Jrmb3halfL2QCoSveEzFGOTkQU770rc_43405e76b1d45a438af35055320922eb760cb1d2&C=code-802611-6534b976e6539",
  };
  const feeTickets = {
    entrance: (
      <img
        src="/assets/qr/gundam/fee_entrance.png"
        width="100%"
      />
    ),
    entranceNumber: "645057",
    entranceUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=Q0R47GSX8elS8VbooFCw0L0beHcUVzqfyG01pVnq_v2fCU2Te3KVB3ZMYJloEWKirGhvn3ojsR0x7X8Yw_J4wTgboS1djDu6Bzd7WnrIBdVREYTo5u4GuJnQ1K_YpZCdrvSTJudTThq3zCsG8jdopEIR0Sk2t0kPjUu_tAIv2PPGZUr9W9OrXrGhcrGGZBSjqfsCFCMMyEFL_aMewtyoxVD8mXiciD5ZgrwPXqD824a8jVyjeLdlk_6af7dac0fec4e09714ca53d6e559c15d93c5f064&C=code-707022-6534b976dc0c6",
    dock: (
      <img
        src="/assets/qr/gundam/fee_dock.png"
        width="100%"
      />
    ),
    dockNumber: "304519",
    dockUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=i07mZbWsEnr2x7PQvUD1njihSYr1NttxAcmv0ab7_z1a1iD59JVA4LD9iv4yHBZ5pqeUR44kKaejwK0r4_CN7awqzfiv3sNM01iRmdnK83Gw0XuYscSpMNzXEX_qpVOcOZlPq0hN9ZZobN9I0HVdu11BIm3R5ElGa5b_0m2YeKHDeqeYCxzlal624vnyiVyDRM6ckc5LCgCQ_mx1mRv5ZfW7vtivGkeA3bgTAI7b8DEfPY8jofoSK_f65cb5665e5989182243f6f01b2a31e6c90fa291&C=code-341209-6534b976e6811",
  };
  const natTickets = {
    entrance: (
      <img
        src="/assets/qr/gundam/nat_entrance.png"
        width="100%"
      />
    ),
    entranceNumber: "823744",
    entranceUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=JHvJpDB1ZbSLm1xTEuBQE9bbQ9aJIZIaFzEEboEo_PHgwWU1LSoOBUMP7Hv5uXvCBly0vpiRXV0mOId6Y_1bzp74BQJOQWiPpCSorsu9tKRAA2soOH0v0DlXSB_2R0feRiaUKOaTHRFC7HrWHEupsW4fJxAU7maFKY5_gNLKRSbSsuaLWSo2Om1uarVo2Ye47zIeaDlPjO7G_6rC6KcXDttZWcACmgdFCBHSTjMbzqrXpzNLaaLMp_8b61c92ca40a817eed0dcb7e87fa4b0276643445&C=code-577256-6534b976dc3bb",
  };
  const megTickets = {
    entrance: (
      <img
        src="/assets/qr/gundam/meg_entrance.png"
        width="100%"
      />
    ),
    entranceNumber: "611951",
    entranceUrl:
      "https://gundam-factory.eventos.tokyo/web/portal/151/event/265/users/my-ticket/36159/purchased-ticket/?T=VNt8o3FBULC0W6OEEyQQowONBRaDCrScMEnt5dld_MZ8YLq1crN6yY0WUJCDWkJVZmjZgnEOW2TEiKjGO_qMoMDvDmAUaCzhSPZfxSIdk0zrXdVzMJqWxpJmxk_R4arQ6SPd0hGppdX9WnoyxiRGDxAkSFFqZFtp9yB_D6rOrOLJttMBByV4Uo7ZcxJzjykVxEF0qzX1zcz6_MCPEkGNsmWFnweXorWnNEtkdS6CAsVp0xg5nIOZf_ee389d2bb45f89b7b3052aebcb203f4f9aa5acab&C=code-880438-6534b976dc654",
  };

  return (
    <>
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
              spacing={1}
              alignItems={"center"}
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
                <Typography variant="h4">Gundam Factory Tickets</Typography>
              </div>
            </Stack>

            <CommonTabs
              mikesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"GUNDAM FACTORY - Entrance"}
                    subheader={"24th Nov (Friday) - 11:00～20:00"}
                    link={mikeTickets.entranceUrl}
                    code={mikeTickets.entranceNumber}
                  >
                    {mikeTickets.entrance}
                  </CommonCard>
                  <CommonCard
                    title={"GUNDAM FACTORY - Dock Tower"}
                    subheader={"24th Nov (Friday) - 11:05～11:50"}
                    link={mikeTickets.dockUrl}
                    code={mikeTickets.dockNumber}
                  >
                    {mikeTickets.dock}
                  </CommonCard>
                </Stack>
              }
              feesTickets={
                <Stack spacing={2}>
                  <CommonCard
                    title={"GUNDAM FACTORY - Entrance"}
                    subheader={"24th Nov (Friday) - 11:00～20:00"}
                    link={feeTickets.entranceUrl}
                    code={feeTickets.entranceNumber}
                  >
                    {feeTickets.entrance}
                  </CommonCard>
                  <CommonCard
                    title={"GUNDAM FACTORY - Dock Tower"}
                    subheader={"24th Nov (Friday) - 11:05～11:50"}
                    link={feeTickets.dockUrl}
                    code={feeTickets.dockNumber}
                  >
                    {feeTickets.dock}
                  </CommonCard>
                </Stack>
              }
              natsTickets={
                <CommonCard
                  title={"GUNDAM FACTORY - Entrance"}
                  subheader={"24th Nov (Friday) - 11:00～20:00"}
                  link={natTickets.entranceUrl}
                  code={natTickets.entranceNumber}
                >
                  {natTickets.entrance}
                </CommonCard>
              }
              megsTickets={
                <CommonCard
                  title={"GUNDAM FACTORY - Entrance"}
                  subheader={"24th Nov (Friday) - 11:00～20:00"}
                  link={megTickets.entranceUrl}
                  code={megTickets.entranceNumber}
                >
                  {megTickets.entrance}
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
