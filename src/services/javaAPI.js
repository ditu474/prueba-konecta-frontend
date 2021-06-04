const BASE_URL = 'http://localhost:4000/api/v1';

export const createEmpleado = async (empleado) => {
	const url = `${BASE_URL}/empleados`;
	return fetch(url, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(empleado),
	})
		.then((res) => {
			if (res.ok) return res.json();
			throw new Error('Error al crear empleado');
		})
		.catch((err) => {
			console.error(err);
		});
};

export const getAllEmpleados = async () => {
	const url = `${BASE_URL}/empleados`;
	return fetch(url)
		.then((res) => {
			if (res.ok) return res.json();
			throw new Error('Error al obtener todos los empleados');
		})
		.catch((err) => {
			console.error(err);
		});
};

export const getAllSolicitudes = async () => {
	const url = `${BASE_URL}/solicitudes`;
	return fetch(url)
		.then((res) => {
			if (res.ok) return res.json();
			throw new Error('Error al obtener todas las solicitudes');
		})
		.catch((err) => {
			console.error(err);
		});
};

export const createSolicitud = async (solicitud, idEmpleado) => {
	const url = `${BASE_URL}/solicitudes?idEmpleado=${idEmpleado}`;
	return fetch(url, {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(solicitud),
	})
		.then((res) => {
			return res.json();
		})
		.then((body) => {
			if (!!body.error) {
				throw Error(body.error);
			} else {
				return body;
			}
		});
};
