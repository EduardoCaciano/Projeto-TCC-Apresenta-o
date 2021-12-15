import styled from "styled-components";
import imgDog from "../../assents/catalogo.png";

export const ContainerCards = styled.header`
    width: 100vw;
    height: inherit;
    justify-content: left;
    display: flex;
    margin-top: 8px;
    *{margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    >#informacoes{
            width: 280px;
            height: inherit;
            max-width: 250px;
            margin: 15px;
            border-radius: 15px;
            border: 0.01px solid black;
            word-break: break-all;


                >img{
                    height: 150px;
                    width: 100%;
                    display: flex;
                    align-items: flex-start;
                    background-color: black;
                    background-image: url(${imgDog});
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    border-top-left-radius: 8%;
                    border-top-right-radius: 8%;
                }
                
                >h2{
                    color: rgb(102, 102, 102);
                    font-size: 20px;
                    line-height: 18px;
                    min-height: 36px;
                    display: -webkit-box;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    margin-top: 10px;
                }

                >h3{
                    display: flex;
                    font-size: 13px;
                    min-height: 14px;
                    color: rgb(102, 102, 102);
                    margin-bottom: 10px;
                }
    }
    
`;

