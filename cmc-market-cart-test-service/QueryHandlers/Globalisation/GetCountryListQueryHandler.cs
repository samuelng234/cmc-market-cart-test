using cmc_market_cart_test_service.Models;
using cmc_market_cart_test_service.Queries;
using cmc_market_cart_test_service.Repositories;
using MediatR;

namespace cmc_market_cart_test_service.QueryHandlers
{
    public class GetCountryListQueryHandler : IRequestHandler<GetCountryListQuery, IEnumerable<Country>>
    {
        private readonly IGlobalisationRepository _repository;
        public GetCountryListQueryHandler(IGlobalisationRepository repo)
        {
            if (repo == null)
            {
                throw new ArgumentNullException(nameof(repo));
            }

            _repository = repo;
        }

        public Task<IEnumerable<Country>> Handle(GetCountryListQuery query, CancellationToken token)
        {
            return Task.FromResult(_repository.GetCountryList());
        }
    }
}
