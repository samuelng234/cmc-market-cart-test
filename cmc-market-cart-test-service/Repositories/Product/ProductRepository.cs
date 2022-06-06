using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Repositories
{
    public class ProductRepository : IProductRepository
    {
        public ProductRepository()
        {
        }

        public IEnumerable<Product> GetProducts()
        {
            var products = new List<Product>();

            products.Add(new Product()
            {
                Id = 1,
                Name = "Socks",
                Price = 10.10M
            });

            products.Add(new Product()
            {
                Id = 2,
                Name = "T-Shirt",
                Price = 25.99M
            });

            products.Add(new Product()
            {
                Id = 3,
                Name = "Hoodie",
                Price = 120.00M
            });

            products.Add(new Product()
            {
                Id = 4,
                Name = "Pants",
                Price = 49.95M
            });

            products.Add(new Product()
            {
                Id = 5,
                Name = "Shoes",
                Price = 223.50M
            });

            return products;
        }
    }
}
