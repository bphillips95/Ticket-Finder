class ReviewsController < ApplicationController
    def index

    end 

    # Post route for comment
    def create
        byebug
        params[:username] = params[:user_name]

        @user = User.create(userParams)
        params[:user_id] = @user.id 
        @review = Review.create(reviewParams)
        
        render json: @review
        # This works
        # Review.create(content:'sdfsd', user_name:'sdfs', user_id:'1', rating:'1')
    end

    private 
    def userParams
        params.permit(:username)
    end

    def reviewParams
        params.permit(:content, :rating, :user_id, :user_name)
    end



end
