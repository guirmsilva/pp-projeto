import './UserComponent.css';

function UserComponent({ name, email }) {
    return (
        <div className="userBox">
            <div id="name">{name}</div>
            <div id="email">{email}</div>
        </div>
    );
};

export default UserComponent;