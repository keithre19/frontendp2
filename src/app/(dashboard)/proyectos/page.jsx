import Grid from '@mui/material/Grid'

// Components Imports
import Table from '@views/proyectos/table'

const proyectos = () => {
    return (
        <Grid container spacing={6}>
            <Grid item xs={12}>
                <h1>Proyectos</h1>
                <Table />
            </Grid>
        </Grid>
    )
}

export default proyectos
