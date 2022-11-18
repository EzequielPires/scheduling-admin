import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ProviderProvider } from "../../../src/contexts/ProviderContext";
import { Providers } from "../../../src/screens/Providers";
import { api } from "../../../src/services/api";

export default function ProvidersPage({ providers }) {
  return (
    <ProviderProvider>
      <Providers data={providers} />
    </ProviderProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { 'ag.token': token, 'ag.user': user } = parseCookies(ctx);

  if (!token || !user) {
    return {
      redirect: {
        destination: `/login`,
        permanent: false,
      }
    }
  }

  const response = await api.get(`provider`).then(res => res.data);
  return {
    props: {
      providers: response
    }
  }
}