import HeaderHome from "../../components/HeaderHome";
import { ContainerCatalogo } from "./styles";
import logo from "../../assents/profile.jpg"
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png"
import mais from "../../assents/mais.png"
import consulta from "../../assents/consulta.jpg"
import cirurgia from "../../assents/cirurgia.jpg"
import banhoeTosa from "../../assents/banhoeTosa.png"
import CardCirurgia from "../../components/CardCirurgia";
import FooterS from "../../components/FooterSecundario";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUser } from "../../services/security";

function CatalogoProdutos() {

    // const [service,setService] = useState([]);

    // useEffect(()=>{
    //     api.get("/service").then(({data}) =>{
    //         setService(data)
    //         console.log(data);
    //     });
    // },[]);

    const establishment = getUser();

    return (
        <>
            <HeaderHome />
            <ContainerCatalogo>
                <div id="caixaFotoNome">                    
                        <div>
                            <h1>{establishment.establishment.name_establishment}</h1>
                            <h3>PetShop</h3>
                        </div>    
                </div>
        
                <div id="cirurgias">
                    <h1>Produtos</h1>
                </div>
                <div id="cardsCirurgias">
                    <CardCirurgia/>
                </div>
                <FooterS />
            </ContainerCatalogo>
        </>
    );
}

export default CatalogoProdutos;