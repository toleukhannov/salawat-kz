// libraries
import { type FC } from 'react';
// helpers
import { formatPrice } from 'helpers/formatPrice';

type PriceListProps = {
  priceName: string;
  amount: number;
};

const PriceListItem: FC<PriceListProps> = ({ priceName, amount }) => {
  return (
    <li className="price-list-item">
      <span>{priceName}</span>
      <span>{formatPrice(amount)}</span>
    </li>
  );
};

export default PriceListItem;
