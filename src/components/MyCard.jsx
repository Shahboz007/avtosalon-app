import React from "react";
import { Card } from "antd";

const {Meta} = Card;

function MyCard() {
  return (
    <Card
      hoverable
      style={{
        width: '100%',
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" />
    </Card>
  );
}

export default MyCard;
