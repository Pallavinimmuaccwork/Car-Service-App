export const ADDTOCART = "ADDTOCART"
export const AddtoCartfunc = (cartdata) => {
    console.log(cartdata);
    return {

        type : ADDTOCART, payload : cartdata
    }
}