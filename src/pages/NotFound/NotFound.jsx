import Error from "../../components/Error/Error.jsx";

const NotFound = () => {
  document.title = "Kasa - Page introuvable";
  return (
    <>
      <main>
        <Error />
      </main>
    </>
  );
};

export default NotFound;
