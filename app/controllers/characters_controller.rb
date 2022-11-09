class CharactersController < ApplicationController

 # GET /characters
 def index
    characters = Characters.all
    render json: characters, status: :ok
end

# GET /characters/:id
def show
    character = Character.find_by(id: params[:id])
    if character
        render json: character, status: :ok
    else
        render json: {error: "Character not found"}, status: :not_found
    end
end

# POST /characters
def create
    character = Character.create!(character_params)
    if character.valid?
        render json: character, status: :created
    else
        render json: {errors: character.errors.full_messages}, status: :unprocessable_entity
    end
end


# PATCH /characters/:id
def update
    character = Character.find(params[:id])
    if character
        character.update(character_params)
            if character.valid?
                render json: character, status: :ok
            else
                render json: {errors: character.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Character not found"}, status: :not_found
    end
end

# DELETE /characters/:id
def destroy
    character = Character.find(params[:id])
    if character
        character.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Character not found"}, status: :not_found
    end
end

private

def character_params
    params.permit(:name, :image)
end

end
