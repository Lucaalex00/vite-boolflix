import { reactive } from "vue"; //IMPORT REACTIVE FROM VUEJS
import { axios } from "axios"; //Import Axios to Get CALLS

export const productCallState = reactive({
  products_url: "https://developers.themoviedb.org/3",
  products: [],
  getProducts(url) {
    axios.get(url).then((response) => {
      console.log(response);
      this.products = response.data;
    });
  },
});
