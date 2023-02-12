import React from "react";
import { 
    Button,
    Card, 
    CardActions , 
    CardContent, 
    CardMedia, 
    Divider,
    Typography 
} from "@mui/material";

type CardProps= {
    image: string,
    name: string,
    species: string,
    status: string
}

export const CardComponent: React.FC<CardProps> = ({
    image,
    name,
    species,
    status
}) => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="194"
                image={image}
                alt="Aqua Morty"
            /> 
            <CardContent>
                <Typography variant="h4" sx={{mt: 2, mb: 1.5}}>
                    {name}
                </Typography>
                <Divider />
                <Typography sx={{mt: 1.5}}>
                    Specie: {species}
                </Typography>
                <Divider />
                <Typography sx={{mt: 1.5}}>
                    Status: {status}
                </Typography>
            </CardContent>
            <CardActions >
                <Button 
                    fullWidth
                    variant="contained" 
                    size="small"
                >
                    Learn more
                </Button>
            </CardActions>
        </Card>
    )
}