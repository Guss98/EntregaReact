import { GlobalStyles } from './componentes/estilos/globalStyles';
import { Lista } from './componentes/Lista/Lista';
import './componentes/estilos/estilos.css';

  
function App() {
  

  return (
    <div className='appTo-Do'>
     
      <Lista></Lista>
      
      <GlobalStyles></GlobalStyles>
    </div>
    
  );
}

export default App;
