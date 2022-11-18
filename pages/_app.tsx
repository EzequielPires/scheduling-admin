import { useRouter } from 'next/router';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import 'react-notifications-component/dist/theme.css';
import { Header } from '../src/components/Header';
import { Aside } from '../src/components/Aside';
import { AuthProvider } from '../src/contexts/AuthContext';
import { ReactNotifications } from 'react-notifications-component';
import { NotificationProvider } from '../src/contexts/NotificationContext';
import { AsideProvider } from '../src/contexts/AsideContext';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <NotificationProvider>
            <AsideProvider>
              {router.asPath.startsWith('/admin') && <Header />}
              {router.asPath.startsWith('/admin') && <Aside />}
              <ReactNotifications />
              <Component {...pageProps} />
            </AsideProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </>
  )
}
