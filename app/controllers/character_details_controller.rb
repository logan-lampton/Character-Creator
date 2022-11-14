class CharacterDetailsController < ApplicationController

# GET /character_details
 def index
    character_details = CharacterDetail.all
    render json: character_details, status: :ok
end

# GET /character_details/:id
def show
    character_detail = CharacterDetail.find_by(id: params[:id])
    if character_detail
        render json: character_detail, status: :ok
    else
        render json: {error: "Character Detail not found"}, status: :not_found
    end
end

# POST /character_details
def create
    character_detail = CharacterDetail.create!(character_detail_params)
    if character_detail.valid?
        render json: character_detail, status: :created
    else
        render json: {errors: character_detail.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /character_details/:id
def update
    character_detail = CharacterDetail.find(params[:id])
    if character_detail
        character_detail.update(character_detail_params)
            if character_detail.valid?
                render json: character_detail, status: :ok
            else
                render json: {errors: character_detail.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Character Detail not found"}, status: :not_found
    end
end

# DELETE /character_details/:id
def destroy
    character_detail = CharacterDetail.find(params[:id])
    if character_detail
        character_detail.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Character Detail not found"}, status: :not_found
    end
end

private

def character_detail_params
    params.permit(:alignment, :faith, :lifestyle, :character_id, :user_id)
end

end
