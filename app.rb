#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

configure :development do
  set :database, "sqlite3:pizzashop.db"
end

configure :production do
  set :database, "pg:pizzashop"
end

class Product < ActiveRecord::Base

end


get '/' do
  @products=Product.all
  erb :index
end

get "/link1" do
  erb "second page"
end

post "/cart" do
  erb "cart"
end
