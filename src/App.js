import 'moment/locale/es-mx';
import locale from 'antd/es/date-picker/locale/es_ES';
import { DatePicker, Space } from 'antd';

import { Collapse } from 'antd';

import './App.scss';

const { Panel } = Collapse;

const text = `
  Este es el texto que puede aparecer dentro del Bloque Colapsable`


function App() {

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="App">
      <header className="App-header">
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

      </header>
    </div>
  );
}

export default App;
