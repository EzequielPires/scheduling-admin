import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { OpeningHoursProvider } from "../../../src/contexts/OpeningHoursContext";
import { OpeningHours } from "../../../src/screens/OpeningHours";
import { api } from "../../../src/services/api";

export default function OpeningHoursPage({data}) {
    return (
      <OpeningHoursProvider>
        <OpeningHours data={data}/>
      </OpeningHoursProvider>
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
  
    const response = await api.get(`opening-hours`).then(res => res.data);
    return {
      props: {
        data: response
      }
    }
  }