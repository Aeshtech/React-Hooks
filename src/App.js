import './App.css';
import Provider from './hooks/Provider';
import Header from './hooks/Header';
import UseLayoutEffect from './hooks/useLayoutEffect';
import UseRef from './hooks/useRef';
import UseState from './hooks/useState';
import UseReducer from './hooks/useReducer';
import UseEffect from './hooks/useEffect';
import UseImperative from './hooks/useImperative';
import UseMemo from './hooks/useMemo';
import UseCallback from './hooks/useCallback';


function App() {

  
  const style  = {
        background : "green",
        color : "white",
        fontSize : "2em" 
  }

  return (
    <div className="App">
  
      <UseState/>
      <UseReducer/>
      <UseEffect/>
      <UseRef/>
      <UseLayoutEffect/>
      <UseImperative />
      <Header theme={style}/> {/* not a hook just showing demo to pass props in nested child which is not using by header itself*/}
      <Provider/>   {/* provider is second stage of useContext hook */}
      <UseMemo/>
      <UseCallback/>

    </div>
  );
}

export default App;
