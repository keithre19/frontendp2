import React, { useState } from 'react';
import axios from 'axios';

// MUI
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { useRouter } from 'next/navigation';

const FormLayoutsWithIcon = ({ idProyecto, nombre: initialNombre, area: initialArea, descripcion: initialDescripcion, fechaInicio: initialFechaInicio, fechaFin: initialFechaFin, porcentajeCompletado: initialPorcentajeCompletado, comentarios: initialComentarios, responsable: initialResponsable }) => {
    const [nombre, setNombre] = useState(initialNombre || '');
    const [area, setArea] = useState(initialArea || '');
    const [descripcion, setDescripcion] = useState(initialDescripcion || '');
    const [fechaInicio, setFechaInicio] = useState(initialFechaInicio || '');
    const [fechaFin, setFechaFin] = useState(initialFechaFin || '');
    const [porcentajeCompletado, setPorcentajeCompletado] = useState(initialPorcentajeCompletado || '');
    const [comentarios, setComentarios] = useState(initialComentarios || '');
    const [responsable, setResponsable] = useState(initialResponsable || '');
    const [alert, setAlert] = useState({ show: false, message: '', severity: 'success' });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`${process.env.NEXT_PUBLIC_APP_URL}/api/proyecto/${idProyecto}`, {
                nombre,
                area,
                descripcion,
                fecha_inicio: fechaInicio,
                fecha_fin: fechaFin,
                porcentaje_completado: porcentajeCompletado,
                comentarios,
                responsable
            });

            if (response.status === 200) {
                setAlert({ show: true, message: 'Actualización Exitosa', severity: 'success' });
                setTimeout(() => {
                    setAlert({ show: false, message: '', severity: 'success' });
                    router.push('/proyectos');
                }, 1500);
            }
        } catch (error) {
            console.error('Error al actualizar el proyecto:', error);
            setAlert({ show: true, message: 'Error al actualizar el proyecto', severity: 'error' });
            setTimeout(() => {
                setAlert({ show: false, message: '', severity: 'error' });
            }, 2000);
        }
    };

    const handleCancel = () => {
        router.push('/proyectos');
    };

    return (
        <Card>
            <CardHeader
                title={
                    <Typography
                        variant="h5"
                        sx={{
                            color: 'rgb(109, 9, 197)',
                            fontWeight: 'bold',
                            fontSize: '2rem',
                            textAlign: 'center',
                        }}
                    >
                        EDITAR PROYECTO
                    </Typography>
                }
            />
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Nombre'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Área'
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Descripción'
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Fecha de Inicio'
                                type='date'
                                InputLabelProps={{ shrink: true }}
                                value={fechaInicio}
                                onChange={(e) => setFechaInicio(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Fecha de Fin'
                                type='date'
                                InputLabelProps={{ shrink: true }}
                                value={fechaFin}
                                onChange={(e) => setFechaFin(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Porcentaje Completado'
                                type='number'
                                value={porcentajeCompletado}
                                onChange={(e) => setPorcentajeCompletado(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Comentarios'
                                value={comentarios}
                                onChange={(e) => setComentarios(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label='Responsable'
                                value={responsable}
                                onChange={(e) => setResponsable(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} align={'center'}>
                            <Button variant='contained' type='submit' sx={{ mr: 2 }}>
                                <i className='ri-user-add-line' />
                                Guardar
                            </Button>
                            <Button variant='contained' color='secondary' onClick={handleCancel}>
                                <i className='ri-picture-in-picture-exit-line' />
                                Cancelar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </CardContent>
            {alert.show && (
                <Alert
                    severity={alert.severity}
                    sx={{ mb: 2 }}
                    onClose={() => setAlert({ ...alert, show: false })}
                >
                    {alert.message}
                </Alert>
            )}
        </Card>
    );
}

export default FormLayoutsWithIcon;
