import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import LessText from './components/LessText';
import Counter from './components/Counter';
import Cake from './components/Cake';

function App() {

  return (
    <div className='container-fluid'>
      <div>
        <Cake />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <LessText
          text={`Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.`}
          maxLength={35}
        />
        <LessText
          text={`Winners embrace hard work. They love the disciple of it, the trade-off they're making to win. Losers, on the other hand, see it as punishment. And that's the difference. `}
          maxLength={35}
        />
      </div>
    </div>
  );
}


export default App;
