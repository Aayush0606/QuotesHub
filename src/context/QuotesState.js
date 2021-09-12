import { useState } from "react";
import QuotesContext from "./QuotesContext";

const QuotesState = (props) => {
  const dummyData = [
    {
      _id: "613e16b7a9762cb3d000b5d7",
      user: "613e1646a9762cb3d000b5cf",
      anime: "Akame ga KILL!",
      quote:
        "The reason doesn't matter. As long as tiny bit of hope exists, that's all that matters.",
      character: "Tatsumi",
      __v: 0,
    },
    {
      _id: "613e1707a9762cb3d000b5db",
      user: "613e1646a9762cb3d000b5cf",
      anime: "The World God Only Knows",
      quote:
        "These girls are pixels. Data. I know that. So how would you describe the girl you like? Protein? Calcium? A pointless argument. What’s important is that there’s love. Isn’t that what you people always say?",
      character: "Keima Katsuragi",
      __v: 0,
    },
  ];
  const [Quotes, setQuotes] = useState(dummyData);
  return (
    <QuotesContext.Provider value={{ Quotes, setQuotes }}>
      {props.children}
    </QuotesContext.Provider>
  );
};

export default QuotesState;
