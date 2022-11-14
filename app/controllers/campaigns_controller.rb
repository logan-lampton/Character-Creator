class CampaignsController < ApplicationController

# GET /campaigns
def index
    campaigns = Campaign.all
    render json: campaigns, status: :ok
end

# GET /campaigns/:id
def show
    campaign = Campaign.find_by(id: params[:id])
    if campaign
        render json: campaign, status: :ok
    else
        render json: {error: "Campaign not found"}, status: :not_found
    end
end

# POST /campaigns
def create
    campaign = Campaign.create(campaign_params)
    if campaign.valid?
        render json: campaign, status: :created
    else
        render json: {errors: campaign.errors.full_messages}, status: :unprocessable_entity
    end
end

# PATCH /campaigns/:id
def update
    campaign = Campaign.find_by(id: params[:id])
    if campaign
        campaign.update(campaign_params)
            if campaign.valid?
                render json: campaign, status: :ok
            else
                render json: {errors: campaign.errors.full_messages}, status: :unprocessable_entity
            end
    else
        render json: {error: "Campaign not found"}, status: :not_found
    end
end

# DELETE /campaignes/:id
def destroy
    campaign = Campaign.find(params[:id])
    if campaign
        campaign.destroy
        render json: {}, status: :no_content
    else
        render json: {error: "Campaign not found"}, status: :not_found
    end
end

private

def campaign_params
    params.permit(:name, :description)
end

end
