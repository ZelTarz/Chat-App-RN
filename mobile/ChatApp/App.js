import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import BadgeFooterTabs from './source/scenes/global_components/BadgeFooterTab'
import RecentChat from './source/scenes/recent_chat_creen/RecentChat'

export default class AppAndroid extends Component {
  render() {
    return (
      <Container>
        <RecentChat></RecentChat>
        <BadgeFooterTabs></BadgeFooterTabs>
      </Container>
    );
  }
}
