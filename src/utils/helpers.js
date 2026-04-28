const isAddressValid = (data) => {
  return ["Address", "City", "State", "Country"].every(
    key => data[key].value.trim() !== ""
  );
};

export const deriveAddress=(shippingFormData)=>{
  if (!isAddressValid(shippingFormData)) return "";

  return shippingFormData.Address.value + ", " +
  shippingFormData.City.value + ", " +
  shippingFormData.State.value + ", " +
  shippingFormData.Country.value;
}

const shippingFeeSlabs=[
  {price:100,fee:0},
  {price:50,fee:5},
  {price:0,fee:10}
]

export const calculateShippingFee = (totalAmount) => {
  for(let slab of shippingFeeSlabs){
    if(totalAmount>=slab.price){
      return slab.fee
    }
  }
  return 0;
}