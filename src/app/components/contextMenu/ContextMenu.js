import React, { Component } from "react";
import "./contextMenu.css";

export class ContextMenu extends Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    document.addEventListener("contextmenu", this._handleContextMenu);
    document.addEventListener("click", this._handleClick);
    document.addEventListener("scroll", this._handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener("contextmenu", this._handleContextMenu);
    document.removeEventListener("click", this._handleClick);
    document.removeEventListener("scroll", this._handleScroll);
  }

  _handleContextMenu = (event) => {
    event.preventDefault(); 
    this.setState({ visible: true });

    const clickX = event.clientX;
    const clickY = event.clientY;
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const rootW = this.root.offsetWidth;
    const rootH = this.root.offsetHeight;

    const right = screenW - clickX > rootW;
    const left = !right;
    const top = screenH - clickY > rootH;
    const bottom = !top;

    if (right) {
      this.root.style.left = `${clickX}px`;
    }

    if (left) {
      this.root.style.left = `${clickX - rootW}px`;
    }

    if (top) {
      this.root.style.top = `${clickY}px`;
    }

    if (bottom) {
      this.root.style.top = `${clickY - rootH}px`;
    }
  };

  _handleClick = (event) => {
    const { visible } = this.state;
    const wasOutside = !(event.target.contains === this.root);

    if (wasOutside && visible) this.setState({ visible: false });
  };

  _handleScroll = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;

    return (
      (visible || null) && (
        <div
          ref={(ref) => {
            this.root = ref;
          }}
          className="contextMenu"
        >
          <div className="contextMenu--option">Share this</div>
          <div className="contextMenu--option">New window</div>
          <div className="contextMenu--option">Visit official site</div>
          <div className="contextMenu--option">Settings</div>
          <div className="contextMenu--option">Download</div>
        </div>
      )
    );
  }
}

export default ContextMenu;
