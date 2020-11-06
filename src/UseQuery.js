import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";



export function useQuery() {
  return new URLSearchParams(useLocation().search);
}