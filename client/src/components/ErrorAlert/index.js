import Alert from 'react-bootstrap/Alert';

function ErrorAlert() {
	return (
		<Alert key={1} variant={'danger'}>
			Error 404.
		</Alert>
	);
}

export default ErrorAlert;
