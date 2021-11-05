import { Container, Hr, Content, Table, Tr, Th, Button, Td, ModalOpen, Submit, Fechar, Form,
InputLabel } from './style'
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
          <ModalOpen>
            <Form>
                <form>
                <h2>Criação de Ferramenta</h2>
                <Hr/>
                <InputLabel>
                <label>Nome do Produto/Ferramenta</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Base - Pequeno Porte (U$)</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Base - Médio Porte (U$)</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Base - Grande Porte (U$)</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Valor com Imposto</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Valor sem Imposto</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <InputLabel>
                <label>Valor p/ Parceiro</label>
                <input type="text" name="" id="" required />
                </InputLabel>
                <Submit>
                <button type="submit"> Enviar </button>
                </Submit>
                </form>
                <Fechar> <button onClick={() => setModalIsOpen(false)}>Fechar</button></Fechar>
            </Form>
          </ModalOpen>
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
                                    <input type="search" name="" id=""  placeholder="Filtrar" />
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
                                <a onClick={() => setModalIsOpen(true)}> <AiOutlineEdit size="25" />  </a>                                 
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
                                <a onClick={() => setModalIsOpen(true)}> <AiOutlineEdit size="25" />  </a>                             
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
                                    <a onClick={() => setModalIsOpen(true)}> <AiOutlineEdit size="25" />  </a>                         
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