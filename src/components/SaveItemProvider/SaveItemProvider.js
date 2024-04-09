import React from "react";

const SaveItemContext = React.createContext();

function SaveItemProvider() {
  return <SaveItemContext.Provider></SaveItemContext.Provider>;
}

export default SaveItemProvider;
