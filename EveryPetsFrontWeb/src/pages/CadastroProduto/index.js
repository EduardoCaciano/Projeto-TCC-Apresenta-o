import HeaderHome from "../../components/HeaderHome";
import Input from "../../components/InputCadastro";
import { FormContainer } from "../CadastroProduto/styles";
import { ContainerCadastro } from "./styles";
import logo from "../../assents/gatoCadastro.png";
import FooterSecundario from "../../components/FooterSecundario";
import { useHistory } from "react-router";
import { useRef, useState } from "react";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

function Cadastrar() {
  const imgRef = useRef();

  const [file, setFile] = useState(null);

  const handleFile = async (e) => {
    setFile(e.target.files[0]);
    imgRef.current.src = URL.createObjectURL(e.target.files[0]);
  };

  const history = useHistory();

  const [produto, setProduto] = useState({
    name: "",
    amount: "",
    value: "",
    description: "",
  });

  const handleInputProduto = (event) => {
    setProduto({ ...produto, [event.target.id]: event.target.value });
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { name, amount, value, description } = produto;

  //     const response = await api.post("/service", {
  //       name, amount, value, description
  //     });

  //     signIn(response.data);
  //     history.push('/catalogos/produtos');
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  const addVisit = async () => {
    const data = new FormData();

    data.append("image", file);
    data.append("name", produto.name);
    data.append("value", produto.value);
    data.append("amount", produto.amount);
    data.append("description", produto.description);

    try {
      const response = await api.post(`/service`, data, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(response);
      history.push("/catalogos/produtos");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeaderHome />
      <ContainerCadastro>
        <h1>Cadastre seu produto</h1>

        <div id="containerGatinho">
          <img src={logo} />
        </div>

        <FormContainer>
          <Input
            label="Nome do Produto"
            id="name"
            value={produto.name}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Quantidade"
            id="amount"
            value={produto.amount}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Valor"
            id="value"
            value={produto.value}
            handler={handleInputProduto}
            required
          />
          <Input
            label="Descrição"
            id="description"
            value={produto.description}
            handler={handleInputProduto}
            required
          />

          <div id="arquivos">
            {
              <figure>
                <img ref={imgRef} />
              </figure>
            }
            <div id="caixaImagem">
              <input
                label="Imagem"
                id="file"
                type="file"
                accept="image/*"
                onChange={handleFile}
              />
            </div>
          </div>

          <div id="botoes">
            <button
              id="cancelar"
              onClick={() => history.push("/catalogos/produtos")}
            >
              Cancelar
            </button>
              <button
            onClick={() => {
              addVisit();
              console.log(file, produto);
            }}
          >
            Confirmar
          </button>
          </div>
        
        </FormContainer>
       
        <FooterSecundario />
      </ContainerCadastro>
    </>
  );
}

export default Cadastrar;
