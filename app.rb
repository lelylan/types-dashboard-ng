require 'sinatra/base'

class App < Sinatra::Base
  get '/*', provides: 'html' do
    File.new('app/index.html').readlines
  end

  set :public_folder, File.dirname(__FILE__) + '/app'
end

