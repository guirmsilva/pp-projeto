import { Link } from 'react-router-dom';

import './FooterPrincipal.css'

function FooterPrincipal() {
    return <p className="rodapePrincipal">Site criado por <Link to="/sobre" id="linkSobre">Guilherme Ramos</Link>.</p>
};

export default FooterPrincipal;