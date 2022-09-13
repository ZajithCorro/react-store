import { Link } from 'react-router-dom';

import bags from 'Images/bags.png';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.headerNav}>
				<div className={styles.headerTitle}>
					<img src={bags} alt="Logo ecommerce" />
					<h1>
						<Link to="/">My store</Link>
					</h1>
				</div>
				<div className={styles.headerCheckout}>
					<Link to="/checkout" title="Basket">
						<i className="fas fa-shopping-basket" />
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
