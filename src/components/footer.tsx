export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="pier-pagina" id="contacto">
            <p>{currentYear} TechStore</p>
        </footer>
    )
}