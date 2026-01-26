import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { AppShell } from '@/components/shell/app-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'Prototype',
  description: 'Tennr Prototype Template',
};

const featureDisplayFont = localFont({
  src: [
    {
      path: '../../../lasso/assets/fonts/FeatureDisplay-Light-Web.woff2',
      style: 'normal',
    },
    {
      path: '../../../lasso/assets/fonts/FeatureDisplay-LightItalic-Web.woff2',
      style: 'italic',
    },
  ],
  display: 'block',
  variable: '--font-display',
});

const marfaFont = localFont({
  src: '../../../lasso/assets/fonts/ABCMarfaVariableVF.woff2',
  display: 'block',
  variable: '--font-body',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lasso" className="h-full overflow-hidden">
      <body
        className={`${featureDisplayFont.variable} ${marfaFont.variable} antialiased h-full overflow-hidden`}
        suppressHydrationWarning
      >
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
