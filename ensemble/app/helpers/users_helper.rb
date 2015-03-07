module UsersHelper

  def give_token
    session[:user_id] = @user.id
  end

  def create_or_login(response)
    p response
    p response.user.username
    p response.user.profile_picture
    p response.access_token
    p response.user.full_name
  end

end
