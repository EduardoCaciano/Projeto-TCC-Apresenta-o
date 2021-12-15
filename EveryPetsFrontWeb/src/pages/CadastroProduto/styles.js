import styled from "styled-components";


export const ContainerCadastro = styled.header`
    width: 100%;
    height: 50vh;
    align-items: center;
    justify-content: center;
    margin-top: 120px;

        >h1{
            margin-top: 100px;
            text-align: center;
            margin-left: auto;
            margin-right: auto;
            text-decoration: underline;
            width: initial;
            height: initial;
            color: black;
        }

        #containerGatinho{
            width: 900px;
            height: 70px;
            display: block;
            margin-right: auto;
            margin-left: auto;
            padding-top: 1px;

            >img {
                height: 100px;
                width: 300px;
                float: right;
                display: block;
            }
        }
        
`;

export const FormContainer = styled.form`
    width: 900px;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 0px 20px #D9A467;
    background-color: var(--secundary);
    border-radius: 15px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0px;
    margin-bottom: 50px;

    >#arquivos{
        height: 25px;
        width: 100%;
        margin-top: 60px;
        display: flex;
        align-items: center;

        >figure{
            width: 80px;
            height: 80px;

            >img{
                width: inherit;
                height: inherit;
            }
        }

        >#caixaImagem{
        width: 100vw;
        height: inherit;
        margin-left: 25px;

        >input{
            font-size: 1.2em;
        }
        }
        
    }

    
    >#botoes{
        width: 100%;
        height: inherit;
        /* background-color: black; */
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;

        >button {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #1ACC2B;
        background-color: #1ACC2B;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        margin-left: 30px;
        }

        >#cancelar {
        width: 200px;
        height: inherit;
        border-radius: 30px;
        margin-top: 15px;
        border-color: #E24513;
        background-color: #E24513;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
        }
    }

`;