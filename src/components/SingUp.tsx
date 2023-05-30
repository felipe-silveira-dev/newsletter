import { FC, useState } from "react";
import IllustrationDesktop from "../assets/IllustrationDesktop.svg";
import IconList from "../assets/icon-list.svg";

type SingUpProps = {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    show: boolean;
}

const SingUp: FC<SingUpProps> = ({handleSubmit, show}) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState<boolean>(false);

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        !isValidEmail(event.target.value) ? setError(true) : setError(false);
        setEmail(event.target.value);
    }

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        !isValidEmail(email) || email === '' ? setError(true) : setError(false);
        return handleSubmit(event);
    }

    return (
        <div className={`flex justify-between max-w-4xl bg-white rounded-3xl p-4 ${show && 'hidden'}`}>
            <div className="flex flex-col w-1/2 p-6 py-12 space-y-4">
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
                            {error && <p className="absolute text-red-500 text-xs right-0 top-1">Valid email required.</p>}
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="email@company.com"
                                className={`w-full p-2 px-4 border border-gray-400 rounded-lg ${error ? 'bg-red-200 placeholder-red-500 outline-red-500' : 'bg-white placeholder-gray-400'}`}
                                required
                            />
                        </div>
                        <button type="submit" className="bg-gray-900 text-white p-2 rounded-lg font-bold">
                            Subscribe to monthly newsletter
                        </button>
                    </div>
                </form>
            </div>
            <div>
                <img src={IllustrationDesktop} alt="Illustration Desktop" />
            </div>
        </div>
    );
};

export default SingUp;
