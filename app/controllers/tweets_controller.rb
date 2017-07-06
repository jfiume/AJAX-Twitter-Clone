class TweetsController < ApplicationController
  before_action :require_logged_in!

  def create
    # simulate latency
    sleep(1)

    @tweet = current_user.tweets.build(tweet_params)

    if @tweet.save
      # redirect_to request.referrer
      respond_to do |format|
        format.json { render :show }
        format.html { redirect_to request.referrer }
      end
    else
      # Lazy: even respond with JSON to invalid HTML request.
      # render json: @tweet.errors.full_messages, status: 422
      respond_to do |format|
        format.html { render html: @tweet.errors.full_messages, status: 422 }
        format.json { render json: @tweet.errors.full_messages, status: 422 }
      end
    end
  end

  def show
    
  end

  private
  def tweet_params
    params.require(:tweet).permit(:content, mentioned_user_ids: [])
  end
end
