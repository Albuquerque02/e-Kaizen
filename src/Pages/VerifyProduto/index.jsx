import { Container, Hr, Content, Table, Tr, Th, Button, Td } from './style'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import Voltar from "../../Components/GoBack"
import Modal from 'react-modal'
import { useState } from 'react'


Modal.setAppElement('#root')

const VerifyCliente = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <Container>
             { <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}  shouldCloseOnOverlayClick={false}  className='Modal' overlayClassName="Overlay">
          <div style={{ borderRadius: '2px' }}>
            <button className='btn-fechar' onClick={() => setModalIsOpen(false)}> X </button>
          </div>
          <div className='contentModal'>
            <button className="btn"> <Link to={"/Login"} style={{ textDecoration: 'none', fontSize: '18px' }}>Já tenho cadastro</Link></button>
            <button className="btn"> <Link to={"/Register"} style={{ textDecoration: 'none', fontSize: '18px' }}>Não tenho cadastro</Link></button>
          </div>
        </Modal> }
                <h2>Cadastro de Ferramentas</h2>
                <Hr/>
                <Content>
                    <Table>
                        <thead>
                            <Tr>
                                <Th>
                                    Produto
                                </Th>
                                <Th>
                                    Base- Pequeno Porte
                                </Th>
                                <Th>
                                    Base- Médio Porte
                                </Th>
                                <Th>
                                    Base- Grande Porte
                                </Th>
                                <Th>
                                        <Button onClick={() => setModalIsOpen(true)}>
                                           +
                                        </Button>
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
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    F22 Raptor
                                </Td>
                                <Td>
                                U$ 150.000.000,00
                                </Td>
                                <Td>
                                U$ 156.000.000,00
                                </Td>
                                <Td>
                                U$ 165.000.000,00
                                </Td>
                                <Td>
                                <AiOutlineEdit size="25"/>                                
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                    <Voltar />
                </Content>
        </Container>
    );
}

export default VerifyCliente