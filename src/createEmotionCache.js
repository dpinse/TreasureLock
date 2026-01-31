import createCache from '@emotion/cache';

// prepend: true moves MUI styles to the top of the <head> so they load first.
export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}
