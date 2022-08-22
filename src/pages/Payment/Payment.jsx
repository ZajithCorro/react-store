import styles from './Payment.module.scss';

const Payment = () => {
	return (
		<div className={styles.payment}>
			<div className="Payment-content">
				<h3>Resument del pedido:</h3>

				<div className="Payment-button">
					<button>Pay</button>
				</div>
			</div>
			<div />
		</div>
	);
};

export default Payment;
