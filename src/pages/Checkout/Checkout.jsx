import { Link } from 'react-router-dom';
import styles from './Checkout.module.css';

const Checkout = () => {
	return (
		<div className={styles.checkout}>
			<div className="checkout-content">
				<h3>Sin pedidos...</h3>
			</div>

			<div className="checkout-sidebar">
				<h3>{`Precio Total: $`}</h3>
				<Link to="/checkout/information">
					<button type="button" className={styles.checkoutSidebarButton}>
						Continuar pedido
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Checkout;
