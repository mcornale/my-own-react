const ReactDOM = {
  root: {
    domNode: null,
    app: null,
    render: function (app) {
      if (!this.app) this.app = app;
      const appContent = this.app();
      this.domNode.innerHTML = '';
      this.domNode.appendChild(appContent);
    },
  },
  createRoot: function (domNode) {
    this.root.domNode = domNode;
    return this.root;
  },
};

export default ReactDOM;
