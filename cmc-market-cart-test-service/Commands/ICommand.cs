using MediatR;

namespace cmc_market_cart_test_service.Commands
{
    public interface ICommand<T> : IRequest<T>
    {
    }
}
