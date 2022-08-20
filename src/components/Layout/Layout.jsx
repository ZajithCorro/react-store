import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<main className={styles.main}>
			<Header />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
