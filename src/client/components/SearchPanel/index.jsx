import React from 'react';
import SearchForm from '../SearchForm';
import FindOutMore from '../FindOutMore';
import './searchPanel.less';

const SearchPanel = () => (
  <div className="content_form">
    <SearchForm />
    <FindOutMore />
  </div>
);

export default SearchPanel;
