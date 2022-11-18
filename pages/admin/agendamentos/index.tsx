import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Schedules } from "../../../src/screens/Schedules";
import { api } from "../../../src/services/api";

export default function SchedulesPage({schedules}) {
    return (
        <Schedules data={schedules}/>
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
  
    const response = await api.get(`scheduling`).then(res => res.data);
    return {
      props: {
        schedules: response
      }
    }
  }