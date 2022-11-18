import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { CustomersProvider } from "../../../src/contexts/CustomersContext";
import { ProviderProvider } from "../../../src/contexts/ProviderContext";
import { EditCustomer } from "../../../src/screens/Customers/Edit";
import { EditService } from "../../../src/screens/Services/Edit";
import { api } from "../../../src/services/api";

export default function EditCustomerPage({ customer }) {
    return (
        <CustomersProvider>
            <EditCustomer customer={customer} />
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

    const response = await api.get(`user/${ctx.query.id}`).then(res => res.data);
    return {
        props: {
            customer: response
        }
    }
}