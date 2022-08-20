import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
// import Information from '../containers/Information';
// import Payment from '../containers/Payment';
// import Success from '../containers/Success';
// import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route exact path="/checkout" element={<Checkout />} />

					{/* <Route exact path="/checkout" component={Checkout} />
					<Route exact path="/checkout/information" component={Information} />
					<Route exact path="/checkout/payment" component={Payment} />
					<Route exact path="/checkout/success" component={Success} />
					<Route component={NotFound} /> */}
				</Routes>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
