import { RecoilRoot } from "recoil";
import { ws } from "./api/ws";
import Chat from "./components/Chat";

function App() {
  ws.onopen = () => {
    console.log("abrrriuuuuu");
  };

  return (
    <RecoilRoot>
      <Chat />
    </RecoilRoot>
  );
}

export default App;
