import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './style.css';
const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const DetallePost = () => {
  const [response, setResponse] = useState(null);
  const { id } = useParams();
  console.log("this.context:", id);

  useEffect(() => {
    axios
      .get('https://dummyapi.io/data/v1/post/' + id, {
        headers: { 'app-id': '61748e5a77b1a31ba8f4ea16' },
      })
      .then((res) => {
        console.log(res);
        setResponse(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    response && (
      <div class="card">
      <p>El id del post es: {response.id}</p>
      <p>
        Usuari@: {capitalize(response.owner.title)} {response.owner.firstName}{' '}
        {response.owner.lastName}
      </p>
      <div class="card-body">
      <img src={response.owner.picture}></img>
      <p>Likes: {response.likes}</p>
      <p>Texto: {response.text}</p>
      <p>Tags: {response.tags}</p>
      <p>Fecha de publicación: {response.publishDate}</p>
      <button type="button" class="btn btn-primary bg-light">
        <Link to={'/'}>Home</Link>
                  </button>
      </div>
    </div>
     )
  );
}

export default DetallePost;
