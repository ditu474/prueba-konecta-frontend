import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const EmpleadosTable = ({ empleados }) => {
	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Nombre</TableCell>
						<TableCell align="right">Salario</TableCell>
						<TableCell align="right">Fecha de ingreso</TableCell>
						<TableCell align="right">ID</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{empleados.map((empleado) => (
						<TableRow key={empleado.id}>
							<TableCell component="th" scope="row">
								{empleado.nombre}
							</TableCell>
							<TableCell align="right">{empleado.salario}</TableCell>
							<TableCell align="right">{empleado.fechaIngreso}</TableCell>
							<TableCell align="right">{empleado.id}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default EmpleadosTable;
