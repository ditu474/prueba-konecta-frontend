import useHttp from 'hooks/use-http';
import React from 'react';
import { createEmpleado, getAllEmpleados } from 'services/javaAPI';
import EmpleadosForm from './EmpleadosForm';
import EmpleadosTable from './EmpleadosTable';

const Empleados = () => {
	const { response, loading, error, sendRequest } = useHttp(getAllEmpleados);

	React.useEffect(() => {
		sendRequest();
		//eslint-disable-next-line
	}, []);

	const addEmpleadoHandler = (empleado) => {
		createEmpleado({
			nombre: empleado.name,
			salario: Number(empleado.salary),
		}).then(() => {
			sendRequest();
		});
	};

	return (
		<div>
			<EmpleadosForm onAddEmpleado={addEmpleadoHandler} />
			{loading && <span>Cargando Empleados...</span>}
			{!!error && <span>Error: {error}</span>}
			{!!response && response.length > 0 && (
				<EmpleadosTable empleados={response} />
			)}
		</div>
	);
};

export default Empleados;
