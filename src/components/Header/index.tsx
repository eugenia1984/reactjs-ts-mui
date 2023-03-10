import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";

type HeaderProps = {
    title: string;
    description: string;
    element?: React.ReactNode | null;
};

export const HeaderComponent: React.FC<HeaderProps> = ({
    title,
    description,
    element
}) => {
    return (
        <div>
            <Box sx={ {
                width: "100%",
                height: "350px"
            } }>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    sx={ { height: "100%" } }
                >
                    <Grid item xs={ 10 } md={ 5 }>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={ { height: "100%" } }
                        >
                            <Grid item>
                                <Typography variant="h4">{ title }</Typography>
                            </Grid>
                            <Grid item sx={ { mt: 2 } }>
                                <Typography>{ description }</Typography>
                            </Grid >
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    );
}