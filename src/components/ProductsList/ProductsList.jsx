import Product from '../Product';
import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
	return (
		<div className={styles.products}>
			{products.map((product) => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsList;
