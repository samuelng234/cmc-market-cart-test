using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Repositories
{
    public interface IGlobalisationRepository : IRepository
    {
        Country GetDefaultCountry();
        IEnumerable<Country> GetCountryList();
    }
}
