import './button.css'
export default function Button(props) {
    return (
        <>
        <button
        type={props.type}
        id={props.id}
        name={props.name}
        
        className={props.class}
        >Login
        </button>
        </>
    );
}