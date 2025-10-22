import { LoginForm } from "@/features/auth/components/login-form";
import { requireUnauth } from "@/lib/auth-utlis";

const Page = async () => {
    await requireUnauth();
    return <LoginForm />
};

export default Page;