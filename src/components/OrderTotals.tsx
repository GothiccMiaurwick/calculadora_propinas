import { OrderItem } from "../types";
import formatCurrency from "../helpers";
import { OrderActions } from "../reducers/order-reducers";

type OrderTotalsProps = {
  order: OrderItem[];
  tip: number;
  dispatch: React.Dispatch<OrderActions>
};

export default function OrderTotals({
  order,
  tip,
  dispatch
}: OrderTotalsProps) {
  const subtotalAmount = order.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const tipAmount = subtotalAmount * tip;
  const totaAmount = subtotalAmount + tipAmount;

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y Propinas</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

        <p>
          Propinas: {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totaAmount)}</span>
        </p>
      </div>

      <button
        className="w-full bg-black text-white p-3 mt-10 uppercase font-bold disabled:opacity-10"
        disabled={subtotalAmount === 0}
        onClick={ () => dispatch({type: 'place-order'}) }
      >
        Guardar orden
      </button>
    </>
  );
}
