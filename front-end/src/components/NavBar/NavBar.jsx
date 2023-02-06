import React from 'react';
import { useHistory } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user')) || {};

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  const nameTag = (
    <p
      className="user-name"
      data-testid="customer_products__element-navbar-user-full-name"
    >
      { user.name }
    </p>
  );
  const logoutTag = (
    <button
      type="button"
      onClick={ clearLocalStorage }
      data-testid="customer_products__element-navbar-link-logout"
      className="btn-logout"
    >
      Logout
    </button>
  );

  if (user.role === 'customer') {
    return (
      <div className="navbar">
        <div className="links-container">
          <button
            type="button"
            onClick={ () => history.push('/customer/products') }
            data-testid="customer_products__element-navbar-link-products"
            className="button-navbar"
          >
            Produtos
          </button>
          <button
            type="button"
            onClick={ () => history.push('/customer/orders') }
            data-testid="customer_products__element-navbar-link-orders"
            className="button-navbar"
          >
            Meus Pedidos
          </button>
        </div>
        <div className="name-logout-container">
          {nameTag}
          <div className="box-logout">
            {logoutTag}
          </div>
        </div>
      </div>
    );
  } if (user.role === 'seller') {
    return (
      <div className="navbar">
        <div className="links-container">
          <button
            type="button"
            onClick={ () => history.push('/seller/orders') }
            data-testid="customer_products__element-navbar-link-orders"
            className="button-navbar"
          >
            Meus Pedidos
          </button>
        </div>
        <div className="name-logout-container">
          {nameTag}
          <div className="box-logout">
            {logoutTag}
          </div>
        </div>
      </div>
    );
  } if (user.role === 'administrator') {
    return (
      <div className="navbar">
        <div className="links-container">
          <button
            type="button"
            onClick={ () => history.push('/admin/manage') }
            data-testid="customer_products__element-navbar-link-orders"
            className="button-navbar"
          >
            Gerenciar Usuarios
          </button>
        </div>
        <div className="name-logout-container">
          {nameTag}
          <div className="box-logout">
            {logoutTag}
          </div>
        </div>
      </div>
    );
  }
  return null;
}
