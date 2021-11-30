import ProjectPage from "./pages/projects";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import addqueryForm from "./Screens/AddQuery/addqueryForm";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={ProjectPage} />
      <Route exact path={"/addqueryForm"} component={addqueryForm} />
    </BrowserRouter>
  );
}

export default App;
