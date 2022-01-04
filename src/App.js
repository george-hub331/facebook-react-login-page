import './App.css';
import Form from './Form.js';
import Logoo from './Logoo.js';
const App = () => {
  return (
    <div className="inner">
    <div className="sec inf">
        <div>
        <Logoo width=""/>
    </div>
    <div>    
    <h2 className="stt">
        Facebook helps you connect and share with the people in your life.
    </h2>
    </div>
    </div>
    <div className="sec">
        <Form user="" pass="" addF={true}/>

        <div className="xxm">
    <a href="page">Create a Page</a> for a celebrity, brand or business.</div>
    </div>
</div>
  );
}

export default App;
