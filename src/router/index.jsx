import { Route, Routes } from "react-router-dom";
import AccountsPage from "../pages/accounts";
import LayoutPage from "../pages/layout";

const ReactRouterComponent = () => (
  <Routes>
    <Route path="/" element={<LayoutPage />}>
      <Route index element={<AccountsPage />} />
    </Route>
  </Routes>
);

export default ReactRouterComponent;
