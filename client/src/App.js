import { Route, Router, Switch } from "react-router-dom";
import history from "./history";

import Header from "./components/Header";
import StreamDelete from "./components/Streams/StreamDelete/StreamDelete,component";
import StreamCreate from "./components/Streams/StreamCreate/StreamCreate.Component";
import StreamEdit from "./components/Streams/StreamEdit/StreamEdit.component";
import StreamList from "./components/Streams/StreamList/StreamList.component";
import StreamShow from "./components/Streams/StreamShow/StreamShow.component";

function App() {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
          <Route path="/streams/:id" exact component={StreamShow} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
