import { IntercomProvider } from '@/lib/intercom/IntercomProvider';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <IntercomProvider
    bootParams={{
      // name,
      // email,
      // createdAt,
    }}
  >
      <Component {...pageProps} />
    </IntercomProvider>
  );
}
