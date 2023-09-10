import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ProductsData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const requestProducts = await fetch(
        "https://dummyjson.com/products/",
      ).then((res) => res.json());
      setData(requestProducts.products);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      {data &&
        data.map((item) => (
          <ItemInfo key={item.id}>
            <ImgWrapper>
              <img
                src={item.images[0]}
                style={{ width: "300px", height: "200px" }}
              />
            </ImgWrapper>
            <TitleText>{item.title}</TitleText>
            <PriceText>{`${item.price}달러`}</PriceText>
          </ItemInfo>
        ))}
      ;
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 60vw;
  justify-content: center;
  align-items: center;
`;

const ItemInfo = styled.article`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const ImgWrapper = styled.article`
  display: flex;
  width: 300px;
  height: 200px;
  border-radius: 15px;
  overflow: hidden;
  margin: 5px;
`;
const TitleText = styled.article`
  display: flex;
`;
const PriceText = styled.article`
  display: flex;
  font-weight: bold;
`;

export default ProductsData;
