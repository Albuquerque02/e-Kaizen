import { BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
  } from 'react-router-dom';
import CreateOrcamento from './Pages/CreateOrcamento';
import Produtos from './Pages/Produtos';
import SelectFerramentas from './Pages/SelectFerramentas';
import VerifyCliente from './Pages/VerifyCliente';
import ViewCliente from './Pages/ViewCliente';

function Routes(){
    return(
        <>
        <Router>
      <Switch>
    <Route path="/CreateOrcamento" exact component={CreateOrcamento} />
    <Route path="/Produtos" component={Produtos} />
    <Route path="/SelectFerramentas" component={SelectFerramentas} />
    <Route path="/VerifyCliente" component={VerifyCliente} />
    <Route path="/" component={ViewCliente} />
     </Switch>
  </Router>
        </>
    )
}

export default Routes