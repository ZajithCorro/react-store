import ProductsList from '../components/ProductsList';
import data from '../data';

const Home = () => {
	return <ProductsList products={data.products} />;
};

export default Home;
