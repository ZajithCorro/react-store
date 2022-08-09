import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.headerTitle}>
				<Link to="/">PlatziConf Merch</Link>
			</h1>
			<div className={styles.headerCheckout}>
				<Link to="/checkout">
					<i className="fas fa-shopping-basket" />
				</Link>
			</div>
		</header>
	);
};

export default Header;
