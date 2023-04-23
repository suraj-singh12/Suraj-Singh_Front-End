
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li key={index}
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={() => onClickHandler(index)}
    >
      {text}
    </li>
  );
};

// this ensures that the props passed to WrappedSingleListItem are of the type specified below
// if any irregularity is found, it will be caught and shown in terminal
WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);   // SingleListItem is now an optimized version of WrappedSingleListItem,
// which uses memoization (ie. whenever the current WrappedSingleListItem re-renders, react compares its current current props 
// to its previous props, and will only re-render (WrappedSingleListItem) only if they have changed)


// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex, setSelectedIndex] = useState();

  // when items array changes, we set selectedIndex to null
  useEffect(() => {
    setSelectedIndex(null);
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem key={index}
          onClickHandler={() => handleClick(index)}
          text={item.text}
          index={index}
          isSelected={selectedIndex === index}
        />
      ))}
    </ul>
  )
};

// ensure the props to WrappedListComponent are of the syntax
// [{text: 'item1', text: 'item2'}]
WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

// by default, the props to WrappedListComponent are null
WrappedListComponent.defaultProps = {
  items: null,
};

const List = memo(WrappedListComponent);  
// WrappedListComponent will re-render only when its new props are different than its previous props
// thereby avoiding unncessary renders

export default List;        // exporting a highly optimized list

