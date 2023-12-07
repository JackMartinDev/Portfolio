import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import './index.css'
import { MantineProvider, createTheme } from '@mantine/core';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const theme = createTheme({})

const translationsEn = { 
    aboutMe: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    resume: "Resume"
};
const translationsJp = { 
    aboutMe: "僕のこと",
    experience: "経験",
    projects: "プロジェクト",
    contact: "連絡",
    resume: "履歴書"
};


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
