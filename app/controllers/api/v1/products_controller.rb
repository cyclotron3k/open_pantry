class Api::V1::ProductsController < ApplicationController

  before_action :authenticate_user!

  def index
    product = Product.all.order(title: :desc)
    render json: product, include: :user
  end

  def create
    raise NotImplementedError
  end

  def show
  end

  def destroy
  end

  private

  def set_product
    @product = Product.find(params[:id])
  end

end
