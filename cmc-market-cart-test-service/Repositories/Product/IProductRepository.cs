using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Repositories
{
    public interface IProductRepository : IRepository
    {
        IEnumerable<Product> GetProducts();
    }
}
