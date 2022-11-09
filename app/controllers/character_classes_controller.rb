class CharacterClassesController < ApplicationController

# GET /character_classes
 def index
    character_classes = CharacterClasses.all
    render json: character_classes, status: :ok
end

# GET /character_classes/:id
def show
    character_class = CharacterClass.find_by(id: params[:id])
    if character_class
        render json: character_class, status: :ok
    else
        render json: {error: "Character class not found"}, status: :not_found
    end
end

# POST /character_classes
def create
    character_class = CharacterClass.create!(character_class_params)
    if character_class.valid?
        render json: character_class, status: :created
    else
        render json: {errors: character_class.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /character_classes/:id
def update
    character_class = CharacterClass.find(params[:id])
    if character_class
        character_class.update(character_class_params)
            if character_class.valid?
                render json: character_class, status: :ok
            else
                render json: {errors: character_class.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Character class not found"}, status: :not_found
    end
end

# DELETE /character_classes/:id
def destroy
    character_class = CharacterConnection.find(params[:id])
    if character_class
        character_class.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Character connection not found"}, status: :not_found
    end
end

private

def character_class_params
    params.permit(:name, :character_id)
end

end
