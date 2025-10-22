import { RegisterForm } from "@/features/auth/components/register-layout";
import { requireUnauth } from "@/lib/auth-utlis";


const Page = async () => {
    await requireUnauth();
    return <RegisterForm />
}

export default Page;