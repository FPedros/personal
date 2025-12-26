import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import "./index.css";

function Router() {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handler = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const path = hash.replace(/^#/, "");

  if (path.startsWith("/orcamento1")) {
    return <Proposal />;
  }

  return <Home />;
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
