import './Button.css';

const Button = ({ onClick, title }) => {
    return (
        <div className="Button">
            <button className="btn" onClick={onClick}>{title}</button>
        </div>
    )
}

export default Button;