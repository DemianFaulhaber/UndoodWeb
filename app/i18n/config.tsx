import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';
import { getOptions } from './settings';

export const i18nInit = async () => {
  if (!i18next.isInitialized) {
    await i18next
      .use(Backend)
      .init({
        ...getOptions(),
        lng: getLanguageFromHeaders(),
        preload: ['es', 'en'],
        backend: {
          loadPath: path.resolve('./public/locales/{{lng}}/{{ns}}.json'),
        },
      });
  }
  return i18next;
};

function getLanguageFromHeaders(): string {
  return 'es'; 
}