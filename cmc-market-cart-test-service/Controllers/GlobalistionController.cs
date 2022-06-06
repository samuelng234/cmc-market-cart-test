using cmc_market_cart_test_service.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace cmc_market_cart_test_service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GlobalistionController : ControllerBase
    {
        private readonly ISender _mediator;
        private readonly ILogger<GlobalistionController> _logger;

        public GlobalistionController(ISender mediator, ILogger<GlobalistionController> logger)
        {
            _mediator = mediator;
            _logger = logger;
        }

        [HttpGet]
        [Route("default")]
        public async Task<IActionResult> GetDefaultCountry()
        {
            try
            {
                return Ok(await _mediator.Send(new GetDefaultCountryQuery()));
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }

        [HttpGet]
        [Route("countries")]
        public async Task<IActionResult> GetCountryList()
        {
            try
            {
                return Ok(await _mediator.Send(new GetCountryListQuery()));
            }
            catch (Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }
        }
    }
}