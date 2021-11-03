import { Link } from "react-router-dom";
import { Container, Hr, Content, Table, Tr, Th, Button, Td } from './style'
import { AiFillDelete } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";

const ViewCliente = () => {
    return(
            <Container>
                <h2>Criaçaõ de Orçamento</h2>
                <Hr/>
                <Content>
                <Table>
                    <thead>
                    <Tr>
                        <Th>
                            Nome do Cliente
                        </Th>
                        <Th>
                            CNPJ
                        </Th>
                        <Th>
                            Porte
                        </Th>
                        <Th>
                            QTDE de Funcionários
                        </Th>
                        <Th>
                            Telefone (COM)
                        </Th>
                        <Th>

                        </Th>
                    </Tr>
                    </thead>
                    <tbody>
                        <Tr>
                            <Td>
                                Felipe Albuquerque
                            </Td>
                        
                            <Td>
                                111.111.111.111
                            </Td>
                            <Td>
                                Médio Porte
                            </Td>
                            <Td>
                                500
                            </Td>
                            <Td>
                                (19) 996047221
                            </Td>
                            <Td>
                            <Link to="/CreateOrcamento">
                            <Button>
                                +
                            </Button>
                            </Link>
                            </Td>
                            </Tr>
                            <Tr>
                            <Td>
                                Felipe Albuquerque
                            </Td>
                        
                            <Td>
                                111.111.111.111
                            </Td>
                            <Td>
                                Médio Porte
                            </Td>
                            <Td>
                                500
                            </Td>
                            <Td>
                                (19) 996047221
                            </Td>
                            <Td>
                            <AiFillDelete size="25"/> <RiMoneyDollarCircleFill size="25" /> <AiOutlineEdit size="25"/>
                            </Td>
                            </Tr>
                    </tbody>
                </Table>
                </Content>
            </Container>
    );
}

export default ViewCliente