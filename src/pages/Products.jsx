import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      let { data } = await axios(url);
      setProducts(data);
    } catch (error) {}
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (

    <Container className="mt-3">
      <Row>
        {products.map((product) => {
          const {id, title, image, price} = product;
          return (
            <Col key={id} sm={6} md={4} xl={3} className="my-2">
              <Card className="shadow p-3" >
                <Card.Img onClick={()=>navigate(`${id}`, {state:product})} variant="top" src={image} style={{height:"300px"}} />
                <Card.Body>
                  <Card.Title style={{height:"100px", overflow:"hidden"}}>{title}</Card.Title>
                  <Card.Text className="text-danger h4">
                   {price}€
                  </Card.Text>
                  <Button className="w-100 mt-1" onClick={()=>navigate(`${id}`, {state:product})} variant="primary">Go Product Detail</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
