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
                Name = "Test",
                Price = 10.10M
            });

            return products;
        }
    }
}
