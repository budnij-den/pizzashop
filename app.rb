#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'
require 'json'

configure :development do
  set :database, "sqlite3:pizzashop.db"
end

configure :production do
  set :database, "pg:pizzashop"
end

class Product < ActiveRecord::Base
end

class Client
  attr_accessor :name, :phone, :adress
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

before do
    @products=Product.all
end

get '/' do
  erb :index
end

get "/link1" do
  erb "link 1 page"
end

post "/cart" do
  @order_in_cart = parse_order params[:orders];
  @total_cash = 0
  @c=Client.new
  @c.name = :jim; @c.phone = 8456123; @c.adress = 'red square, 1'
  erb :cart
end

post "/client" do
  arr_lines = params[:client][:order].split(/\,/);
  order = []
   arr_lines.each do |x|
    arr2 = x.split(/\=/);
     id = arr2[0].to_i
     count = arr2[1].to_i
     order << [id,count]
   end


  erb "client page<br> #{order}<br> #{params}"
end
