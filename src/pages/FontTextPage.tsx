import { useRecoilState } from "recoil";
import { fontSizeState } from "../states/fontstate";


export default function FontTextPage() {
  function Text() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    return <p style={{fontSize}}>This text will increase in size too.</p>;
  }

  return (
    Text()
  )
}