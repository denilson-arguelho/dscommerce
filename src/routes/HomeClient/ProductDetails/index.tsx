import "./style.css";

import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";


import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-services";
import * as cartService from "../../../services/cart-service";

const ProductDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState<ProductDTO>();

 

  useEffect(() => {

   
   

    /* Requisição na apí, trazendo detalhes de produtos */
    productService
      .findById(Number(params.productId))
      .then((response) => {
        setProduct(response.data);
      })
      .catch(() => {
        navigate("/")
      });
  }, []);

  function handleBuyClick(){
    if(product){
      cartService.addProduct(product)
      navigate("/cart")
    }
  }
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
         <div onClick={handleBuyClick}>
         <ButtonPrimary text="Comprar" />
         </div>
          <Link to={`/`}>
            <ButtonSecondary text="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
