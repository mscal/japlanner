// Remove if simplebar is not used
import "simplebar-react/dist/simplebar.min.css";

import type { EmotionCache } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import { RTL } from "src/components/rtl";
import { SettingsDrawer } from "src/components/settings/settings-drawer";
import { Toaster } from "src/components/toaster";
import {
  SettingsConsumer,
  SettingsProvider,
} from "src/contexts/settings-context";
import { useNprogress } from "src/hooks/use-nprogress";
import { createTheme } from "src/theme";
import { createEmotionCache } from "src/utils/create-emotion-cache";

// Remove if locales are not used
import "src/locales/i18n";

const clientSideEmotionCache = createEmotionCache();

export interface CustomAppProps extends AppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}

const CustomApp = (props: CustomAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNprogress();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Japlanner 2023</title>
        <meta
          name="robots"
          content="noindex"
        />
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <SettingsConsumer>
            {(settings) => {
              // Prevent theme flicker when restoring custom settings from browser storage
              if (!settings.isInitialized) {
                // return null;
              }

              const theme = createTheme({
                colorPreset: settings.colorPreset,
                contrast: settings.contrast,
                direction: settings.direction,
                paletteMode: settings.paletteMode,
                responsiveFontSizes: settings.responsiveFontSizes,
              });

              return (
                <ThemeProvider theme={theme}>
                  <Head>
                    <meta
                      name="color-scheme"
                      content={settings.paletteMode}
                    />
                    <meta
                      name="theme-color"
                      content={theme.palette.neutral[900]}
                    />
                  </Head>
                  <RTL direction={settings.direction}>
                    <CssBaseline />
                    {/* <SettingsButton onClick={settings.handleDrawerOpen} /> */}
                    {getLayout(<Component {...pageProps} />)}
                    <SettingsDrawer
                      onOpen={settings.handleDrawerOpen}
                      canReset={settings.isCustom}
                      onClose={settings.handleDrawerClose}
                      onReset={settings.handleReset}
                      onUpdate={settings.handleUpdate}
                      open={settings.openDrawer}
                      values={{
                        colorPreset: settings.colorPreset,
                        contrast: settings.contrast,
                        direction: settings.direction,
                        paletteMode: settings.paletteMode,
                        responsiveFontSizes: settings.responsiveFontSizes,
                        stretch: settings.stretch,
                        layout: settings.layout,
                        navColor: settings.navColor,
                      }}
                    />
                    <Toaster />
                  </RTL>
                </ThemeProvider>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
};

export default CustomApp;
