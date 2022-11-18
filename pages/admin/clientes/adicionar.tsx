import { CustomersProvider } from "../../../src/contexts/CustomersContext";
import { NewCustomers } from "../../../src/screens/Customers/New";

export default function AddCustomers() {
    return (
        <CustomersProvider>
            <NewCustomers />
        </CustomersProvider>
    )
}