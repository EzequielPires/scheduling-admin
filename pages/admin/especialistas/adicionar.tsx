import { ProviderProvider } from "../../../src/contexts/ProviderContext";
import { NewProvider } from "../../../src/screens/Providers/New";

export default function AddProvider() {
    return (
        <ProviderProvider>
            <NewProvider />
        </ProviderProvider>
    )
}