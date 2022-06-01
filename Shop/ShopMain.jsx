import { Component } from 'react';
import AuthenticatedRoute from '../AuthenticatedRoute';
import ProductList from './ProductList/ProductList';
import Product from './ProductList/Product';
import ProductUpdate from './ProductManage/ProductUpdate';
import Cart from './Cart/Cart';
import Checkout from './ShopOrder/Checkout';
import Receipt from './ShopOrder/Receipt';
import Layout from './Layout';
import Dashboard from './Dashboard/Dashboard';
import ProductDashboard from './ProductManage/ProductDashboard';

class ShopMain extends Component {
  render() {
    return (
      <>
        <Layout>
          <AuthenticatedRoute path="/Online-Shop" exact component={ProductList} />
          <AuthenticatedRoute path="/Online-Shop/ProductList" exact component={ProductList} />
          <AuthenticatedRoute path="/Online-Shop/product/:id" exact component={Product} />
          <AuthenticatedRoute path="/Online-Shop/productUpdate/:id" exact component={ProductUpdate} />
          <AuthenticatedRoute path="/Online-Shop/cart" exact component={Cart} />
          <AuthenticatedRoute path="/Online-Shop/ShopOrder/Shiping-Address" exact component={Checkout} />
          <AuthenticatedRoute path="/Online-Shop/ShopOrder/Receipt/:id" exact component={Receipt} />
          <AuthenticatedRoute path="/Online-Shop/Dashboard" exact component={Dashboard} />
          <AuthenticatedRoute path="/Online-Shop/ProductManagement" exact component={ProductDashboard} />
        </Layout>
      </>
    );
  }
}

export default ShopMain