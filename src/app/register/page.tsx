import Link from "next/link";
import {redirect} from "next/navigation"

const Url = process.env.BASE_URL as string 

export default function Register() {
    const registerHandler = async (formData: FormData) => {
        "use server";
        const name = formData.get("name");
        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");
  
        const response = await fetch(Url + "users/register", {
           method: "POST",
           headers: {
              "Content-Type": "application/json",
           },
           body: JSON.stringify({ name, username, email, password }),
        });
  
        const result = await response.json();
        if (result.error) {
           redirect("/register?error=" + result.error);
        }
        redirect("/login");
     };
    
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <h1 className="text-3xl font-bold text-center mt-8">Register Page</h1>
                <form className="mt-8 max-w-md mx-auto" action={registerHandler}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="form-input mt-1 block w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input type="text" id="username" name="username" className="form-input mt-1 block w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input type="email" id="email" name="email" className="form-input mt-1 block w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="form-input mt-1 block w-full px-3 py-2 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md" required />
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-10">  
                <p className="text-center">
                  Already have an account?{" "}
                  <Link className="hover:underline underline-offset-8 hover:text-emerald-400" href={"/login"}>
                     Login here
                  </Link>
               </p>
               </div>
               </div>
            </div>
        </>
    );
}
