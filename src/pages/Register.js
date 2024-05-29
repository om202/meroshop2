import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password) {
      fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            alert(`Error: ${JSON.parse(data.error)}`);
            console.error("Error:", data.error);
          } else {
            alert("User registered successfully");
            navigate("/login");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div class="pt-10 h-full">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center items-center">
          <img src="mero-shop-logo.png" alt="logo" class="w-48" />
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl mt-8 text-center">
            Shop with a freedom.
            <br />
            Get your favorite products at your doorstep.
          </p>
        </div>
        <div>
          <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-sm border">
            <h2 class="text-2xl font-bold text-gray-900">
              Sign up for Mero Shop
            </h2>
            <form class="mt-8 space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Pooja Sah"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="example@domain.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <button
                onClick={(e) => handleRegister(e)}
                type="submit"
                class="w-full px-5 py-3 text-base font-medium text-center text-white bg-emerald-500 rounded-lg hover:bg-emerald-600 focus:ring-4 focus:ring-blue-300 sm:w-auto"
              >
                Register your account
              </button>
              <div class="text-sm font-medium text-gray-900 ">
                Have an account?{" "}
                <a class="text-blue-600 hover:underline" href="/login">
                  Sign In
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
