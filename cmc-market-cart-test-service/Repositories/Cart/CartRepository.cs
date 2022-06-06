using cmc_market_cart_test_service.Models;

namespace cmc_market_cart_test_service.Repositories
{
    public class CartRepository : ICartRepository
    {
        public CartRepository()
        {
        }

        public decimal CalculateShipping(IEnumerable<CartItem> items)
        {
            decimal totalAmount = 0;

            foreach(CartItem item in items)
            {
                totalAmount += item.Price * item.Quantity;
            }

            return totalAmount > 50 ? 20 : 10;
        }
    }
}
