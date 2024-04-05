import { useMutation } from "@tanstack/react-query";
import { registerReq } from "../api/users";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import Loader from "../components/Loader";

const Register = () => {
    const navigate = useNavigate();

    const registerMutation = useMutation({
        mutationFn: registerReq,
        onSuccess: () => {
        navigate("/");
        console.log("loginMutation success");
        },
        onError: (error) => {
        console.error(error);
        }
    });

    if (registerMutation.isLoading) return <Loader />;

    return (
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className='m-5 p-10 bg-gray-300'>
            <div className="w-[300px] max-w-md space-y-8 md:w-[400px] lg:w-[400px]">
            <div >
                <BsTwitter
                className="mx-auto text-sky-500 h-12 w-12"
                />
                <h2 className="mt-6 text-center text-3xl text-gray-700">
                Join Twitter today.
                </h2>
            </div>
            <Formik
                initialValues={{
                email: '',
                username: '',
                password: '',
                }}
                onSubmit={(values) => {
                registerMutation.mutate(values);
                }}
            >
                <Form>
                <Field
                    id='email'
                    name='email'
                    placeholder='Email'
                    className="my-3 border-b-[1px] border-gray-800 w-full p-5 bg-transparent outline-neutral-800 text-black"
                    onFocus={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}
                    onBlur={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                />

                <Field
                    id='username'
                    name='username'
                    placeholder='Username'
                    className="my-3 border-b-[1px] border-gray-800 w-full p-5 bg-transparent outline-neutral-800 text-black"
                    onFocus={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}
                    onBlur={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                />

                <Field
                    type='password'
                    id='password'
                    name='password'
                    placeholder='*******' 
                    className="my-3 border-b-[1px] border-gray-800 w-full p-5 bg-transparent outline-neutral-800 text-black"
                    onFocus={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}
                    onBlur={(e) => { e.target.style.backgroundColor = 'transparent'; }}
                />
                <button type='submit' className="bg-sky-400 my-2 w-full hover:bg-sky-500 p-2 px-5 rounded-full text-white font-bold">
                    Register
                </button>

                </Form>
            </Formik>

            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                <Link to={'/login'}>
                    Already have an account?
                    <span className='text-gray-700 hover:text-sky-500 ml-2 transition-colors'>
                    Sign in here!
                    </span>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;
