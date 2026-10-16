import "./ItemDetail.css";
import { Item } from "../Item/Item";

export const ItemDetail = ({ item }) => {
  return (
    <div className="detail-wrapper">
      <Item {...item}>
        <button className="btn bg-primary primary">
          Agregar al carrito
        </button>
      </Item>
    </div>
  );
};
