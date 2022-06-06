using cmc_market_cart_test_service.Models;
using cmc_market_cart_test_service.Queries;
using cmc_market_cart_test_service.QueryHandlers;
using cmc_market_cart_test_service.Repositories;
using MediatR;
using Moq;

namespace cmc_market_cart_test_unit_test
{
    public class ProductControllerTest
    {
        [Fact]
        public async void GetProducts()
        {
            //Arange
            var repo = new Mock<IProductRepository>();

            GetProductsQuery query = new GetProductsQuery();
            GetProductsQueryHandler handler = new GetProductsQueryHandler(repo.Object);

            //Act
            IEnumerable<Product> x = await handler.Handle(query, new System.Threading.CancellationToken());

            //Asert
            repo.Verify(x => x.GetProducts());
        }
    }
}
