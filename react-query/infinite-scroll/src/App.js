import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Scroll from "./Scroll";
import "./App.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Scroll />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
