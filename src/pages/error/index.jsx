import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <Link
        to={"/"}
        className="text-[1.5rem] p-[0.6rem] bg-blue-700 text-white inline-block m-3"
      >
        ← Back to home
      </Link>

      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-[14rem] text-blue-600 font-bold mb-4">404</h1>
        <p className="text-[5rem] text-gray-800">Page not found</p>
      </div>
    </>
  );
};
export default ErrorPage;
