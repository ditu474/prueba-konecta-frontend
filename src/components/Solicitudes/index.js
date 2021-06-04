import useHttp from 'hooks/use-http';
import React from 'react';
import { createSolicitud, getAllSolicitudes } from 'services/javaAPI';
import SolicitudesForm from './SolicitudesForm';
import SolicitudesTable from './SolicitudesTable';

const Solicitudes = () => {
	const { response, loading, error, sendRequest } = useHttp(getAllSolicitudes);
	const [createError, setCreateError] = React.useState(null);

	React.useEffect(() => {
		sendRequest();
		//eslint-disable-next-line
	}, []);

	const addSolicitudHandler = (solicitud) => {
		setCreateError(null);
		createSolicitud(
			{
				descripcion: solicitud.description,
				resumen: solicitud.resume,
			},
			solicitud.idEmpleado
		)
			.then(() => {
				sendRequest();
			})
			.catch((err) => {
				setCreateError(err.message);
			});
	};

	return (
		<div>
			<SolicitudesForm onAddSolicitud={addSolicitudHandler} />
			{loading && <span>Cargando Solicitudes...</span>}
			{(!!error || !!createError) && <span>Error: {error || createError}</span>}
			{!!response && response.length > 0 && (
				<SolicitudesTable solicitudes={response} />
			)}
		</div>
	);
};

export default Solicitudes;
