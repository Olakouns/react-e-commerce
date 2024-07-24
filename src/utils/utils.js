export const filterProducts = (search, productList) => {
    if (search === "") {
      return productList; 
    } else {
        return productList.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase());
        });
    }
};