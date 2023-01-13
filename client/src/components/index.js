import React from "react";
import {
  Home,
  WishList,
  ProtectedRoute,
  AdminProtectedRoute,
  CartProtectedRoute,
  PageNotFound,
  ProductDetails,
  ProductByCategory,
  CheckoutPage,
  Terms,
  Privacy,
  Return,
  Shipping,
  About,
  Contact,
} from "./shop";
import { DashboardAdmin, Categories, Products, Orders } from "./admin";
import { UserProfile, UserOrders, SettingUser } from "./shop/dashboardUser";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Goal from "./sign-up/goal";
import Gender from "./sign-up/gender";
import PhysicalIinfo from "./sign-up/physical-info";
import DietType from "./sign-up/diet-type";
import MealType from "./sign-up/meal-type";
import MealPlanPreference from "./sign-up/meal-plan-preference";

/* Routing All page will be here */
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        {/* Shop & Public Routes */}
        <Route exact path="/" component={Home} />
        <Route exact path="/wish-list" component={WishList} />
        <Route exact path="/terms-and-condition" component={Terms} />
        <Route exact path="/privacy-policy" component={Privacy} />
        <Route exact path="/return-policy" component={Return} />
        <Route exact path="/shipping-payment-policy" component={Shipping} />
        <Route exact path="/aboutus" component={About} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/sign-up/goal" component={Goal} />
        <Route exact path="/sign-up/gender" component={Gender} />
        <Route exact path="/sign-up/physical-info" component={PhysicalIinfo} />
        <Route exact path="/sign-up/diet-type" component={DietType} />
        <Route exact path="/sign-up/meal-type" component={MealType} />
        <Route exact path="/sign-up/meal-plan-preference" component={MealPlanPreference} />

        <Route exact path="/products/:id" component={ProductDetails} /
        >
        <Route
          exact
          path="/products/category/:catId"
          component={ProductByCategory}
        />
        <CartProtectedRoute
          exact={true}
          path="/checkout"
          component={CheckoutPage}
        />
        {/* Shop & Public Routes End */}

        {/* Admin Routes */}
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard"
          component={DashboardAdmin}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/categories"
          component={Categories}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/products"
          component={Products}
        />
        <AdminProtectedRoute
          exact={true}
          path="/admin/dashboard/orders"
          component={Orders}
        />
        {/* Admin Routes End */}

        {/* User Dashboard */}
        <ProtectedRoute
          exact={true}
          path="/user/profile"
          component={UserProfile}
        />
        <ProtectedRoute
          exact={true}
          path="/user/orders"
          component={UserOrders}
        />
        <ProtectedRoute
          exact={true}
          path="/user/setting"
          component={SettingUser}
        />
        {/* User Dashboard End */}

        {/* 404 Page */}
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
