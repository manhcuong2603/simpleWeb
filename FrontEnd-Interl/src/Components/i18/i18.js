import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEn from '../Translation/translationEn.json'
import translationVi from '../Translation/translationVi.json'

// Cấu hình ngôn ngữ và bộ dịch
i18n
    .use(initReactI18next) // nạp react-i18next với i18n
    .init({
        resources: {
            en: {
                translation: translationEn
            },
            vi: {
                translation: translationVi
            }
        },
        lng: 'en', // ngôn ngữ mặc định
        fallbackLng: 'en', // ngôn ngữ dự phòng nếu ngôn ngữ hiện tại không được hỗ trợ
        interpolation: {
            escapeValue: false // không tự động escape chuỗi để tránh bị XSS
        }
    });

export default i18n;
