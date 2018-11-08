import I18n from 'react-native-i18n';

import Locales from './locales';

I18n.fallbacks = true;
I18n.translations = Locales;

// EXPORT BLOCK
const i18n = I18n;
export default i18n;
