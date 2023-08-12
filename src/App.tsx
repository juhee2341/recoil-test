import { RecoilRoot } from "recoil";
import FontButtonPage from "./pages/FontButtonPage";
import FontTextPage from "./pages/FontTextPage";

function App() {
  return (
    <RecoilRoot>
      <FontButtonPage />
      <FontTextPage />
    </RecoilRoot>
  );
}

export default App;
