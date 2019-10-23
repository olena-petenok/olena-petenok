import React from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard.jsx';

class ItemContainer extends React.PureComponent {
  constructor(props) { super(props); }

  render () {
    let data = null;
    if (this.props.items === undefined) {
      data = <p>The list is undefined</p>;
    } else if (this.props.items === null || this.props.items.length === 0) {
      data = <p>The list is empty</p>;
    } else {
      data = this.props.items.map(item =>
        <ItemCard key={item.id.toString()} item={item} deleteItem={this.props.deleteItem}
                  editItem={this.props.editItem} markItemAsTodoDone={this.props.markItemAsTodoDone} />
      );
    }

    return (
      <section className="to-do-items-container">
        <section className="grid">
          {data}
        </section>
      </section>
    );
  }
}

export default ItemContainer;
