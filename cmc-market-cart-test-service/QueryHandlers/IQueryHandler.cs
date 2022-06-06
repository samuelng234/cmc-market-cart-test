using cmc_market_cart_test_service.Queries;

namespace cmc_market_cart_test_service.QueryHandlers
{
    public interface IQueryHandler<TQuery> where TQuery : IQuery
    {
        dynamic Handle(TQuery query);
    }
}
