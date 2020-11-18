import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';

import './styles.css';

export default class Product extends Component {
  state = {
    product: {},
    loading: true,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/products/${id}`);

    this.setState({ product: response.data, loading: false });
  }

  render() {
    const { product, loading } = this.state;

    if (loading) return <Spinner />;
    return (
      <div className="product-info">
        <article>
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          <p>
            URL: <a href={product.url}>{product.url}</a>
          </p>
        </article>
        <div className="return">
          <Link to="/">Home</Link>
        </div>
      </div>
    );
  }
}
