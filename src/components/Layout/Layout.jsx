import Header from '../Header';
import Footer from '../Footer';

import styles from './Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div className={styles.main}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
