class Api::V1::OrdersController < ApplicationController

  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def index
  end

  def create

    order = Order.create! user: current_user

    total_cost = 0.0

    order_params.select { |_, v| Integer === v && v > 0 }.each do |product_id, amount|
      product = Product.find product_id
      cost = product.cost * amount
      total_cost += cost
      LineItem.create!(
        order: order,
        amount: amount,
        product: product,
        cost: cost,
      )
    end

    order.total_cost = total_cost
    order.save!

    if order
      render json: order
    else
      render json: order.errors
    end
  end

  def show
  end

  def destroy
  end

  private

  def order_params
    params.require(:cart).permit!
  end

end
