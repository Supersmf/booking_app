import React from 'react';
import NavigateBar from '../navigateBar';
import SearchPanel from '../searchPanel';
import Multicard from '../multicard';
import AdvantagesBlock from '../advantagesBlock';
import './content.less';

const Content = () => (
  <>
    <NavigateBar />
    <SearchPanel />
    <Multicard />
    <AdvantagesBlock />
  </>

);

export default Content;
