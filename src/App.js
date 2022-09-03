import 'moment/locale/es-mx';
import locale from 'antd/es/date-picker/locale/es_ES';
import { DatePicker, Space } from 'antd';
import { Collapse } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.scss';

const { Panel } = Collapse;

const text = `
  Este es el texto que puede aparecer dentro del Bloque Colapsable`

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function App() {



  return (
    <Router>
      <div className="App">
        <h1>Sistema de Rutas Básico</h1>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route index element={<Home />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/elementos' element={<Elements />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </div>
    </Router>
  );
}
function Home() {
  return <h2>Estamos en el componente Home</h2>;
}

function Contact() {
  return (
    <h2>Estamos en Contact...</h2>
  );
}

function Elements() {
  return (
    <>
      <h2>Web Personal - <span>Cliente</span></h2>
      <div>
        <DatePicker locale={locale} onChange={onChange} format={"dd DD-MM-yy"} />
      </div>

      <Collapse defaultActiveKey={['1']} >
        <Panel header="Información Complementaria" key="1">
          <p>
            <h3>¿Podré?</h3>
            {text}</p>
        </Panel>
      </Collapse>
    </>
  );
}

function Error404() {
  return <h2>Página no encontrada :-(</h2>;
};

export default App;
