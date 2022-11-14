class DescriptionsController < ApplicationController

# GET /descriptions
def index
    descriptions = Description.all
    render json: descriptions, status: :ok
end

# GET /descriptions/:id
def show
    description = Description.find_by(id: params[:id])
    if description
        render json: description, status: :ok
    else
        render json: {error: "Description not found"}, status: :not_found
    end
end

# POST /descriptions
def create
    description = Description.create(
        background: params[:background],
        alignment: params[:alignment],
        faith: params[:faith],
        lifestyle: params[:lifestyle],
        hair: params[:hair],
        skin: params[:skin],
        eyes: params[:eyes], 
        height: params[:height], 
        weight: params[:weight], 
        age: params[:age], 
        personality_traits: params[:personality_traits], 
        ideals: params[:ideals], 
        bonds: params[:bonds], 
        flaws: params[:flaws], 
        organizations: params[:organizations], 
        allies: params[:allies], 
        enemies: params[:enemies], 
        backstory: params[:backstory], 
        other: params[:other], 
        character_id: params[:character_id]
    )
    render json: description, status: :created

    # description = Description.create!(description_params)
    # if description.valid?
    #     render json: description, status: :created
    # else
    #     render json: {errors: description.errors.full_messages}, status: :unprocessable_entity
    # end
end

# PATCH /descriptions/:id
def update
    description = Description.find(params[:id])
    if description
        description.update(description_params)
            if description.valid?
                render json: description, status: :ok
            else
                render json: {errors: description.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Description not found"}, status: :not_found
    end
end

# DELETE /descriptions/:id
def destroy
    description = Description.find(params[:id])
    if description
        description.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Description not found"}, status: :not_found
    end
end

private

def description_params
    params.permit(:background, :alignment, :faith, :lifestyle, :hair, :skin, :eyes, :height, :weight, :age, :personality_traits, :ideals, :bonds, :flaws, :organizations, :allies, :enemies, :backstory, :other, :character_id, :user_id)
end

end
