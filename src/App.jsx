import Reducer from "./hooks/Reducer";
import UseCallback from "./hooks/useCallback";
import UseEffect from "./hooks/UseEffect";
import UseMemo from "./hooks/UseMemo";
import UseState from "./hooks/UseState";

export default function App(){
  return <div>
      <UseState/>
      <hr />
      <Reducer/>
      <hr />
      <UseEffect/>
      <hr />
      <UseMemo/>
      <hr />
      <UseCallback/>
  </div>     
}