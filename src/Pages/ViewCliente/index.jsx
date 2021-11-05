import { Link } from "react-router-dom";
import { Container, Hr, Content, Table, Tr, Th, Button, Td, Produtos } from './style'
import { AiFillDelete } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";



const ViewCliente = () => {
    return(
        
            <Container>
                <h2>Criação de Orçamento</h2>
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
                                <input type="search" name="" id="" placeholder="Filtrar" />
                            </Td>
                        
                            <Td>
                            <input type="search" name="" id="" placeholder="Filtrar" />
                            </Td>
                            <Td>
                            <input type="search" name="" id="" placeholder="Filtrar" />
                            </Td>
                            <Td>
                            <input type="search" name="" id="" placeholder="Filtrar" />
                            </Td>
                            <Td>
                            <input type="search" name="" id="" placeholder="Filtrar" />
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
                               
                            </Td>
                        
                            <Td>
                                
                            </Td>
                            <Td>
                                
                            </Td>
                            <Td>
                               
                            </Td>
                            <Td>
                                
                            </Td>
                            <Td>
                             <RiMoneyDollarCircleFill size="25" /> <AiOutlineEdit size="25"/> <AiFillDelete size="25"/>
                            </Td>
                            </Tr>
                    </tbody>
                </Table>
                <Produtos><Link to="/VerifyProduto">Produtos Cadastrados</Link></Produtos>
                </Content>
            </Container>
    );
}

export default ViewCliente