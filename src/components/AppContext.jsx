import React, { useState, createContext } from "react";

export const AppContext = createContext({
  notes: [],
  togglestartNote: () => {},
  deleteNote: () => {},
});
