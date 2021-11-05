import { BrowserRouter as Router, 
    Route, 
    Switch,
  } from 'react-router-dom';
import CreateOrcamento from './Pages/CreateOrcamento';
import Produtos from './Pages/Produtos';
import SelectFerramentas from './Pages/SelectFerramentas';
import VerifyProduto from './Pages/VerifyProduto';
import ViewCliente from './Pages/ViewCliente';

function Routes(){
    return(
      
    <Router>
      <Switch>
    <Route path="/CreateOrcamento" exact component={CreateOrcamento} />
    <Route path="/Produtos" component={Produtos} />
    <Route path="/SelectFerramentas" component={SelectFerramentas} />
    <Route path="/VerifyProduto" component={VerifyProduto} />
    <Route path="/" component={ViewCliente} />
     </Switch>
  </Router>
    )
}

export default Routes