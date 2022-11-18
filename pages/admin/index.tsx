import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Admin } from "../../src/screens/Admin";

export default function AdminPage() {
    return (
        <Admin />
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
  
    return {
      props: {
      }
    }
  }