import { createSlice } from "@reduxjs/toolkit";

export const policySlice = createSlice({
 name: "policy",
 initialState: {
  counter: 14300,
  payment: 20,
  coverageTires: false,
  coverageRedLight: false,
  coverageRoad: false,
 },
 reducers: {
  increment: (state) => {
   state.counter += 100;
  },
  decrement: (state) => {
   state.counter -= 100;
  },
  incrementCoverageTires: (state) => {
   state.coverageTires = true;
   state.payment += 15;
  },
  incrementCoverageRedLight: (state) => {
   state.coverageRedLight = true;
   state.payment += 20;
  },
  incrementCoverageRoad: (state) => {
   state.coverageRoad = true;
   state.payment += 50;
  },
  decrementCoverageTires: (state) => {
   state.coverageTires = false;
   state.payment -= 15;
  },
  decrementCoverageRedLight: (state) => {
   state.coverageRedLight = false;
   state.payment -= 20;
  },
  decrementCoverageRoad: (state) => {
   state.coverageRoad = false;
   state.payment -= 50;
  },
 },
});

export const {
 increment,
 decrement,
 incrementCoverageTires,
 incrementCoverageRedLight,
 incrementCoverageRoad,
 decrementCoverageTires,
 decrementCoverageRedLight,
 decrementCoverageRoad,
} = policySlice.actions;
