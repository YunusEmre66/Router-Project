import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import axios from 'axios';

const ProductDetail = () => {
    const [product, setProduct] = useState("")
    const {title, image, price, description} = product;
    console.log(product);
    const navigate = useNavigate();
  //  const {id:productId} = useParams(); //? değişken ismini bu şekilde productId diye değiştirebiliriz
   const {id} = useParams();

   const getProduct = async () => {
    const url = `https://fakestoreapi.com/products/${id}`;
    try {
      let { data } = await axios(url);
      setProduct(data);
    } catch (error) {}
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Container className="mt-3 w-50">
    <Row>

          <Col key={id}  className="my-2 col-6 mx-auto">
            <Card className="shadow p-3" >
              <Card.Img  variant="top" src={image} style={{height:"300px"}} />
              <Card.Body>
                <Card.Title style={{height:"100px", overflow:"hidden"}}>{title}</Card.Title>
                <Card.Text className="text-justify">
                 {description}
                </Card.Text>
                <Card.Text className="text-danger h4">
                 {price}€
                </Card.Text>
                <Button className="mt-1 me-2" onClick={()=>navigate(`/`)} variant="primary">Go Home Page</Button>
                <Button className="mt-1" onClick={()=>navigate(-1)} variant="primary">Go Back</Button>
              </Card.Body>
            </Card>
          </Col>
 
    </Row>
  </Container>
  )
}

export default ProductDetail