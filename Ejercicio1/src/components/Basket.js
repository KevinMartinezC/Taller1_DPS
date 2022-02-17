import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const totalPrice = itemsPrice;
  return (
    <aside className="block1 coll-1">
      <h2>Productos Agregados</h2>
      <div>
        {cartItems.length === 0 && <div>Lista de Compra vacia</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row1">
            <div className="coll-2">{item.name}</div>
            <div className="coll-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="coll-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row1">
              <div className="coll-2">
                <strong>Precio Total:</strong>
              </div>
              <div className="coll-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
          </>
        )}
      </div>
    </aside>
  );
}
