import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ProviderProvider } from "../../../src/contexts/ProviderContext";
import { EditProvider } from "../../../src/screens/Providers/Edit";
import { EditService } from "../../../src/screens/Services/Edit";
import { api } from "../../../src/services/api";

export default function EditProviderPage({ provider, services }) {
    return (
        <ProviderProvider>
            <EditProvider provider={provider} servicesData={services}/>
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

    const response = await api.get(`provider/${ctx.query.id}`).then(res => res.data);
    const services = await api.get(`service`).then(res => res.data);
    return {
        props: {
            provider: response,
            services
        }
    }
}