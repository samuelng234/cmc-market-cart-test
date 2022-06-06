using cmc_market_cart_test_service.Models;
using MediatR;

namespace cmc_market_cart_test_service.Queries
{
    public class GetCountryListQuery : IQuery<IEnumerable<Country>>
    {
        public GetCountryListQuery()
        {
        }
    }
}
