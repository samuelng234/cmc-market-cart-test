using cmc_market_cart_test_service.Commands;

namespace cmc_market_cart_test_service.CommandHandlers
{
    public interface ICommandHandler<TCommand> where TCommand : ICommand
    {
        void Handle(TCommand command);
    }
}
