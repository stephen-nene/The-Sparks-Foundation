class TransactionsController < ApplicationController
  before_action :set_transaction, only: %i[ show update destroy ]

  # GET /transactions
  def index
    @transactions = Transaction.all

    render json: @transactions
  end

  # GET /transactions/1
  def show
    render json: @transaction
  end

# POST /transactions
def create
  @transaction = Transaction.new(transaction_params)

  sender = User.find(@transaction.sender_id)
  recipient = User.find(@transaction.recipient_id)

  if sender && recipient
    sender_before_balance = BigDecimal(@transaction.sender_before_balance)
    recipient_before_balance = BigDecimal(@transaction.recipient_before_balance)
    amount = BigDecimal(@transaction.amount)

    if sender.account_balance.to_d >= amount
      sender.account_balance = (sender_before_balance - amount).to_s
      recipient.account_balance = (recipient_before_balance + amount).to_s

      Transaction.transaction do
        sender.save!
        recipient.save!
        @transaction.save!
      end

      render json: @transaction, status: :created, location: @transaction
    else
      render json: { error: 'Insufficient balance' }, status: :unprocessable_entity
    end
  else
    render json: { error: 'Invalid sender or recipient' }, status: :unprocessable_entity
  end
end



  # PATCH/PUT /transactions/1
  def update
    if @transaction.update(transaction_params)
      render json: @transaction
    else
      render json: @transaction.errors, status: :unprocessable_entity
    end
  end

  # DELETE /transactions/1
  def destroy
    @transaction.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_transaction
      @transaction = Transaction.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def transaction_params
      params.require(:transaction).permit(:sender_id, :recipient_id, :amount, :sender_before_balance, :recipient_before_balance)
    end
end
