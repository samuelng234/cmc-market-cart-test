using cmc_market_cart_test_service.Commands;
using cmc_market_cart_test_service.Models;
using cmc_market_cart_test_service.Queries;
using cmc_market_cart_test_service.Repositories;
using MediatR;

namespace cmc_market_cart_test_service.QueryHandlers
{
    public class CalculateShippingCommandHandler : IRequestHandler<CalculateShippingCommand, decimal>
    {
        private readonly ICartRepository _repository;
        public CalculateShippingCommandHandler(ICartRepository repo)
        {
            if (repo == null)
            {
                throw new ArgumentNullException(nameof(repo));
            }

            _repository = repo;
        }

        public Task<decimal> Handle(CalculateShippingCommand command, CancellationToken token)
        {
            return Task.FromResult(_repository.CalculateShipping(command.items));
        }
    }
}
