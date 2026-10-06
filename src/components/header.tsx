export const Header = () => {
    return(
        <header className="encabezado">
            <div>
                <h1>TechStore</h1>
                <p>Tecnologia para estudiar, trabajar y crear</p>
            </div>

            <nav className="navegacion">
                <a href="#inicio"></a>
                <a href="#productos"></a>
                <a href="contacto"></a>
            </nav>
        </header>
    )
}