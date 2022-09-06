import { useEffect, useState } from 'react';

import ProductsList from '../components/ProductsList';

const Home = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		async function getData() {
			const resp = await fetch(
				'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'
			);
			const list = await resp.json();

			setProducts(list);
		}

		getData();
	}, []);

	return <ProductsList products={products} />;
};

export default Home;
