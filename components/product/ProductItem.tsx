import Image from "next/image";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { addToCart, incrementItem } from "../../redux/actions/cartActions";
import cookie from "js-cookie";
import { CCard, CCardBody, CButton } from "@coreui/react";
import { useRouter } from "next/router";
import { Post } from "utils/axios";

const ProductItem = ({ product }: any) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = cookie.get("token");
  const { cartItems } = useSelector((state: RootStateOrAny) => state.cart);
  const data = useSelector((state) => state);

  const isInCart = (product: any) => {
    return !!cartItems.find((item: any) => item._id === product._id);
  };
  const handleAddtoCart = () => {
    console.log(data);
    if (token) {
      if (isInCart(product)) {
        dispatch(incrementItem(product));
      } else {
        dispatch(addToCart(product));
      }
      Post("/customer/addtocart", {
        data: data.cart.cartItems,
      }).then((res) => {
        console.log(res, "res");
      });
    } else {
      router.push("/login");
    }
  };

  return (
    <CCard style={{ maxWidth: 200 }} className="mb-4">
      <Image
        className="product-img"
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        objectFit="contain"
      />
      <CCardBody>
        <p className="fw-bold mb-2">{product.name}</p>
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <p className="mb-1 fw-medium">
              <small>
                Rp.
                {product.selling_price.toLocaleString("id-ID")}
                ,-
              </small>
            </p>
            <p className="text-secondary mb-0">
              <small>
                Dibeli <span className="text-primary"> {product.sold} </span>
                kali
              </small>
            </p>
          </div>
          <CButton
            onClick={(e) => {
              e.preventDefault();
              handleAddtoCart();
            }}
          >
            Beli
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  );
};

export default ProductItem;
