require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe 'GET #index' do
    it 'renders the :index template' do
      get :index
      expect(response).to render_template :index
    end

    it 'returns a 200 status' do
      get :index
      expect(response.status).to eq(200)
    end
  end

  # describe 'POST #create' do
    # before :each do
    #   @users = attributes_for(:user)
    # end
    context "with valid attributes" do
      p FactoryGirl.attributes_for(:user)
      it "creates new contact" do
        expect{
          post :create, user: FactoryGirl.attributes_for(:user)
        }.to change(User, :count).by(1)
      end
    end


end
