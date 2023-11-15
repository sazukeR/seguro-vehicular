import { useDispatch, useSelector } from "react-redux";
import {
 decrement,
 decrementCoverageRedLight,
 increment,
 incrementCoverageRedLight,
} from "../store/policy/policySlice";

export const useCounterStore = () => {
 const dispatch = useDispatch();
 const { counter, payment } = useSelector((state) => state.policy);

 const incrementCounter = () => {
  if (counter >= 16500) return;

  dispatch(increment());
  if (counter === 16000) {
   if (payment === 20) return;
   dispatch(decrementCoverageRedLight());
  }
 };

 const decrementtCounter = () => {
  if (counter <= 12500) return;

  dispatch(decrement());
  if (counter === 16100) dispatch(incrementCoverageRedLight());
 };

 return {
  // props
  counter,
  // methods
  incrementCounter,
  decrementtCounter,
 };
};
