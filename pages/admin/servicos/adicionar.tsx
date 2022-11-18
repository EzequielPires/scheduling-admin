import { ServicesProvider } from "../../../src/contexts/ServicesContext";
import { NewService } from "../../../src/screens/Services/New";

export default function AddService() {
    return (
        <ServicesProvider>
            <NewService />
        </ServicesProvider>
    )
}