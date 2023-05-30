import { FC, useState } from "react";
import IllustrationDesktop from "../assets/IllustrationDesktop.svg";
import IconList from "../assets/icon-list.svg";
import IllustrationMobile from "../assets/IllustrationMobile.svg";

type SingUpProps = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  show: boolean;
};

const SingUp: FC<SingUpProps> = ({ handleSubmit, show }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<boolean>(false);

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    !isValidEmail(event.target.value) ? setError(true) : setError(false);
    setEmail(event.target.value);
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    !isValidEmail(email) || email === "" ? setError(true) : setError(false);
    return handleSubmit(event);
  };

  return (
    <div
      className={`flex flex-col md:flex-row h-screen md:h-1/2 md:w-11/12 justify-between md:max-w-3xl lg:max-w-4xl bg-white md:rounded-3xl md:p-4 ${
        show && "hidden"
      }`}
    >
      <img
        src={IllustrationMobile}
        alt="Illustration Mobile"
        className="w-full h-full md:hidden"
      />
      <div className="flex flex-col items-center justify-center w-full p-6 md:w-1/2">
        <div className="space-y-6">
          <h1 className="font-extrabold text-5xl text-[#36384E]">
            Stay updated!
          </h1>
          <p className="text-sm">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="flex flex-col space-y-2 text-sm">
            <li className="flex space-x-2">
              <img src={IconList} alt="Icon list" />
              <p>Product discovery and building what matters</p>
            </li>
            <li className="flex space-x-2">
              <img src={IconList} alt="Icon list" />
              <p>Measuring to ensure updates are a success</p>
            </li>
            <li className="flex space-x-2">
              <img src={IconList} alt="Icon list" />
              <p>And much more!</p>
            </li>
          </ul>
          <form onSubmit={submit} className="flex-1">
            <div className="flex flex-col space-y-6">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="font-extrabold text-xs text-[#36384E]"
                >
                  Email address
                </label>
                {error && (
                  <p className="absolute right-0 text-xs text-red-500 top-1">
                    Valid email required.
                  </p>
                )}
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className={`w-full p-2 px-4 border border-gray-400 rounded-lg ${
                    error
                      ? "bg-red-200 placeholder-red-500 outline-red-500"
                      : "bg-white placeholder-gray-400"
                  }`}
                  required
                />
              </div>
              <button
                type="submit"
                className="p-2 py-4 font-bold text-white bg-gray-900 rounded-lg"
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <img
          src={IllustrationDesktop}
          alt="Illustration Desktop"
          className="hidden md:flex"
        />
      </div>
    </div>
  );
};

export default SingUp;
