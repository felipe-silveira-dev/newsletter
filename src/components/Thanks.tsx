import { FC } from "react";
import IconList from "../assets/icon-list.svg";

type ThanksProps = {
    email: string;
    show: boolean;
    dismissMessage: () => void;
}

const Thanks: FC<ThanksProps> = ({email, show, dismissMessage}) => {
  return (
    <div className={`flex flex-col space-y-6 bg-white rounded-3xl p-12 max-w-sm ${!show && 'hidden'}`}>
        <img src={IconList} alt="Check Icon" className="w-14 h-14" />
        <h1 className="font-extrabold text-5xl text-[#36384E]">
            Thanks for subscribing!
        </h1>
        <p className="text-sm">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your subscription.
        </p>
        <button onClick={dismissMessage} className="bg-gray-900 text-sm text-white font-bold py-2 rounded-lg">
            Dismiss message
        </button>
    </div>
  )
}

export default Thanks