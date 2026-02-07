import {
  createLocalFontProcessor,
} from '@unocss/preset-web-fonts/local'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      'fill': 'rgb(var(--color-fill))',
      'base': 'rgb(var(--color-text-base))',
      'accent': 'rgb(var(--color-accent))',
      'card': 'rgb(var(--color-card))',
      'card-muted': 'rgb(var(--color-card-muted))',
      'border': 'rgb(var(--color-border))',
      'success': 'rgb(var(--color-success))',
      'warning': 'rgb(var(--color-warning))',
      'error': 'rgb(var(--color-error))',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-accent/80 text-white cursor-pointer !outline-none hover:bg-accent disabled:cursor-default disabled:bg-card disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-accent'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
})
