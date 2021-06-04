import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import validator from 'validator';

const initialValues = {
	name: '',
	salary: '',
};

const validateForm = ({ name, salary }) => {
	const errors = {};
	if (!name) {
		errors.name = 'Debes ingresar un nombre';
	} else if (!validator.isAlpha(name, 'es-ES', { ignore: ' -' })) {
		errors.name = 'Sólo ingrese letras';
	} else if (name.length < 3 || name.length > 50) {
		errors.name = 'Máximo 50 caracteres y minimo 3';
	}

	if (!salary) {
		errors.salary = 'Debes ingresar un salario';
	} else if (!validator.isFloat(salary, { min: 0 })) {
		errors.salary = 'Debe ser un número mayor a cero';
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

const EmpleadosForm = ({ onAddEmpleado }) => {
	const classes = useStyles();

	const submitHandler = (values, { setSubmitting, resetForm }) => {
		onAddEmpleado(values);
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
						placeholder="Nombre de empleado"
						type="text"
						name="name"
						id="name"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.name}
						error={!!errors.name && touched.name}
						helperText={!!errors.name && touched.name && errors.name}
						className={classes.input}
					/>
					<TextField
						variant="outlined"
						placeholder="Salario de empleado"
						type="text"
						name="salary"
						id="salary"
						onChange={handleChange}
						onBlur={handleBlur}
						value={values.salary}
						error={!!errors.salary && touched.salary}
						helperText={!!errors.salary && touched.salary && errors.salary}
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

export default EmpleadosForm;
