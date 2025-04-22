import { getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import AuthForm from '@/components/AuthForm';

const SignIn = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) redirect("/");

    return <AuthForm type="sigin" />;
};

export default SignIn;