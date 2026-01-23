import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import List from "./view/List";
import Login from "./view/Login";

// Create the client ONCE
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todolist" element={<List />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;