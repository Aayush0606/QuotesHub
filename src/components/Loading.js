import React from "react";
import loading from "./loading.gif";

export default function Loading() {
  return (
    <div className="conatiner my-2 text-center">
      <img src={loading} alt="loading" />
    </div>
  );
}
