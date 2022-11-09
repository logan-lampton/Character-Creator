class CharacterConnectionsController < ApplicationController

# GET /character_connections
 def index
    character_connections = CharacterClass.all
    render json: character_connections, status: :ok
end

# GET /character_connections/:id
def show
    character_connection = CharacterClass.find_by(id: params[:id])
    if character_connection
        render json: character_connection, status: :ok
    else
        render json: {error: "Character class not found"}, status: :not_found
    end
end

# POST /character_connections
def create
    character_connection = CharacterClass.create!(character_connection_params)
    if character_connection.valid?
        render json: character_connection, status: :created
    else
        render json: {errors: character_connection.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /character_connections/:id
def update
    character_connection = CharacterClass.find(params[:id])
    if character_connection
        character_connection.update(character_connection_params)
            if character_connection.valid?
                render json: character_connection, status: :ok
            else
                render json: {errors: character_connection.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Character class not found"}, status: :not_found
    end
end

# DELETE /character_connections/:id
def destroy
    character_connection = CharacterClass.find(params[:id])
    if character_connection
        character_connection.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Character class not found"}, status: :not_found
    end
end

private

def character_connection_params
    params.permit(:name, :character_id)
end

end
