import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import { useNotification } from '../../context/notification.context';
import { LoginValidate } from '../../utils/validateForm';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

type LoginType = {
    username: string;
    password: string;
};

const LoginPage: React.FC<{}> = () => {
    const navigate = useNavigate();
    const { getSuccess } = useNotification();
    const formik = useFormik<LoginType>({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: LoginValidate,
        onSubmit: (values: LoginType) => {
            getSuccess(JSON.stringify(values));
        },
    });

    return (
        <Container maxWidth="sm">
            <Grid container>
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    sx={ { mt: 5, mb: 3 } }
                    onClick={ () => navigate(`/`) }
                >
                    Back to Home
                </Button>
            </Grid>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={ { minHeight: '90vh' } }
            >
                <Grid item>
                    <Paper sx={ { padding: '1.2em', borderRadius: '0.5em' } }>
                        <Typography sx={ { mt: 1, mb: 1 } } variant="h4">
                            Login
                        </Typography>
                        <Box component="form" onSubmit={ formik.handleSubmit }>
                            <TextField
                                name="username"
                                margin="normal"
                                type="text"
                                fullWidth
                                label="Email"
                                sx={ { mt: 2, mb: 1.5 } }
                                value={ formik.values.username }
                                onChange={ formik.handleChange }
                                error={
                                    formik.touched.username && Boolean(formik.errors.username)
                                }
                                helperText={ formik.touched.username && formik.errors.username }
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password"
                                fullWidth
                                label="Password"
                                sx={ { mt: 1.5, mb: 1.5 } }
                                value={ formik.values.password }
                                onChange={ formik.handleChange }
                                error={
                                    formik.touched.password && Boolean(formik.errors.password)
                                }
                                helperText={ formik.touched.password && formik.errors.password }
                            />

                            <Button
                                fullWidth
                                type="submit"
                                variant="contained"
                                sx={ { mt: 1.5, mb: 3 } }
                            >
                                Login
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default LoginPage;