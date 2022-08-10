import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
} from '@coreui/react'

const EditProduct = ({ Products, onUpdate }) => {
  const [Product, setProduct] = useState({})
  const { id } = useParams()
  console.log(id.toString())

  useEffect(() => {
    // loadProducts()
    const product = Products.find((p) => p.barcode === id)
    console.log(product)
    setProduct(product)
  }, [Products])

  const handleChange = (e) => {
    const product = { ...Product, PK: 'STORE#WQ', [e.target.name]: e.target.value }
    setProduct(product)
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              {Product && (
                <CCardBody className="p-4">
                  <CForm onSubmit="">
                    <h1>Edit Product</h1>
                    <p className="text-medium-emphasis">Edit your product details</p>
                    <div className="mb-3">
                      <CFormLabel htmlFor="title">Product Title</CFormLabel>
                      <CFormInput
                        type="text"
                        id="title"
                        placeholder="Dalda Oil"
                        required
                        name="title"
                        onChange={handleChange}
                        value={Product.title}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="barcode">Product Barcode</CFormLabel>
                      <CFormInput
                        type="text"
                        id="barcode"
                        placeholder="123456"
                        required
                        name="barcode"
                        onChange={handleChange}
                        value={Product.barcode}
                      />
                    </div>
                    <div className="mb-3">
                      <CFormLabel htmlFor="price">Product Price</CFormLabel>
                      <CFormInput
                        type="number"
                        id="price"
                        placeholder="400"
                        required
                        name="price"
                        onChange={handleChange}
                        value={Product.price}
                      />
                    </div>
                    <CButton className="btn-warning mb-3" onClick={(e) => onUpdate(Product)}>
                      Edit Product
                    </CButton>
                    {/* <button className="btn btn-info m-2" onClick="">
                    Save
                  </button> */}
                    <Link to="/products">
                      <button className="btn btn-danger ms-2 mb-3">Cancel</button>
                    </Link>
                  </CForm>
                </CCardBody>
              )}
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default EditProduct
