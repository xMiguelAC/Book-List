class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

before_action :allow_cors
  def allow_cors
      headers['Access-Control-Allow-Origin'] = '*'
      # headers['Access-Control-Request-Method'] = '*'
      headers['Access-Control-Request-Method'] = 'GET, PUT, DELET, POST, OPTIONS'
  end

end
