class AbilitiesController < ApplicationController

# GET /abilities
def index
    abilities = Ability.all
    render json: abilities, status: :ok
end

# GET /abilities/:id
def show
    ability = Ability.find_by(id: params[:id])
    if ability
        render json: ability, status: :ok
    else
        render json: {error: "Ability not found"}, status: :not_found
    end
end

# POST /abilities
def create
    ability = Ability.create!(ability_params)
    if ability.valid?
        render json: ability, status: :created
    else
        render json: {errors: ability.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /abilities/:id
def update
    ability = Ability.find(params[:id])
    if ability
        ability.update(ability_params)
            if ability.valid?
                render json: ability, status: :ok
            else
                render json: {errors: ability.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Ability not found"}, status: :not_found
    end
end

# DELETE /abilities/:id
def destroy
    ability = Ability.find(params[:id])
    if ability
        ability.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Ability not found"}, status: :not_found
    end
end

private

def ability_params
    params.permit(:strength, :dexterity, :constitution, :intelligence, :wisdom, :charisma, :character_id, :user_id)
end

end
