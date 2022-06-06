using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Queries
{
    public class GetProductsQuery : IQuery<IEnumerable<Product>>
    {
        public GetProductsQuery()
        {
        }
    }
}
