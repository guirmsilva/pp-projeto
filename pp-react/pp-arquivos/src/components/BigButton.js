import { Link } from 'react-router-dom';

import './BigButton.css';

function BigButton({ title, rota }) {
    return (
            <div className="big-container">
                
                    <Link to={`/${rota}`} className="container-link">
                        <h1 className="container-title">{title}</h1>
                    </Link>
                
            </div>
    );
};

export default BigButton;