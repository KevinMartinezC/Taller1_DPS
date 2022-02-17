import React from 'react';
import {useState} from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown,DropdownItem,DropdownMenu,DropdownToggle } from 'reactstrap';

export default function Main(props) {
  const [dropdown, setDropdown] = useState(false);
  const abrirCerrarDropdown =()=>{
    setDropdown(!dropdown);
  }  
  const { products, onAdd } = props;
  return (
    <main className="block1 coll-1 ">
      <h2>Productos Disponibles</h2>
      <div className="row1">
      <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown}>
        <DropdownToggle caret>
            Seleccione Producto
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem > {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}</DropdownItem>
        </DropdownMenu>
    </Dropdown>
      </div>
    </main>
  );
}
