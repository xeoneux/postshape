import { Appear, Box } from "postshape";
import { Menu } from "./menu/menu";
// import Message from './Message';

const DesktopApp = ({ children }) => {
  return (
    <Box flex="vertical" grow>
      {/* <Message /> */}

      <Box flex="horizontal" grow>
        <Appear
          animation="FadeSlideRight"
          backgroundColor="background-shade-1"
          maxWidth="300px"
          borderColor="background-shade-3"
          borderSize="x2"
          borderRight
          maxHeight="100vh"
          overflow="auto"
          style={{ position: "sticky", top: "0" }}
        >
          <Menu />
        </Appear>

        {children}
      </Box>
    </Box>
  );
};

export default DesktopApp;
