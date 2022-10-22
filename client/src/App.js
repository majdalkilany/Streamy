import { Route, BrowserRouter, Link } from "react-router-dom";

import Header from "./components/Header";
import StreamDelete from "./components/Streams/StreamDelete/StreamDelete,component";
import StreamCreate from "./components/Streams/StreamCreate/StreamCreate.Component";
import StreamEdit from "./components/Streams/StreamEdit/StreamEdit.component";
import StreamList from "./components/Streams/StreamList/StreamList.component";
import StreamShow from "./components/Streams/StreamShow/StreamShow.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/edit" exact component={StreamEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
