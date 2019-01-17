import React, { Component } from 'react';
import { Container, Root } from 'native-base';
import BadgeFooterTabs from './source/scenes/global_components/BadgeFooterTab'
import RecentChat from './source/scenes/recent_chat_creen/RecentChat'

export default class AppAndroid extends Component {
  render() {
    return (
      <Root>
        <Container>
          <RecentChat></RecentChat>
          <BadgeFooterTabs></BadgeFooterTabs>
        </Container>
      </Root>
    );
  }
}
