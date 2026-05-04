import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Loadbar from "./components/Loadbar";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import "./index.css";

const queryClient = new QueryClient();

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      {!isLoaded && <Loadbar onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar />
        <Home />
        <About />
        <Projects />
      </div>
    </QueryClientProvider>
  );
}

export default App;
