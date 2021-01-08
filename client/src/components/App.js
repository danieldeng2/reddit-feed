import './App.css';
import Container from 'react-bootstrap/Container';

import MyNavBar from './MyNavBar';
import ErrorAlert from './ErrorAlert';
import ArticleList from './ArticleList';


function App() {
	return (
		<>
			<MyNavBar />
			<Container className="p-3">
				<ErrorAlert />
				<ArticleList />
			</Container>
		</>
	);
}

export default App;
