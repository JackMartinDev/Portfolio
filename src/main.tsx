import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './reset.css'
import './index.css'
import "./utils.css"
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { translationsEn } from "./translations/en"
import { translationsJp } from "./translations/jp"

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
            <Suspense fallback="Loading...">
                <App />
            </Suspense>
    </React.StrictMode>,
)
