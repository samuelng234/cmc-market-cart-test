using MediatR;

namespace cmc_market_cart_test_service.Queries
{
    public interface IQuery<T> : IRequest<T>
    {
    }
}
