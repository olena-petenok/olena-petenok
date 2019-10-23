import React from 'react';
import PropTypes from 'prop-types';

import Dialog from './components/Dialog.jsx';
import ItemContainer from './components/ItemContainer.jsx';

import { getItems, addItem, editItem, deleteItem, markItemAsTodoDone, sortItems, searchItems } from './utils/helper.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dialog: false,
      visualList: false,
      itemToEdit: null,
      list: getItems(),
      byDateSelectFilter: "",
    };
  }

  deleteItem = (id) => { this.setState({ list: deleteItem(id), visualList: false, }); }
  markItemAsTodoDone = (id) => { this.setState({ list: markItemAsTodoDone(id), visualList: false, }); }
  editItem = (item) => { this.setState({ dialog: true, itemToEdit: item, }); }

  closeDialog = () => { this.setState({ dialog: false, itemToEdit: null, }); }

  callbackFromDialog = (item) => {
    this.setState({ dialog: false, itemToEdit: null, visualList: false, });
    if (item.id === -1) { this.setState({ list: addItem(item) }); }
    else { this.setState({ list: editItem(item) }); }
  }

  onAddClicked = () => { this.setState({ dialog: true }); }
  onSortClicked = () => { this.setState({ visualList: sortItems(this.state.list) }); }
  onSearchChange = (event) => { this.timeoutSearch(event.target.value, this.state.list); }
  timeoutSearch = (value, list) => {
    setTimeout(() => {
      this.setState({ visualList: searchItems(value, list) });
    }, 500);
  }

  render() {
    const { dialog, visualList, itemToEdit, list } = this.state;

    return (
      <>
        <ul className="control-panel">
          <li><button className="item positive" onClick={this.onAddClicked}>Add Item</button></li>
          <li><button className="item positive" onClick={this.onSortClicked}>Sort</button></li>
          <li><input className="item search" type="text" name="search" placeholder="Search"
                     onChange={this.onSearchChange} /></li>
        </ul>
        {dialog && <Dialog close={this.closeDialog} parent={this.callbackFromDialog} item={itemToEdit} />}
        <ItemContainer items={visualList ? visualList : list} deleteItem={this.deleteItem}
                       editItem={this.editItem}
                       markItemAsTodoDone={this.markItemAsTodoDone} />
      </>
    );
  }
}

export default App;
