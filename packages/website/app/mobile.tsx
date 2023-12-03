"use client";

import { MenuIcon } from "lucide-react";
import { Box, Modal } from "postshape";
import { useState } from "react";
// import { Menu } from '../Menu/Menu';
// import Message from './Message';

const MobileApp = ({ children }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <Box flex="vertical" grow>
      {/* <Message /> */}

      <Box
        alignChildren="middle"
        backgroundColor="black"
        flex="horizontal"
        onClick={() => setMenuVisible(true)}
        padding="x4"
        style={{ position: "sticky", top: 0 }}
        zIndex={10}
        textColor="light-shade-1"
      >
        <MenuIcon size="2rem" />
      </Box>

      <Modal borderRadius="x0" fullscreen visible={menuVisible} zIndex={11}>
        {/* <Menu onSelect={() => setMenuVisible(false)} /> */}
      </Modal>

      <Box flex="horizontal" grow>
        {children}
      </Box>
    </Box>
  );
};

export default MobileApp;
