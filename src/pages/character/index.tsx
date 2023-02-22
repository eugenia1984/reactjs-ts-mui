import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Divider,
  Grid,
  Typography
} from "@mui/material";
import { characters } from "../../api/characters";
import { ICharacter } from "./interfaces/character.interface";

const CharacterPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState<boolean>(true);
  const [character, setCharacter] = React.useState<ICharacter | null>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    characters
      .getById({ id })
      .then((r) => {
        setCharacter(r.data)
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={ { width: "100%", marginTop: "32px" } }>
      <Container maxWidth="xl">
        {
          loading ? (
            <Box sx={ { display: "flex", justifyContent: "center", mt: 4 } }>
              <CircularProgress />
            </Box>
          ) : (
            <Grid sx={ { mt: 2 } } container columnSpacing={ 2 }>
              <Grid item xs={ 12 } sm={ 6 }>
                <img
                  src={ character!.image }
                  alt={ character!.name }
                  style={ { width: "100%", borderRadius: "0.5em" } }
                />
              </Grid>
              <Grid item xs={ 12 } sm={ 6 }>
                <Typography variant='h3' >{ character!.name }</Typography>
                <Divider />
                <Typography variant="h6">Specie: { character!.species }</Typography>
                <Typography variant="h6">Origin: { character!.origin.name }</Typography>
                <Typography variant="h6">Location: { character!.location.name }</Typography>
                <Typography variant="h6">Created: { character!.created }</Typography>
                <Box sx={ { mt: 2, mb: 2 } }>
                  <Chip
                    color={ (character!.status === "Alive") ? "success" : "error" }
                    variant={ (character!.status === "Alive") ? "filled" : "outlined" }
                    label={ character!.status } />
                </Box>
                <Box
                  sx={ { mt: 5, mb: 5, size: "large" } }
                  style={ { display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "center", alignItems: "center" } }>
                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    onClick={ () => navigate(`/`) }>
                    Back
                  </Button>
                </Box>
              </Grid>

            </Grid>
          ) }
      </Container>
    </Box>
  );
};

export default CharacterPage;

