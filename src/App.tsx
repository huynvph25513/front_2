import { useState } from "react";
import "./App.css";
import { ICar } from "./components/interfaces/car";
import { Button } from "./components";

function App() {
  const [cars, setCars] = useState<ICar[]>();
  const [isLoading, SetIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null>(null)
  const addCar = (car: ICar) => { }
  const removeCar = (id: number | string) => { };
  const listCar = () => { };

  return (
    <>
      <Button loading={isLoading} primary text="Them" />
      <Button danger text="Xoa" />
    </>
  )
}