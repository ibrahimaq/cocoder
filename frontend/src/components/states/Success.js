import { useEffect } from "react";
import { usePostContext } from "../../context/PostContext";

const Success = () => {
  const { success, dispatch } = usePostContext();

  useEffect(() => {
//    setTimeout(() => {
//       dispatch({ type: "SUCCESS", payload: null });
//     }, 1500);

    return dispatch({ type: "SUCCESS", payload: null });
  }, []);

  return (
    <>
      {success && (
        <p className="fixed top-10 left-1/2 animate-alert -translate-x-1/2 z-50 bg-emerald-300 p-3 px-8 shadow-lg rounded-md">
          {success}
        </p>
      )}
    </>
  );
};

export default Success;
