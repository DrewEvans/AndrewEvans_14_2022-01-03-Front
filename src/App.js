import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import useFetch from "./hooks/useFetch";
import MaterialNav from "./components/MaterialNav";

const NewEmployee = lazy(() => import("./pages/NewEmployee"));
const EmployeeTable = lazy(() => import("./pages/EmployeeTable"));

const App = () => {
  const { data, loading } = useFetch("http://localhost:5000/api/employees");
  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route path='/' element={<NewEmployee />} />
          <>
            {data && (
              <Route
                path='/employee-table'
                element={<EmployeeTable data={data} />}
              />
            )}
          </>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
