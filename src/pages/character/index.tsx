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
              <Grid item xs={ 6 }>
                <Typography variant='h3' >{ character!.name }</Typography>
                <Divider />
                <Typography variant="h6">{ character!.origin.name }</Typography>
                <Box sx={ { mt: 2 } }>
                  <Chip color="primary" variant="outlined" label={ character!.status } />
                </Box>
                <Box
                  sx={ { mt: 2, size: "large" } }
                  style={ { display: "flex", flexDirection: "row", flexWrap: "wrap", alignContent: "center", justifyContent: "center", alignItems: "center" } }>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={ () => navigate(`/`) }>
                    Back
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={ 6 }>
                <img src={ character!.image } style={ { width: "100%", borderRadius: "0.5em" } } />
              </Grid>
            </Grid>
          ) }
      </Container>
    </Box>
  );
};

export default CharacterPage;

