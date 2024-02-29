import './App.css';
import Product from './Product';
import UseStateHOOK from './useState';
import UseReduceHook from './UseReduce';
import UseEffectHooks from './UseEffectHooks';
import UseRefHooks from './UseRefHooks';
import UseLayoutHook from './UseLayoutHook';
import UseImperativeHandle from './UseImperativeHandle';
// import UseContext from './useContext/UseContext';

function App() {
  return (
    <>
      <div>
        <center>
          <br />
          <br />
          <h2>----------------PROPS---------------</h2>
          <br />
          <br />
          <br />
          <Product name="Manojgowda" discreption="Your Ai Assitent" price={23.90} />
          <Product name="Hemashree" discreption="Your Google Assitent" price={53.90} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2>----------------HOOKS---------------</h2>
          <br />
          <br />
          <UseStateHOOK />
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          <UseReduceHook />
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          <UseEffectHooks />
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          <UseRefHooks />
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          <UseLayoutHook />
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          <UseImperativeHandle/>
          <br />
          <br />
          <p>.......................................................................................................................</p>
          <br />
          {/* <UseContext/> */}
          <br />
          <br />
        </center>
      </div>
    </>
  );
}

export default App;
