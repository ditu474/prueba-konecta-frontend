import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import validator from 'validator';

const initialValues = {
	description: '',
	resume: '',
	idEmpleado: '',
};

const validateForm = ({ description, resume, idEmpleado }) => {
	const errors = {};
	if (!description) {
		errors.description = 'Debes ingresar una descripcion';
	} else if (!validator.isAlpha(description, 'es-ES', { ignore: ' -' })) {
		errors.description = 'Sólo ingrese letras';
	} else if (description.length < 3 || description.length > 50) {
		errors.description = 'Máximo 50 caracteres y minimo 3';
	}

	if (!resume) {
		errors.resume = 'Debes ingresar un resumen';
	} else if (!validator.isAlpha(resume, 'es-ES', { ignore: ' -' })) {
		errors.resume = 'Sólo ingrese letras';
	} else if (resume.length < 3 || resume.length > 50) {
		errors.resume = 'Máximo 50 caracteres y minimo 3';
	}

	if (!idEmpleado) {
		errors.idEmpleado = 'Debes ingresar una id';
	} else if (!validator.isInt(idEmpleado)) {
		errors.idEmpleado = 'Debe ser un numero entero';
	}

	return errors;
};

const useStyles = makeStyles((theme) => ({
	form: {
		width: '100%',
		marginBottom: theme.spacing(2),
	},
	input: {
		marginBottom: theme.spacing(1),
	},
}));

const SolicitudesForm = ({ onAddSolicitud }) => {
	const classes = useStyles();

	const submitHandler = (values, { setSubmitting, resetForm }) => {
		onAddSolicitud(values);
		setSubmitting(false);
		resetForm(initialValues);
	};

	return (
		<Formik
			initialValues={initialValues}
			validate={validateForm}
			onSubmit={submitHandler}
		>
			{({
				values,
				handleChange,
				handleBlur,
				handleSubmit,
				errors,
				touched,
				isSubmitting,
			}) => (
				<form onSubmit={handleSubmit} autoComplete="off">
					<TextField
						variant="outlined"
						placeholder="Descripcion"
						type="text"
						name="description"
						id="description"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.description}
						error={!!errors.description && touched.description}
						helperText={
							!!errors.description && touched.description && errors.description
						}
						className={classes.input}
					/>
					<TextField
						variant="outlined"
						placeholder="Resumen"
						type="text"
						name="resume"
						id="resume"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.resume}
						error={!!errors.resume && touched.resume}
						helperText={!!errors.resume && touched.resume && errors.resume}
						className={classes.input}
					/>
					<TextField
						variant="outlined"
						placeholder="ID del empleado"
						type="text"
						name="idEmpleado"
						id="idEmpleado"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.idEmpleado}
						error={!!errors.idEmpleado && touched.idEmpleado}
						helperText={
							!!errors.idEmpleado && touched.idEmpleado && errors.idEmpleado
						}
						className={classes.input}
					/>
					<Button
						variant="contained"
						color="primary"
						disabled={isSubmitting}
						type="submit"
					>
						Crear Empleado
					</Button>
				</form>
			)}
		</Formik>
	);
};

export default SolicitudesForm;
