import { requireAuth } from "@/lib/auth-utlis";

const Page = async () => {
    await requireAuth();
    return (
        <p>Credentials</p>
    );
}

export default Page;