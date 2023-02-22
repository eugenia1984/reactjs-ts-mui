import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { addToCart } from "../../redux/slices/cart.slice";
import { setItem } from "../../utils/localStorage";

type CardProps = {
    image: string,
    name: string,
    species: string,
    status: string,
    id: number
}

export const CardComponent: React.FC<CardProps> = ({
    image,
    name,
    species,
    status,
    id
}) => {
    const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const itemExist = useAppSelector((state) => state.cartReducer);

    React.useEffect(() => {
        setDisabledBtn(itemExist.some((item) => item.id === id));
        setItem('cart', itemExist);
    }, [itemExist, id]);

    const handleAddToCart = () => {
        dispatch(addToCart({
            id,
            name,
            image,
            info: status
        }))
    };

    return (
        <Card>
            <CardMedia component="img" height="194" image={ image } alt="Aqua Morty" />
            <CardContent sx={ { minHeight: "240px" } }>
                <Typography variant="h5" sx={ { mt: 2, mb: 1.5 } }>{ name }</Typography>
                <Divider />
                <Typography sx={ { mt: 1.5 } }>Specie: { species }</Typography>
                <Divider />
                <Typography sx={ { mt: 1.5 } }>Status: { status }</Typography>
            </CardContent>
            <CardActions >
                <Grid container columnSpacing={ 2 }>
                    <Grid item xs={ 12 } sm={ 6 } style={ { marginBottom: "12px" } }>
                        <Button
                            fullWidth
                            variant="contained"
                            size="small"
                            onClick={ () => navigate(`/character/${ id }`) }>
                            View detail
                        </Button>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 }>
                        <Button
                            fullWidth
                            variant="outlined"
                            size="small"
                            disabled={ disabledBtn }
                            onClick={ handleAddToCart }>
                            Add to cart
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
        </Card >
    )
}