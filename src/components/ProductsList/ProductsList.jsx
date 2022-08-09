import Product from '../Product';
import styles from './ProductsList.module.css';

const ProductsList = ({ products }) => {
	return (
		<div className="Products">
			<div className={styles.productItems}>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductsList;
