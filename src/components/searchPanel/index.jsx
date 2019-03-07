import React from 'react';
import SearchForm from '../SearchForm';
import FindOutMore from '../FindOutMore';
import './SearchPanel.less';

const SearchPanel = () => (
  <div className="content_form">
    <SearchForm />
    <FindOutMore />
  </div>
);

export default SearchPanel;
