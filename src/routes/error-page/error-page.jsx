import { useRouteError } from "react-router-dom";
import './errror-page.scss'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops 😢 !</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="error-message">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}