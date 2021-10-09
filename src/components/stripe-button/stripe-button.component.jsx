import React from "react";
import StripeCheckout from "react-stripe-checkout";

const onToken = (token) => {
  console.log(token);
  alert("Payment Successful!");
};

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Jih2NSHND8fynXp4tezBQWfWlLwZBPttomqEerE8165UzbFMKzgRuL63dFnR3dgQe63MYyYHIVdQOlBiPOkNn3B00p1m3AR4v";
  return (
    <StripeCheckout
      label="Pay Now"
      name="AppZo"
      billingAddress
      shippingAddress
      image="https://sngshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
