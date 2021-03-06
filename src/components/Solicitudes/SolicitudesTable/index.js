import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const SolicitudesTable = ({ solicitudes }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Código</TableCell>
						<TableCell align="right">Descripcion</TableCell>
						<TableCell align="right">Resumen</TableCell>
						<TableCell align="right">Nombre Empleado</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{solicitudes.map((solicitud) => (
						<TableRow key={solicitud.id}>
							<TableCell component="th" scope="row">
								{solicitud.codigo}
							</TableCell>
							<TableCell align="right">{solicitud.descripcion}</TableCell>
							<TableCell align="right">{solicitud.resumen}</TableCell>
							<TableCell align="right">{solicitud.empleado.nombre}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default SolicitudesTable;
