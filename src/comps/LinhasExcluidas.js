
// const styleTable = {
//     width: '100%',
//     border: '0',
//     align: 'center',
//     cellpadding: 2,
//     cellspacing: 0,
// }

// const RowTableEE = (props) => {
//     return (
//         <tr>
//             <td><Button onClick={HandleClickTable}><FontAwesomeIcon icon="plus" /></Button></td>
//             <td>{props.cliente}</td>
//             <td>{props.competencia}</td>
//             <td>{props.produto}</td>
//             <td>{props.assunto}</td>
//             <td>{props.envio}</td>
//         </tr>
//     );
// }

// const NewTableRow = (props) => {
//     return (
//         <table>
//             <tbody>
//                 <tr>
//                     <td></td>
//                     <td>para: {props.nomeDest}</td>
//                     <td>email: {props.emailDest}</td>
//                     <td></td>
//                 </tr>
//             </tbody>
//         </table>
//     );
// }

// const HandleClickTable = () => {
//         // 
// }

// export default class ListaEmailEnviados extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
        
//         return (
//             <div className="email_enviados">
//                 <Header />
//                 <LayoutPesquisa>
//                     <FormGroup controlId="cliente-ee-pesq" className="formpesq_child" >
//                         <ControlLabel>
//                             Cliente
//                         </ControlLabel>
//                         <FormControl type="text" placeholder="Cliente" />
//                     </FormGroup>
//                     <FormGroup controlId="competencia-ee-pesq" className="formpesq_child" >
//                         <ControlLabel>
//                             Competência
//                         </ControlLabel>
//                         <FormControl type="text" placeholder="Competência" />
//                     </FormGroup>
//                     <FormGroup controlId="btn-usuario-pesq" className="formpesq_child">
//                         <Button type="" className="" title="Pesquisar">
//                             <FontAwesomeIcon icon="search" />
//                         </Button> 
//                     </FormGroup>
//                 </LayoutPesquisa>
//                 <div className="div_table">
//                     <table style={styleTable} className="table_ee">
//                         <tbody>
//                             <tr className="tb_titulo">
//                                 <td width="4px"></td>
//                                 <td width="200px">Cliente</td>
//                                 <td width="50px">Competência</td>
//                                 <td width="100px">Produto</td>
//                                 <td width="100px">Assunto</td>
//                                 <td width="100px">Envio</td>
//                             </tr>
//                             <RowTableEE cliente="teste" competencia="teste" 
//                                 produto="teste" assunto="teste" envio="teste" />
//                             <RowTableEE cliente="teste" competencia="teste" 
//                                 produto="teste" assunto="teste" envio="teste" />
//                             <RowTableEE cliente="teste" competencia="teste" 
//                                 produto="teste" assunto="teste" envio="teste" />
//                             <RowTableEE cliente="teste" competencia="teste" 
//                                 produto="teste" assunto="teste" envio="teste" />
//                         </tbody>
//                     </table>
//                 </div>
//                 <Footer />
//             </div>
//         );
//     }
// }
