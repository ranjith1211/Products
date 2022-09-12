import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./Test.css";
const ShowData = () => {
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setDisplay(res.data);
        console.log(display);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="test">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SR No</th>
            <th>Product Code</th>
            <th>Price</th>
          </tr>
        </thead>
        {display.map((e, i) => {
          return (
            <tbody key={i}>
              <tr>
                <td>{i + 1}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
              </tr>
            </tbody>
          );
        })}
      </Table>
    </div>
  );
};

export default ShowData;
