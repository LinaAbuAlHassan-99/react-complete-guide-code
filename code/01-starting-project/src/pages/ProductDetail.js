// i want to load the data depend in what is i click
import {useParams} from 'react-router-dom'

const ProductDetail = () => {
    //return params obj(have 2keys hold the dynamic sigmant to load that page)
    const params =useParams();
    console.log(params.productId);

  return (
    <section>
      <h1>Product Detail</h1>
      <P>{params.productId}</P>
    </section>
  );
};
export default ProductDetail;
