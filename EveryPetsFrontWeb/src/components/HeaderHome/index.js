import { Container } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assents/logo2.png";
import botaoSair from "../../assents/botaoSair.png";
import profile from "../../assents/profile.jpg";
import { getUser } from "../../services/security";

function Header() {

  const establishment = getUser();

  return (
    <Container>
      {/* <nav>
        <img src={logo} />
        <input type="search" placeholder="Pesquisar..." />
        <div id="profile">
          <img src={profile} />
        </div>
        <p>{establishment.establishment.responsible_name}</p>
      </nav> */}

      <nav>
        <img src={logo} />
        <input type="search" placeholder="Pesquisar..." />
        <div id="profile">
          <img src={profile} />
        </div>
        <ul class="menu">
          <li>
            <a>{establishment.establishment.responsible_name}</a>
            <ul>
              <li><Link to="/login">Sair</Link></li>
            </ul>
          </li>
        </ul>
      </nav>

      <nav id="headerCardes">
        <Link to="/catalogos/produtos">
          <div class="cards">
            <p>Home</p>
          </div>
        </Link>

        <Link to="/cadastro_produto">
          <div class="cards">
            <p>Cadastro</p>
          </div>
        </Link>

        <Link to="/solicitacoes">
          <div class="cards">
            <p>Solicitacoes</p>
          </div>
        </Link>



        <Link to="/agendados">
          <div class="cards">
            <p>Atendimentos</p>
          </div>
        </Link>
      </nav>
    </Container>
  );
}

export default Header;
