import { useEffect } from "react";
import { axiosInstance } from "./api";

function App() {
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axiosInstance.get("/products");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return <h1 className="text-3xl font-bold">Hello world!</h1>;
}

export default App;
