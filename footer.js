  function handleContextMenu(event) {
    safari.self.tab.setContextMenuEventUserInfo(event, event.target.nodeName === "IMG" ? {"src": event.target.src} : null);
  }
  document.addEventListener("contextmenu", handleContextMenu, false);
