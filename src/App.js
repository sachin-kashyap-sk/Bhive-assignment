import { Box } from "@mui/material";
import MiddleSection from "./component/middleSection/MiddleSection";
import Header from "./component/topSection/Header";
import Bottom from "./component/bottomSection/Bottom";

function App() {
  return (
    <Box>
      <Header />
      <MiddleSection />
      <Bottom />
    </Box>
  );
}

export default App;
