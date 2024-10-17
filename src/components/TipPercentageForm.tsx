import { OrderActions } from "../reducers/order-reducers";
import { Dispatch } from "react";
const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

type TipPercentageFormProps = {
  dispatch: Dispatch<OrderActions>
  tip: number;
};

export default function TipPercentageForm({
dispatch,
  tip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>

      <form action="">
        {tipOptions.map((tipOptions) => (
          <div className="flex gap-2" key={tipOptions.id}>
            <label htmlFor="">{tipOptions.label}</label>
            <input
              type="radio"
              name="tip"
              value={tipOptions.value}
              id={tipOptions.id}
              onChange={e => dispatch({type: "add-tip", payload: {value: +e.target.value}})}
              checked={tipOptions.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
