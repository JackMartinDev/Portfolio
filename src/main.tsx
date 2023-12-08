import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEn } from "./translations/en"
import { translationsJp } from "./translations/jp"

const theme = createTheme({})

i18next.use(initReactI18next).init({
    resources:{
        en: { translation: translationsEn},
        jp: { translation: translationsJp}
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false},
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MantineProvider theme={theme}>
            <Suspense fallback="Loading...">
                <App />
            </Suspense>
        </MantineProvider>
    </React.StrictMode>,
)
