import React from 'react';
import SearchForm from '../searchForm';
import FindOutMore from '../findOutMore';
import './searchPanel.less';

const SearchPanel = () => (
  <div className="content_form">
    <SearchForm />
    <FindOutMore />
  </div>
);

export default SearchPanel;
