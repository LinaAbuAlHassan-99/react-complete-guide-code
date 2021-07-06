// turn my product to link not nav link becuse i dont need active styling
import { Link } from 'react-router-dom';
// p1,p2,p3 keys

// now i load this but under the product links not in a new page (not leaving the product page)
//thats beacuse how react match the path that the same start of path loaded at the same time
/*
and this good if i need to have the details just under the comp(multiple route active at the same time)
put if i want new page i need to do this(one active rout on the time)
 in App.js
*/
const Products = () => {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A Book</Link>//P1 -> /:productId
        </li>
        <li>
          <Link to='/products/p2'>A Carpet</Link>
        </li>
        <li>
          <Link to='/products/p3'>An Online Course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
