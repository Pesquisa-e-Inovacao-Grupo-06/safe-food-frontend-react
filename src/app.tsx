import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import FAQ from './pages/faq';
import Profile from './pages/profile-consumer';
import TermOfService from './pages/term-of-service';
import ProfileEstablishment from './pages/profile-establishment';
import HomeEstablishment from './pages/home-establishment';
import HomeConsumer from './pages/home-consumer';
import { SafeFoodUserGateway } from './app/infra/gateway/safefood/SafeFoodUserGateway';
import { SafeFoodRestrictionGateway } from './app/infra/gateway/safefood/SafeFoodRestrictionGateway';
import { Cache } from './app/domain/protocols/Cache';
import { InputsValidatorProvider } from './app/contexts/InputValidatorsProvider';
import { ViaCepGateway } from './app/infra/gateway/viacep/ViaCepGateway';
import { AuthRoute } from './pages/auth/AuthRoute';
import { AuthProvider } from './app/contexts/AuthProvider';
import { SafeFoodConsumerGateway } from './app/infra/gateway/safefood/SafeFoodConsumerGateway';
import { SafeFoodEstablishmentGateway } from './app/infra/gateway/safefood/SafeFoodEstablishmentGateway';
import NotFound from './pages/not-found';
import PreferencesEstablishment from './pages/preferences-establishment';
import { ModalHomeProvider } from './app/contexts/ModalProvider';
import { SafeFoodProductGateway } from './app/infra/gateway/safefood/SafeFoodProductGateway';
import ProductConsumer from './pages/product-consumer';
import ForgetPassWord from './pages/forget-password';
import { FindAddress } from './app/domain/usecases/FindAddress';
import { CepValidator } from './app/util/validations/cep-validator';
import { SafeFoodTypeProductGateway } from './app/infra/gateway/safefood/SafeFoodTypeProductGateway';
import MapsPage from './pages/maps';
import ProductsEstablishment from './pages/product-establishment';
import { About } from './pages/about';
import { GetLatLongFromAddress } from './app/domain/usecases/GetLatLongFromAddress';
import { PhoneValidator } from './app/util/validations/phone-validator';
import { CnpjValidator } from './app/util/validations/cnpj-validator';

type AppProps = {
	cache: Cache;
	userGateway: SafeFoodUserGateway;
	consumerGateway: SafeFoodConsumerGateway;
	restrictionsGateway: SafeFoodRestrictionGateway;
	viaCepGateway: ViaCepGateway;
	establishmentGateway: SafeFoodEstablishmentGateway;
	productGateway: SafeFoodProductGateway;
	findAddressUsecase: FindAddress;
	typeProductGateway: SafeFoodTypeProductGateway;
	getLatLongFromAddress: GetLatLongFromAddress;
};
export default function App({
	cache,
	consumerGateway,
	restrictionsGateway,
	userGateway,
	viaCepGateway,
	establishmentGateway,
	productGateway,
	findAddressUsecase,
	typeProductGateway,
	getLatLongFromAddress,
}: AppProps) {
	return (
		<>
			<InputsValidatorProvider>
				<AuthProvider cache={cache}>
					<Router>
						<Routes>
							<Route
								path="/"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<Home
											viaCepGateway={viaCepGateway}
											cache={cache}
											gateway={userGateway}
											consumerGateway={consumerGateway}
											establishmentGateway={establishmentGateway}
											productGateway={productGateway}
										/>
									</ModalHomeProvider>
								}
							/>

							<Route
								path="/faq"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<FAQ />
									</ModalHomeProvider>
								}
							/>
							<Route
								path="/profile"
								element={
									<AuthRoute userAuth="CONSUMIDOR">
										<Profile
											cache={cache}
											consumerGateway={consumerGateway}
											cepValidator={new CepValidator()}
											findAddressUsecase={findAddressUsecase}
										/>
									</AuthRoute>
								}
							/>
							<Route
								path="/profile-establishment"
								element={
									<AuthRoute userAuth="ESTABELECIMENTO">
										<ProfileEstablishment
											cepValidator={new CepValidator()}
											cnpjValidator={new CnpjValidator()}
											phoneValidator={new PhoneValidator()}
											findAddressUsecase={findAddressUsecase}
											cache={cache}
											establishmentGateway={establishmentGateway}
										/>
									</AuthRoute>
								}
							/>
							<Route
								path="/term-of-service"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<TermOfService />
									</ModalHomeProvider>
								}
							/>
							<Route
								path="/home-establishment"
								element={
									<HomeEstablishment
										cache={cache}
										productGateway={productGateway}
										typeProductGateway={typeProductGateway}
										gateway={productGateway}
									/>
								}
							/>
							<Route
								path="/product-consumer/:id"
								element={
									<ProductConsumer
										getLatLongFromAddress={getLatLongFromAddress}
										cache={cache}
										productGateway={productGateway}
									/>
								}
							/>
							<Route
								path="/preferences-establishment"
								element={<PreferencesEstablishment cache={cache} />}
							/>
							<Route
								path="/home-consumer/estabelecimento/:idEstablishment/:idProduct?"
								element={
									<HomeConsumer
										cache={cache}
										productGateway={productGateway}
										typeProductGateway={typeProductGateway}
									/>
								}
							/>
							<Route
								path="/home-consumer/:cep/:numero?"
								element={
									<HomeConsumer
										cache={cache}
										productGateway={productGateway}
										typeProductGateway={typeProductGateway}
									/>
								}
							/>
							<Route
								path="/home-consumer"
								element={
									<HomeConsumer
										cache={cache}
										productGateway={productGateway}
										typeProductGateway={typeProductGateway}
									/>
								}
							/>
							<Route
								path="/change-password"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<ForgetPassWord userGateway={userGateway} />
									</ModalHomeProvider>
								}
							/>

							<Route
								path="home-establishment/:idEstablishment/products/:idProduct"
								element={
									<ProductsEstablishment
										cache={cache}
										productGateway={productGateway}
										getLatLongFromAddress={getLatLongFromAddress}
									/>
								}
							/>
							<Route
								path="/*"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<NotFound />
									</ModalHomeProvider>
								}
							/>
							<Route
								path="/about"
								element={
									<ModalHomeProvider
										viaCepGateway={viaCepGateway}
										cache={cache}
										gateway={userGateway}
										consumerGateway={consumerGateway}
										establishmentGateway={establishmentGateway}
										productGateway={productGateway}
									>
										<About />
									</ModalHomeProvider>
								}
							/>
						</Routes>
					</Router>
				</AuthProvider>
			</InputsValidatorProvider>
		</>
	);
}
