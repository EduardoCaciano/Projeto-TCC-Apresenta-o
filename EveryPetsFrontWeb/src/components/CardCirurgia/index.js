import { ContainerCards, } from "./styles";
import editar from "../../assents/editar.png"
import lixo from "../../assents/lixo.png";
import { useEffect, useState } from "react";
import { api } from "../../services/api";


function CardCirurgia() {

    const [catalogos, setCatalogos] = useState([]);

    useEffect(()=>{
        api.get("/service").then(({data}) =>{
            setCatalogos(data)
            console.log(catalogos);
        });
    },[]);

    useEffect(()=>{
        api.get("/service").then(({data}) =>{
            setCatalogos(data)
            console.log(data)
        });
    },[]);

    return (
        <ContainerCards>
            {
                catalogos.map((item) =>{
                    return <>
                    <div id="informacoes">
                        <img src={item.path_image}/>
                        <h2>{item.name}</h2>
                        <h3>R${item.value}</h3>
                        <h3>{item.description}</h3>
                    </div>
                    </>
                })
            }
        </ContainerCards>

    );
}

export default CardCirurgia;