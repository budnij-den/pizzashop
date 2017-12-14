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

def parse_order order_lines
  s1=order_lines.split(/,/);
  arr=[];
  s1.each do |x|
    s2=x.split(/\=/);
    s3 = s2[0].split(/_/);
    id = s3[1];
    count = s2[1];
    arr2=[id,count];
    arr.push arr2
  end
  return arr
end

get '/' do
  @products=Product.all
  erb :index
end

get "/link1" do
  erb "second page"
end

post "/cart" do
  @order_in_cart = parse_order params[:orders];

  erb "#{@order_in_cart}"
end
