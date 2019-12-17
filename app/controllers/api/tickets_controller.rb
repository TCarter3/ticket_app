class Api::TicketsController < ApplicationController
  before_action :authenticate_user!

  before_action :set_ticket, only: [:show, :update, :destroy]


  def index
    render json: Ticket.all
  end

  def show
    render json: @ticket
  end

  def create
    ticket = Ticket.new(ticket_params)

    if ticket.save
      render json: ticket
    else
      render json: ticket.errors, status: 422
    end
  end

  def update
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: @ticket.errors, status: 422
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
  end

  private 

  def set_ticket
    @ticket = Ticket.find(params[:id])
  end

  def ticket_params
    params.require(:ticket).permit(:name, :description, :urgency, :completed)
  end
end
