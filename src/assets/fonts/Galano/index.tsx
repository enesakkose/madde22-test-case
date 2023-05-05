import localFont from 'next/font/local'

export const Galano = localFont({
  variable: '--galano',
  fallback: ['system-ui'],
  src: [
    {
      path: './GalanoGrotesqueRegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './GalanoGrotesqueMedium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './GalanoGrotesqueBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './GalanoGrotesqueExtraBold.otf',
      weight: '900',
      style: 'normal',
    },
  ],
})