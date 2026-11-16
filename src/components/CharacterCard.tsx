import './styles/characterCard.css'

interface CharacterCardProps {
    id: number
    image: string
    name: string
    status: string
    species: string
    gender: string
    origin: string
    location: string
    episodes: number
}

export const CharacterCard = ({ image, name, status, species, gender, origin, location, episodes }: CharacterCardProps) => {
    return (
        <article className="personaje">

            <div className="personaje_imagen">
                <img src={image} alt={name} loading="lazy" />
            </div>

            <h3>{name}</h3>

            <p className="personaje_dato">Estado: {status}</p>

            <p className="personaje_dato">Especie: {species}</p>

            <p className="personaje_dato">Genero: {gender}</p>

            <p className="personaje_origen">Origen: {origin}</p>

            <p className="personaje_origen">Ubicacion: {location}</p>

            <p className="personaje_origen">Episodios: {episodes}</p>

        </article>
    )
}
