import React, { Component } from "react";
import { Menu, Header, Item, Image } from "semantic-ui-react";

import DotLogo from "../../resources/dotlogo.png";

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header-bar">
        <Menu className="teacher-background" inverted>
          <Item>
            <Image size="mini" src={DotLogo} />
          </Item>
          <Item>
            <Header>Dot Collector</Header>
          </Item>
        </Menu>
      </div>
    );
  }
}
