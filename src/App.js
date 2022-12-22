import "./App.css";
import Year from "./components/Year";
import EditWindow from "./components/EditWindow";
import { useState } from "react";

const App = () => {
  const [editWindowShown, setEditWindowShown] = useState(false);
  const message = 'test'

  return (
    <div>
      {editWindowShown ? (
        <EditWindow message={message} handleClose={()=>setEditWindowShown(false)} />
      ) : (
        ""
      )}
      <Year
      />
    </div>
  );
}

export default App
