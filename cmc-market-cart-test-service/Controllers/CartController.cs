using cmc_market_cart_test_service.Commands;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace cmc_market_cart_test_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ISender _mediator;
        private readonly ILogger<CartController> _logger;

        public CartController(ISender mediator, ILogger<CartController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [HttpPost]
        [Route("shipping")]
        public async Task<IActionResult> CalculateShipping(CalculateShippingCommand command)
        {
            try
            {
                return Ok(await _mediator.Send(command));
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}