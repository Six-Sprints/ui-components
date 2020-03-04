import { useState } from "react";
import { createContainer } from "unstated-next";

function useSidebar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => setOpenSidebar(true);

  const handleSidebarClose = () => setOpenSidebar(false);

  return { openSidebar, handleSidebarOpen, handleSidebarClose };
}
export const SidebarContext = createContainer(useSidebar);
