import {createContext} from 'react';
import toast from "react-hot-toast";

export const GlobalContext = createContext(null);

export function GlobalState ({children}) {

    const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "be3805a1-9998-4b3e-abc4-fe5fbfa44110");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

    return (
        <GlobalContext.Provider value={{handleSubmit}}>{children}</GlobalContext.Provider>
    )
}