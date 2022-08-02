import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from "./Post";
import './style.css';
const ListadoPosts = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post?limit=10', {
        headers: { 'app-id': '61748e5a77b1a31ba8f4ea16' },
      })
      .then((res) => {
        setResponse(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div>
      <h1>Listado de Posts</h1>
      <nav>
        <Link to={'/'}>Home</Link>
      </nav>

      {response &&
        response.data && // el && valida si eso es cierto y lo otro tambien, hace el map
        response.data.map((item) => {
          //arreglar esto de la data del array y el first y last!!!
          return (
            <div>
              <Post item={item}/>
            </div>
          );
        })}
    </div>
  );
};

export default ListadoPosts;
