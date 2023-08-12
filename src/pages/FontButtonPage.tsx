import { useRecoilState, useRecoilValue } from "recoil";
import { fontSizeState, fontSizeLabelState } from "../states/fontstate";


export default function FontButtonPage() {
  function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
  
    return (
      <>
        <div>Current font size: {fontSizeLabel}</div>
  
        <button onClick={() => setFontSize(fontSize + 1)} style={{fontSize}}>
          Click to Enlarge
        </button>
      </>
    );
  }

  return (
    FontButton()
  )
}