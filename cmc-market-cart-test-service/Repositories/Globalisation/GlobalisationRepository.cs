using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Repositories
{
    public class GlobalisationRepository : IGlobalisationRepository
    {
        public GlobalisationRepository()
        {
        }

        public Country GetDefaultCountry()
        {
            return new Country()
            {
                Code = "AU",
                Name = "Australia",
                CurrencyCode = "AUD",
                ExchangeRate = 1
            };
        }

        public IEnumerable<Country> GetCountryList()
        {
            var countries = new List<Country>();

            countries.Add(new Country()
            {
                Code = "AU",
                Name = "Australia",
                CurrencyCode = "AUD",
                ExchangeRate = 1
            });

            countries.Add(new Country()
            {
                Code = "DE",
                Name = "Germany",
                CurrencyCode = "EUR",
                ExchangeRate = 0.67M
            });

            countries.Add(new Country()
            {
                Code = "JP",
                Name = "Japan",
                CurrencyCode = "JPY",
                ExchangeRate = 94.30M
            });

            countries.Add(new Country()
            {
                Code = "MX",
                Name = "Mexico",
                CurrencyCode = "MXN",
                ExchangeRate = 14.07M
            });

            return countries;
        }
    }
}
