// redux.provider.tsx
import  {type ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "~/redux/store";

interface ReduxProviderProps {
  children: ReactNode;
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
  // Only wrap with PersistGate if persistor exists (browser)
  if (persistor) {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }

  // Server-side or SSR fallback (no PersistGate)
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
