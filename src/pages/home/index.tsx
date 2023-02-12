import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { CardComponent, HeaderComponent } from "../../components";
import { characters } from "../../api/characters";
import { TypeCharacter } from "./interface/charcter.interface";

export const HomePage: React.FC<{}> = () => {

    const [allCharacters, setAllCharacters] = React.useState<TypeCharacter[] | null>(null);

    React.useEffect(() => {
        characters.getAll({page: 1}).then((res)=> {
            setAllCharacters(res.data.results);
        }).catch((e) => {
            console.log(e);
        })
    }, [])  

    return (
        <Container maxWidth="xl">
           <HeaderComponent 
                title="Home"
                description="Bienvenidos a MarketPlace!" 
                element={
                    <Button fullWidth variant="contained">
                        Hola!
                    </Button>
                }
            />
            <div>
                {
                    allCharacters?.length !== 0 ? (
                        <Grid container spacing={2} direction="row">
                            {
                                allCharacters!.map((character) => (
                                    <Grid item xs={3}>
                                        <CardComponent 
                                            key={character.id} 
                                            image={character.image} 
                                            name={character.name} 
                                            species={character.species} 
                                            status={character.status} 
                                        />
                                    </Grid>
                                ))
                            }
                        </Grid>
                    ) : <div>No hay personajes</div>
                }
            </div>
            

        </Container>
    )
}