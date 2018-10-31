import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';
import Areas from './pages/areas';
import CadUsuario from './pages/Administracao/Usuario/incluir';
import AltUsuario from './pages/Administracao/Usuario/alterar';
import CadCliente from './pages/Administracao/Cliente/incluir';
import AltCliente from './pages/Administracao/Cliente/alterar';
// import DadosContTrab from './comps/DadosContTrab';
// import DadosEndereco from './comps/DadosEndereco';
// import DadosContatoCli from './comps/DadosContatoCli';
import CadContatoCli from './pages/Administracao/Cliente/incluirContato';
import CadAdministradora from './pages/Administradora/incluir';
import SelAdministradora from './pages/Administracao/selecionarAdm';
import ListaCli from './pages/Administracao/Cliente/lista';
import ListaUsuario from './pages/Administracao/Usuario/lista';
import PrincipalAdm from './pages/Administracao/principal';
import PrincipalAdministracao from './comps/PrincipalAdministracao';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {/* SOLUÇÃO PARCIAL*/}
            {/* SITE PARA UTILIZAR COMO ESTUDO PARA FAZER A ROTA CORRETA: https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf */}
            <Route path="/" exact={true} component={Login}/>
            <Route path="/areas" component={Areas}/>
            <Route path="/incluiradministradora" component={CadAdministradora} />
            <Route path="/administradoras" component={SelAdministradora}/>
            <Route path="/incluircliente" component={CadCliente} />
            <Route path="/alterarcliente" component={AltCliente} />
            <Route path="/incluirusuario" component={CadUsuario} />
            <Route path="/alterarusuario" component={AltUsuario} />
            <Route path="/incluircontatocliente" component={CadContatoCli} />
            <Route path="/listacliente" component={ListaCli} />
            <Route path="/listausuario" component={ListaUsuario} />
            <Route path="/principaladm" component={PrincipalAdm}/>
            <Route path="/teste" component={PrincipalAdministracao} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
