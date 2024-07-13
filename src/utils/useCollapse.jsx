// Fonction hook perso pour le repli et dépliement du collapse
import { useState } from "react";

function useCollapse(initialState = true) {
  const [isCollapsed, setIsCollapsed] = useState(initialState);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return [isCollapsed, toggleCollapse];
}

export default useCollapse;
