import React, { useState, useEffect } from "react";

const regions = ["sev", "bla"];

export const useOrder = (country: string) => {
  const [order, setOrder] = useState("");
  const [parsedOrder, setParsedOrder] = useState();

  useEffect(() => {
    const parts = order.split(" ");
    let tmp;
    if (order.includes("hold")) {
      tmp = { [country]: [parts[0], "hold"] };
    }
    if (order.includes("move")) {
      tmp = { [country]: [parts[0], "move", parts[2]] };
    }
    setParsedOrder(tmp);
  }, [order]);

  return {
    order,
    setOrder,
    parsedOrder
  };
};

export const useGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [gameData, setGameData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response: any = await fetch(
          "http://godip-adjudication.appspot.com/Classical"
        );
        const data = await response.json();

        setGameData(data);
      } catch (e) {
        throw e;
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return {
    isLoading,
    gameData
  };
};

export const OrdersView = () => {
  const { gameData, isLoading } = useGame();
  const { order, setOrder, parsedOrder } = useOrder("Russia");
  const handleSetOrder = (e: React.FormEvent<HTMLInputElement>) => {
    setOrder(e.currentTarget.value);
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <input type="text" value={order} onChange={handleSetOrder} />
      <pre>{JSON.stringify(parsedOrder, null, 2)}</pre>
    </div>
  );
};

export default OrdersView;
