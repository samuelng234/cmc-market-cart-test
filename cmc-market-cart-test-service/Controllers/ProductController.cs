using cmc_market_cart_test_service.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace cmc_market_cart_test_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly ISender _mediator;
        private readonly ILogger<CartController> _logger;

        public ProductController(ISender mediator, ILogger<CartController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                var products = await _mediator.Send(new GetProductsQuery());
                return Ok(products);
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}