import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './pages/login';
import Areas from './pages/areas';
import CadUsuario from './pages/Administracao/Usuarios/dados';
import AltUsuario from './pages/Administracao/Usuarios/dadosAlterar';
import CadCliente from './pages/Administracao/Clientes/dados';
import AltCliente from './pages/Administracao/Clientes/dadosAlterar';
// import DadosContTrab from './comps/DadosContTrab';
// import DadosEndereco from './comps/DadosEndereco';
// import DadosContatoCli from './comps/DadosContatoCli';
import CadContatoCli from './pages/Administracao/Clientes/incluirContato';
import CadAdministradora from './pages/Administradora/incluir';
import SelAdministradora from './pages/Administracao/selecionarAdm';

ReactDOM.render(<SelAdministradora />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
