import React, {useEffect, useState} from 'react'
import { AllCharacters } from '../functions/funciones'
import { Card, CardGroup, Icon, Image } from 'semantic-ui-react'


const Personajes = () => {
 const [characters, setCharacters] = useState(null);
  useEffect(()=>{
    AllCharacters(setCharacters)
  },[])

  return (
    <div>
      {characters != null ? (
        characters.map(character => (
          <a href={`/personaje${character.id}`}>
            <Card background="dark">
              <Image src={character.image} wrapped ui={false} />
              <Card.Content>
              <Card.Header>{character.name}</Card.Header>
              <Card.Meta className='vida'>
                <p className='circulo rojo'></p>
                {character.status}
              </Card.Meta>
              <Card.Description>
              {`Cantidad de capitulos: ${character.episode.length}`}
              </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  {character.origin.name}
              </Card.Content>
            </Card> 
            </a>
        ))

        
        ) : ('no hay personajes')} 
    </div>
    )
  }

  export default Personajes