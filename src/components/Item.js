import React, { useState } from "react";

function Item({ name, category }) {

  const [itemState, setItemState] = useState(true)

  const itemClass = itemState ? "" : "in-cart"
  const buttonObj = itemState ?
    { buttonClass: "add", buttonName: "Add to Cart" }
    :
    { buttonClass: "remove", buttonName: "Remove from Cart" }
  function listHandler() {
    setItemState((shelf) => !shelf)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={listHandler}
        className={buttonObj.buttonClass}>{buttonObj.buttonName}</button>
    </li>
  );
}

export default Item;
