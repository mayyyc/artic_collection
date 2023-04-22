import { Button, Text } from "react-native";
import React from "react";
import { decrement, increment } from "../redux/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Counter = (): React.ReactElement => {
  const value = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <Text>{value}</Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Button title="decrement" onPress={() => dispatch(decrement())} />
    </>
  );
};

export default Counter;
