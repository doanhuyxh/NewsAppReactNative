import {Provider} from "react-redux"
import Navigation from './Config/Navigation'
import {store} from "./Config/configureStore";

export default function App() {
    return (
        <Provider store={store}>
            <Navigation/>
        </Provider>
    );
}
