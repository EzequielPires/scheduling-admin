import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { CustomersProvider } from "../../../src/contexts/CustomersContext";
import { Customers } from "../../../src/screens/Customers";
import { api } from "../../../src/services/api";

export default function CustomersPage({ customers }) {
  return (
    <CustomersProvider>
      <Customers data={customers} />
    </CustomersProvider>
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

  const response = await api.get(`user`).then(res => res.data);
  return {
    props: {
      customers: response
    }
  }
}