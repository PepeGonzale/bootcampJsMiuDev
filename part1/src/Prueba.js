//Le pasamos un parametro con un prop, en este caso es un color que hará que cambie de color el texto del h1
const Probar = (props) => {
    return (
        <h2 style = {{color: props.color}}>{props.mensaje}</h2>
    )
}
export default Probar;