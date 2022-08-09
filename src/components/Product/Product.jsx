import styles from './Product.module.css';

const Product = ({ product }) => {
	return (
		<div className={styles.productsItem}>
			<img src={product.image} alt={product.title} />
			<div className={styles.productsItemInfo}>
				<h2>
					{product.title}
					<span>$ {product.price}</span>
				</h2>
				<p>{product.description}</p>
			</div>
			<button type="button">Comprar</button>
		</div>
	);
};

export default Product;
