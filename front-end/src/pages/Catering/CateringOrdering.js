import React from "react";
import CateringForm from "./CateringForm";
import CateringMenu from "./CateringMenu";

export default function CateringOrdering() {
  
  return (
    <div className="catering-block">
      <CateringForm />
      <CateringMenu />
    </div>
  );
}
