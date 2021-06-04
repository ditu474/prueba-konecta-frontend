import Empleados from 'components/Empleados';
import Solicitudes from 'components/Solicitudes';

const App = () => {
	return (
		<div className="container" style={{ margin: '2rem auto' }}>
			<h2>Empleados</h2>
			<Empleados />
			<h2>Solicitudes</h2>
			<Solicitudes />
		</div>
	);
};

export default App;
