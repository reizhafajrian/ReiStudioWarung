import { useMemo, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import Select from "react-select";
import { CButton, CForm, CFormInput } from "@coreui/react";

const OrderDetails = () => {
  const { total } = useSelector((state: RootStateOrAny) => state.cart);
  const state = useSelector((state) => state);
  const options = useMemo(
    () => [{ value: "transferVA", label: "Transfer VA" }],
    []
  );

  const [disabled, setDisabled] = useState(true);

  return (
    <CForm>
      <div className="mb-3">
        <h5 className="fw-bold">Alamat Pengiriman</h5>
        <CFormInput
          placeholder="Tambah alamat"
          className="border-0 border-bottom border-2 rounded-0 ps-2 py-0"
          readOnly
          value={state.user.user.address}
        />
      </div>
      <div className="mb-3">
        <h5 className="fw-bold">Voucher Belanja</h5>
        <CFormInput
          placeholder="Kode voucher"
          className="border-0 border-bottom border-2 rounded-0 ps-2 py-0"
        />
      </div>
      <div className="mb-3">
        <h5 className="fw-bold">Metode Pembayaran</h5>
        <Select
          className="top"
          classNamePrefix="inner"
          options={options}
          placeholder="-Pilih-"
        />
      </div>
      <div className="mb-3">
        <h5 className="fw-bold">Total harga</h5>
        <h5>Rp.{total.toLocaleString("id-ID")},-</h5>
      </div>
      <div className="text-center">
        <CButton
          className={`w-auto text-white px-3 py-2 ${
            disabled ? "disabled bg-gray  border-gray" : "bg-dark"
          }`}
        >
          Pesan Sekarang
        </CButton>
      </div>
    </CForm>
  );
};

export default OrderDetails;
