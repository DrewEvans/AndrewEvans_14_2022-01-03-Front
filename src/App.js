import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import useFetch from "./hooks/useFetch";

const NewEmployee = lazy(() => import("./pages/NewEmployee"));
const EmployeeTable = lazy(() => import("./pages/EmployeeTable"));

const App = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://wealth-health.herokuapp.com/api/employees"
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<div>...loading</div>}>
        <Routes>
          <Route exact path='/' element={<NewEmployee refetch={refetch} />} />
          {data && (
            <Route
              path='/employee-table'
              element={<EmployeeTable data={data} />}
            />
          )}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
