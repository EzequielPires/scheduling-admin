import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ServicesProvider } from "../../../src/contexts/ServicesContext";
import { Services } from "../../../src/screens/Services";
import { api } from "../../../src/services/api";

export default function ServicesPage({ services }) {
  return (
    <ServicesProvider>
      <Services data={services} />
    </ServicesProvider>
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

  const response = await api.get(`service`).then(res => res.data);
  return {
    props: {
      services: response
    }
  }
}