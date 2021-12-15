import { Container, FormContainer} from "./styles";
import Header from "../../components/Header"
import Input from "../../components/Input";
import { signIn } from "../../services/security";
import {  useState } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const history = useHistory();

    const [formLogin , setFormLogin] = useState({
        email: "",
        senha: ""
    });
    const handleInput = (e) => {
        setFormLogin({ ...formLogin, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sessionEstablishment", {
                email: formLogin.email,
                password: formLogin.senha
            });
        
            signIn(response.data)
            console.log(response.data)
            history.push("/catalogos/produtos");
        } catch (error) {
          console.log(error)
          toast.error("usuário e/ou senha inválidos")
        }
    }
  
    return (
        <>
            <Header />
            <Container>
            <ToastContainer/>
                <FormContainer onSubmit={handleSubmit}>
                    <Input 
                    label="E-mail" 
                    id="email" 
                    type="email"
                    value={formLogin.email} 
                    handler={handleInput}
                    required />

                    <Input 
                    label="Senha" 
                    type="password" 
                    id="senha" 
                    type="password"
                    value={formLogin.senha}
                    handler={handleInput}
                    required />

                    <button type="submit">
                        Entrar
                    </button>

                    <div id="lembrarSenha">
                        <p>Lembrar Senha</p>
                        <input type="checkbox" />
                    </div>
                    <nav>
                        <p>Esqueceu a Senha?</p>
                        <Link to="/EscolhaSegmento"><p id="cadastre">Novo aqui? Cadastre-se</p></Link>
                    </nav>
                </FormContainer>
            </Container>
            <Footer />
        </>
    );
}

export default Login;