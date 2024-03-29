import React, { useEffect, useState } from "react";
import styling from "../src/Api_Fetch.module.css"

function Api_Fetch() {
  const [content, setContent] = useState([]);
  const Fetching = async () => {
    const data = await fetch("https://dummyjson.com/products");
    const final_data = await data.json();
    console.log(final_data.products);
    setContent(final_data.products);
  };
  useEffect(() => {
    Fetching();
  }, []);

  return (
    <div>
      <table border={1}>
        <thead>
          <th>Sl</th>
          <th>Title</th>
          <th>Images</th>
          <th>Desription</th>
          <th>Price</th>
          <th>Stock</th>
        </thead>
        {content.map((ele, id) => {
          return (
            <>
              <tbody>
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td >
                    <img className={styling.resize} src={ele.images[0]} />
                  </td>
                  <td>{ele.description}</td>
                  <td>{ele.price}</td>
                  <td>{ele.stock}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default Api_Fetch;
