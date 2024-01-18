import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import { store } from "./global/store";
import { Provider } from "react-redux";
import { Router } from "./router/Router";

let persistor = persistStore(store);

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
