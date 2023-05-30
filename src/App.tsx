import { useState } from "react";
import SingUp from "./components/SingUp";
import Thanks from "./components/Thanks";

function App() {
  const [data, setData] = useState({
    email: '',
    error: false,
    show: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setData({
      email: event.currentTarget.email.value,
      error: false,
      show: true,
    });
  }
  
  const dismissMessage = () => {
    setData({
      email: '',
      error: false,
      show: false,
    });
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-[#36384E]">
      <SingUp handleSubmit={handleSubmit} show={data.show} />
      <Thanks email={data.email} show={data.show} dismissMessage={dismissMessage}/>
    </main>
  );
}

export default App;
