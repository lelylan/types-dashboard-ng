require 'sinatra/base'

class App < Sinatra::Base
  set :public_folder, File.dirname(__FILE__) + '/dist'

  get '/*', provides: 'html' do
    send_file File.join(settings.public_folder, 'index.html')
  end
end

