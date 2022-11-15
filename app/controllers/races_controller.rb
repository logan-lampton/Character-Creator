class RacesController < ApplicationController

# GET /races
 def index
    races = Race.all
    render json: races, status: :ok
end

# GET /races/:id
def show
    race = Race.find_by(id: params[:id])
    if race
        render json: race, status: :ok
    else
        render json: {error: "Race not found"}, status: :not_found
    end
end

# POST /races
def create
    race = Race.create!(race_params)
    if race.valid?
        render json: race, status: :created
    else
        render json: {errors: race.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /races/:id
def update
    race = Race.find(params[:id])
    if race
        race.update(race_params)
            if race.valid?
                render json: race, status: :ok
            else
                render json: {errors: race.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Race not found"}, status: :not_found
    end
end

# DELETE /races/:id
def destroy
    race = Race.find(params[:id])
    if race
        race.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Race not found"}, status: :not_found
    end
end

private

def race_params
    params.permit(:name, :character_id)
end

end
