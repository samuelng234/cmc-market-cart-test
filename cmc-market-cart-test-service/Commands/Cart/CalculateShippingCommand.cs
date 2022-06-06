using cmc_market_cart_test_service.Models;
using MediatR;

namespace cmc_market_cart_test_service.Commands
{
    public class CalculateShippingCommand : ICommand<decimal>
    {
        public IEnumerable<CartItem> items { get; set; }

        public CalculateShippingCommand(IEnumerable<CartItem> items)
        {
            this.items = items;
        }
    }
}
