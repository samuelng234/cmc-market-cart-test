using cmc_market_cart_test_service.Models;
using cmc_market_cart_test_service.Queries;
using cmc_market_cart_test_service.Repositories;
using MediatR;

namespace cmc_market_cart_test_service.QueryHandlers
{
    public class GetProductsQueryHandler : IRequestHandler<GetProductsQuery, IEnumerable<Product>>
    {
        private readonly IProductRepository _repository;
        public GetProductsQueryHandler(IProductRepository repo)
        {
            if (repo == null)
            {
                throw new ArgumentNullException(nameof(repo));
            }

            _repository = repo;
        }

        public Task<IEnumerable<Product>> Handle(GetProductsQuery query, CancellationToken token)
        {
            return Task.FromResult(_repository.GetProducts());
        }
    }
}
