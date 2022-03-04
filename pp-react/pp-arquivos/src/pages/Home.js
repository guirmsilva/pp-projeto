import BigButton from '../components/BigButton';
import FooterPrincipal from '../components/FooterPrincipal';

import './Home.css';

function Home() {
    return (
        <main>
          <h1 id="tituloPrincipal">Bem-vindo ao meu site.</h1>

          
          <BigButton title="Login / Cadastro" rota="login" />

          <BigButton title="Listagem de Usuários" rota="listagem" />

          <FooterPrincipal />
        </main>
    );
};

export default Home;