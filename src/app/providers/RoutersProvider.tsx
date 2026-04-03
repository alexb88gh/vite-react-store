import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes";

export const RoutersProvider = () => {
  return <RouterProvider router={router} />;
};
