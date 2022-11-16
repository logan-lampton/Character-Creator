class MoodsController < ApplicationController

    # GET /moods
 def index
    moods = Mood.all
    render json: moods, status: :ok
end

# GET /moods/:id
def show
    mood = Mood.find_by(id: params[:id])
    if mood
        render json: mood, status: :ok
    else
        render json: {error: "Mood not found"}, status: :not_found
    end
end

# POST /moods
def create
    mood = Mood.create!(mood_params)
    if mood.valid?
        render json: mood, status: :created
    else
        render json: {errors: mood.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /moods/:id
def update
    mood = Mood.find(params[:id])
    if mood
        mood.update(mood_params)
            if mood.valid?
                render json: mood, status: :ok
            else
                render json: {errors: mood.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Mood not found"}, status: :not_found
    end
end

# DELETE /moods/:id
def destroy
    mood = Mood.find(params[:id])
    if mood
        mood.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Mood not found"}, status: :not_found
    end
end

private

def mood_params
    params.permit(:status, :name, :user_id)
end

end
