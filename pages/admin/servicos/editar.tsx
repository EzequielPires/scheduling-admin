import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ServicesProvider } from "../../../src/contexts/ServicesContext";
import { EditService } from "../../../src/screens/Services/Edit";
import { api } from "../../../src/services/api";

export default function EditServicePage({ service }) {
    return (
        <ServicesProvider>
            <EditService service={service} />
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

    const response = await api.get(`service/${ctx.query.id}`).then(res => res.data);
    return {
        props: {
            service: response
        }
    }
}