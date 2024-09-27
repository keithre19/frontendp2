"use client"
import { useSearchParams } from 'next/navigation';
import Grid from '@mui/material/Grid';
import FormLayoutsWithIcon from '@views/forms/FormUpdateProyecto';

const UpdateProyectos = () => {
    const searchParams = useSearchParams();

    const idProyecto = searchParams.get('idProyecto');
    const nombre = searchParams.get('nombre');
    const area = searchParams.get('area');
    const descripcion = searchParams.get('descripcion');
    const fechaInicio = searchParams.get('fecha_inicio');
    const fechaFin = searchParams.get('fecha_fin');
    const porcentajeCompletado = searchParams.get('porcentaje_completado');
    const comentarios = searchParams.get('comentarios');
    const responsable = searchParams.get('responsable');

    return (
        <Grid item xs={12} md={6} width={0.75}
            boxShadow={'4px 4px 20px rgba(94, 1, 110, 0.35)'}
            marginLeft={'10%'}
            marginTop={'5%'}
            align={'center'}
        >
            <FormLayoutsWithIcon
                idProyecto={idProyecto}
                nombre={nombre}
                area={area}
                descripcion={descripcion}
                fechaInicio={fechaInicio}
                fechaFin={fechaFin}
                porcentajeCompletado={porcentajeCompletado}
                comentarios={comentarios}
                responsable={responsable}
            />
        </Grid>
    );
}

export default UpdateProyectos;
